const logModel = require('../../src/models/logsModel');
const { addLog, listLogs } = require('../../src/services/logsService');

jest.mock('../../src/models/logsModel');

describe('logsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('addLog: success', async () => {
    logModel.createLog.mockResolvedValue(7);

    const result = await addLog({ user_id: 1, action: 'USER_CREATED', ip_address: '127.0.0.1' });

    expect(logModel.createLog).toHaveBeenCalledWith(1, 'USER_CREATED', '127.0.0.1');
    expect(result).toBe(7);
  });

  test('addLog: error', async () => {
    logModel.createLog.mockRejectedValue(new Error('DB error'));

    await expect(
      addLog({ user_id: 1, action: 'X', ip_address: '127.0.0.1' })
    ).rejects.toThrow('DB error');
  });

  test('listLogs: success', async () => {
    logModel.getLogs.mockResolvedValue([{ id: 1, action: 'A' }]);

    const result = await listLogs({ limit: 10, offset: 0 });

    expect(logModel.getLogs).toHaveBeenCalledWith({ limit: 10, offset: 0 });
    expect(Array.isArray(result)).toBe(true);
  });

  test('listLogs: error', async () => {
    logModel.getLogs.mockRejectedValue(new Error('DB error'));

    await expect(listLogs({ limit: 10, offset: 0 })).rejects.toThrow('DB error');
  });
});
