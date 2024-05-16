using api.Dtos.Comment;
using api.Helpers;
using api.Models;

namespace api.Services;

public interface ICommentService
{
    Task<List<CommentDto>> GetAllAsync(CommentQueryObject commentQuery);
    Task<CommentDto?> GetByIdAsync(int id);
    Task<CommentDto> CreateAsync(CommentDto commentDto);
    Task<CommentDto?> UpdateAsync(int id, CommentDto commentDto);
    Task<CommentDto?> DeleteAsync(int id);
}