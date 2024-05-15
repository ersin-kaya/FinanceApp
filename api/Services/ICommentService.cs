using api.Dtos.Comment;
using api.Helpers;
using api.Models;

namespace api.Services;

public interface ICommentService
{
    Task<List<CommentDto>> GetAllAsync(CommentQueryObject commentQuery);
    Task<Comment?> GetByIdAsync(int id);
    Task<Comment> CreateAsync(Comment comment);
    Task<Comment?> UpdateAsync(int id, Comment comment);
    Task<Comment?> DeleteAsync(int id);
}