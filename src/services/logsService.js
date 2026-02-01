const logModel = require('../models/logsModel');

async function addLog({ user_id, action, ip_address }) {
  return logModel.createLog(user_id, action, ip_address);
}

async function listLogs({ limit, offset }) {
  return logModel.getLogs({ limit, offset });
}

module.exports = { addLog, listLogs };
