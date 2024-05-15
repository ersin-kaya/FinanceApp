using api.Dtos.Comment;
using api.Helpers;
using api.Models;

namespace api.Services;

public interface ICommentService
{
    Task<List<CommentDto>> GetAllAsync(CommentQueryObject commentQuery);
    Task<CommentDto?> GetByIdAsync(int id);
    Task<CommentDto> CreateAsync(Comment comment);
    Task<CommentDto?> UpdateAsync(int id, Comment comment);
    Task<CommentDto?> DeleteAsync(int id);
}