const postModel = require('../../src/models/postsModel');
const { addPost, listPosts, removePost } = require('../../src/services/postsService');

jest.mock('../../src/models/postsModel');

describe('postsService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('addPost: success', async () => {
    postModel.createPost.mockResolvedValue(10);

    const result = await addPost({ user_id: 1, title: 'Hello', content: 'Text' });

    expect(postModel.createPost).toHaveBeenCalledWith(1, 'Hello', 'Text');
    expect(result).toBe(10);
  });

  test('addPost: error', async () => {
    postModel.createPost.mockRejectedValue(new Error('DB error'));

    await expect(
      addPost({ user_id: 1, title: 'Hello', content: 'Text' })
    ).rejects.toThrow('DB error');
  });

  test('listPosts: success', async () => {
    postModel.getPosts.mockResolvedValue([{ id: 1, title: 'T' }]);

    const result = await listPosts({ user_id: 1, limit: 10, offset: 0 });

    expect(postModel.getPosts).toHaveBeenCalledWith({ user_id: 1, limit: 10, offset: 0 });
    expect(Array.isArray(result)).toBe(true);
  });

  test('listPosts: error', async () => {
    postModel.getPosts.mockRejectedValue(new Error('DB error'));

    await expect(
      listPosts({ user_id: 1, limit: 10, offset: 0 })
    ).rejects.toThrow('DB error');
  });

  test('removePost: success', async () => {
    postModel.deletePost.mockResolvedValue(1);

    const result = await removePost(5);

    expect(postModel.deletePost).toHaveBeenCalledWith(5);
    expect(result).toBe(1);
  });

  test('removePost: error', async () => {
    postModel.deletePost.mockRejectedValue(new Error('DB error'));

    await expect(removePost(5)).rejects.toThrow('DB error');
  });
});
