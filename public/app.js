const API_BASE = window.location.origin;

const el = {
  apiBase: document.getElementById('apiBase'),
  form: document.getElementById('userForm'),
  name: document.getElementById('name'),
  email: document.getElementById('email'),
  password: document.getElementById('password'),
  msg: document.getElementById('formMessage'),
  usersState: document.getElementById('usersState'),
  usersList: document.getElementById('usersList'),
  loadUsersBtn: document.getElementById('loadUsersBtn'),
  refreshBtn: document.getElementById('refreshBtn'),
  clearViewBtn: document.getElementById('clearViewBtn'),
};

el.apiBase.textContent = API_BASE;

function setMessage(text, type) {
  el.msg.textContent = text || '';
  el.msg.classList.remove('ok', 'bad');
  if (type === 'ok') el.msg.classList.add('ok');
  if (type === 'bad') el.msg.classList.add('bad');
}

function normalizeUsersResponse(body) {
  if (Array.isArray(body)) return body;
  if (body && Array.isArray(body.users)) return body.users;
  if (body && Array.isArray(body.data)) return body.data;
  return [];
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[m]));
}

function renderUsers(users) {
  el.usersList.innerHTML = '';

  if (!users.length) {
    el.usersState.textContent = 'No users found (empty response).';
    return;
  }

  el.usersState.textContent = `Users found: ${users.length}`;

  for (const u of users) {
    const li = document.createElement('li');
    li.className = 'item';
    li.innerHTML = `
      <div><strong>${escapeHtml(u.name ?? '(no name)')}</strong></div>
      <div class="muted">${escapeHtml(u.email ?? '(no email)')}</div>
      <div class="muted small">id: ${escapeHtml(String(u.id ?? u.user_id ?? 'n/a'))}</div>
    `;
    el.usersList.appendChild(li);
  }
}

async function api(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });

  // Try JSON, fallback to text
  const contentType = res.headers.get('content-type') || '';
  let body;
  if (contentType.includes('application/json')) {
    body = await res.json();
  } else {
    body = await res.text();
  }

  return { res, body };
}

async function loadUsers() {
  el.usersState.textContent = 'Loading...';
  setMessage('', null);

  const { res, body } = await api('/users', { method: 'GET' });

  if (!res.ok) {
    setMessage(`Failed to load users: HTTP ${res.status}`, 'bad');
    el.usersState.textContent = 'Load failed.';
    return;
  }

  const users = normalizeUsersResponse(body);
  renderUsers(users);
}

el.form.addEventListener('submit', async (e) => {
  e.preventDefault();
  setMessage('', null);

  const user = {
    name: el.name.value.trim(),
    email: el.email.value.trim(),
    password: el.password.value,
  };

  const { res, body } = await api('/users', {
    method: 'POST',
    body: JSON.stringify(user),
  });

  if (res.ok) {
    setMessage('User created successfully.', 'ok');
    el.form.reset();
    await loadUsers();
    return;
  }

  // Attempt to extract a meaningful message
  const message =
    (body && body.error && body.error.message) ||
    (body && body.message) ||
    (typeof body === 'string' ? body : null) ||
    `Request failed (HTTP ${res.status}).`;

  setMessage(message, 'bad');
});

el.loadUsersBtn.addEventListener('click', loadUsers);
el.refreshBtn.addEventListener('click', loadUsers);
el.clearViewBtn.addEventListener('click', () => {
  el.usersList.innerHTML = '';
  el.usersState.textContent = 'Cleared. Press “Load users” or “Refresh”.';
  setMessage('', null);
});
