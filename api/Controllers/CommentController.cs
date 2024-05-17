using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Comment;
using api.Extensions;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Models;
using api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/comment")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentService _commentService;
        private readonly IStockService _stockService;
        private readonly UserManager<AppUser> _userManager;
        private readonly IFMPService _fmpService;

        public CommentController(ICommentService commentService, IStockService stockService, UserManager<AppUser> userManager, IFMPService fmpService)
        {
            _commentService = commentService;
            _stockService = stockService;
            _userManager = userManager;
            _fmpService = fmpService;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetAll([FromQuery] CommentQueryObject commentQueryObject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comments = await _commentService.GetAllAsync(commentQueryObject);

            return Ok(comments);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = await _commentService.GetByIdAsync(id);

            if (comment == null)
            {
                return NotFound();
            }

            return Ok(comment);
        }

        [HttpPost("{symbol:alpha}")]
        public async Task<IActionResult> Create([FromRoute] string symbol, CreateCommentDto createCommentDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stock = await _stockService.GetBySymbolAsync(symbol);

            if (stock == null)
            {
                stock = await _fmpService.FindStockBySymbolAsync(symbol);
                
                if (stock == null)
                {
                    return BadRequest("Stock does not exists");
                }
                else
                {
                    await _stockService.CreateAsync(stock.ToCreateDTOFromStockDTO());
                }
            }

            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);

            stock = await _stockService.GetBySymbolAsync(symbol);

            var commentDto = createCommentDto.ToCommentDTOFromCreate(appUser, stock.Id);
            var createdComment = await _commentService.CreateAsync(commentDto);
            
            return CreatedAtAction(nameof(GetById), new { id = createdComment.Id }, createdComment);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateCommentRequestDto updateCommentRequestDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            
            var comment = await _commentService.UpdateAsync(id, updateCommentRequestDto.ToCommentDTOFromUpdate());

            if (comment == null)
            {
                return NotFound("Comment not found");
            }

            return Ok(comment);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var comment = await _commentService.DeleteAsync(id);

            if (comment == null)
            {
                return NotFound("Comment does not exist");
            }

            return Ok(comment);
        }
    }
}