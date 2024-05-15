using api.Dtos.Comment;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services;

public class CommentService : ICommentService
{
    public readonly ICommentRepository _commentRepository;

    public CommentService(ICommentRepository commentRepository)
    {
        _commentRepository = commentRepository;
    }

    public async Task<List<CommentDto>> GetAllAsync(CommentQueryObject queryObject)
    {
        var comments = await _commentRepository.GetAllAsync();
        
        if (QueryHelper.IsStringValid(queryObject.Symbol))
        {
            comments = comments.Where(s => s.Stock.Symbol == queryObject.Symbol);
        }
        
        if (queryObject.IsDescending)
        {
            comments = comments.OrderByDescending(c => c.CreatedOn);
        }

        var commentDtos = comments.Select(c => c.ToCommentDto());
        
        return await commentDtos.ToListAsync();
    }

    public Task<Comment?> GetByIdAsync(int id)
    {
        return _commentRepository.GetByIdAsync(id);
    }

    public Task<Comment> CreateAsync(Comment commentModel)
    {
        return _commentRepository.CreateAsync(commentModel);
    }

    public Task<Comment?> UpdateAsync(int id, Comment commentModel)
    {
        return _commentRepository.UpdateAsync(id, commentModel);
    }

    public Task<Comment?> DeleteAsync(int id)
    {
        return _commentRepository.DeleteAsync(id);
    }
}