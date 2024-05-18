using api.Dtos.Comment;
using api.Helpers;

namespace api.Services;

public interface ICommentService
{
    Task<List<CommentDto>> GetAllAsync(CommentQueryObject commentQueryObject);
    Task<CommentDto?> GetByIdAsync(int id);
    Task<CommentDto> CreateAsync(CreateCommentDto createCommentDto, int stockId);
    Task<CommentDto?> UpdateAsync(int id, CommentDto commentDto);
    Task<CommentDto?> DeleteAsync(int id);
}