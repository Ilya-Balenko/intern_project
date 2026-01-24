# UI/UX Design

## UI Components

### 1. User Registration Page

**Components:**
- Text input: Name  
- Text input: Email  
- Password input: Password  
- Button: Register  
- Error message area (validation or server errors)

**Description:**
The registration page allows a new user to create an account by entering basic personal data.  
Validation errors or server responses are displayed below the form.

---

### 2. Add Post Page

**Components:**
- Text input: Title  
- Textarea: Content  
- Button: Submit  
- Success / error message area

**Description:**
This page is used to create a new post.  
After submission, the user receives feedback indicating success or an error.

---

### 3. Posts List Page

**Components:**
- Table / list container  
- Post title column  
- Author column  
- Created date column  

**Description:**
The posts list page displays all available posts in a structured list.  
Each row represents one post with basic metadata.

---

## Component Relationships

- Forms send data to the backend API via HTTP requests.
- Validation errors are displayed near the form that triggered them.
- Successful actions (registration, post creation) return confirmation messages.
- Posts list page retrieves data from the backend and renders it as a list.

---

## Design Guidelines

### Color Palette
- Background: light or neutral color (white / light gray)
- Primary elements (buttons): dark or accent color
- Error messages: red
- Success messages: green

---

### Typography
- Font: simple sans-serif (e.g. Arial, Roboto)
- Headings: larger font size, bold
- Form labels and content text: regular font weight

---

### Spacing and Layout
- Forms are centered on the page
- Consistent spacing between input fields
- Clear separation between form area and message area
- Lists and tables use aligned columns for readability

---

## Notes

- Wireframes focus on structure, not final visual appearance.
- No advanced UI logic (filters, sorting, roles) is included at this stage.
- The design prioritizes clarity and simplicity.
