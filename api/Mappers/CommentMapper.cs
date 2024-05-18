using api.Dtos.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static Comment ToComment(this CommentDto commentDto)
        {
            try
            {
                return new Comment()
                {
                    Id = commentDto.Id,
                    AppUserId = commentDto.AppUserId,
                    StockId = commentDto.StockId,
                    Title = commentDto.Title,
                    Content = commentDto.Content,
                    CreatedOn = commentDto.CreatedOn,
                };
            }
            catch (Exception e)
            {
                return null;
            }
        }
        
        public static CommentDto ToCommentDto(this Comment commentModel)
        {
            try
            {
                return new CommentDto
                {
                    Id = commentModel.Id,
                    AppUserId = commentModel.AppUserId,
                    StockId = commentModel.StockId,
                    Title = commentModel.Title,
                    Content = commentModel.Content,
                    CreatedOn = commentModel.CreatedOn,
                    CreatedBy = commentModel.AppUser.UserName,
                };
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static Comment ToCommentFromCreate(this CreateCommentDto commentDto, int stockId)
        {
            return new Comment
            {
                StockId = stockId,
                Title = commentDto.Title,
                Content = commentDto.Content,
            };
        }

        public static CommentDto ToCommentDTOFromCreate(this CreateCommentDto createCommentDto, AppUser appUser, int stockId)
        {
            return new CommentDto()
            {
                AppUserId = appUser.Id,
                StockId = stockId,
                Title = createCommentDto.Title,
                Content = createCommentDto.Content,
                CreatedOn = DateTime.Now,
                CreatedBy = appUser.UserName,
            };
        }

        public static Comment ToCommentFromUpdate(this UpdateCommentRequestDto commentDto)
        {
            return new Comment
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
            };
        }
        
        public static CommentDto ToCommentDTOFromUpdate(this UpdateCommentRequestDto updateCommentRequestDto)
        {
            return new CommentDto
            {
                Title = updateCommentRequestDto.Title,
                Content = updateCommentRequestDto.Content,
            };
        }
    }
}