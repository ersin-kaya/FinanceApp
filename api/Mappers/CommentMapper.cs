using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Models;

namespace api.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentDto(this Comment commentModel)
        {
            return new CommentDto
            {
                Id = commentModel.Id,
                StockId = commentModel.StockId,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreatedOn = commentModel.CreatedOn,
            };
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

        public static Comment ToCommentFromUpdate(this UpdateCommentRequestDto commentDto)
        {
            return new Comment
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
            };
        }
    }
}