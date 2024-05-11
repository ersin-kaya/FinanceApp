using api.Helpers;
using api.Models;

namespace api.Services;

public interface ICommentService
{
    Task<List<Comment>> GetAllAsync(CommentQueryObject queryObject);
    Task<Comment?> GetByIdAsync(int id);
    Task<Comment> CreateAsync(Comment commentModel);
    Task<Comment?> UpdateAsync(int id, Comment commentModel);
    Task<Comment?> DeleteAsync(int id);
}