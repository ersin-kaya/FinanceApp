using api.Dtos.Comment;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace api.Services;

public class CommentService : ICommentService
{
    public readonly ICommentRepository _commentRepository;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AppUser> _userManager;

    public CommentService(ICommentRepository commentRepository, IHttpContextAccessor httpContextAccessor, UserManager<AppUser> userManager)
    {
        _commentRepository = commentRepository;
        _httpContextAccessor = httpContextAccessor;
        _userManager = userManager;
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

    public async Task<CommentDto?> GetByIdAsync(int id)
    {
        return (await _commentRepository.GetByIdAsync(id)).ToCommentDto();
    }

    public async Task<CommentDto> CreateAsync(Comment commentModel)
    {
        return (await _commentRepository.CreateAsync(commentModel)).ToCommentDto();
    }

    public async Task<CommentDto?> UpdateAsync(int id, Comment commentModel)
    {
        var appUser = await GetUser();
        commentModel.AppUser = appUser;
        
        return (await _commentRepository.UpdateAsync(id, commentModel)).ToCommentDto();
    }

    public async Task<CommentDto?> DeleteAsync(int id)
    {
        var appUser = await GetUser();

        var result = (await _commentRepository.DeleteAsync(id));
        result.AppUser = appUser;
        
        return result.ToCommentDto();
    }

    private async Task<AppUser?> GetUser()
    {
        var username = _httpContextAccessor.HttpContext.User.GetUsername();
        var appUser = await _userManager.FindByNameAsync(username);
        return appUser;
    }
}