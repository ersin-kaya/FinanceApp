using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
using api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/stock")]
    [ApiController]
    [Authorize]
    public class StockController : ControllerBase
    {
        private readonly IStockService _stockService;

        public StockController(IStockService stockService)
        {
            _stockService = stockService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] StockQueryObject stockQueryObject)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stocks = await _stockService.GetAllAsync(stockQueryObject);
            
            return Ok(stocks);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stock = await _stockService.GetByIdAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateStockRequestDto createStockRequestDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var createdStock = await _stockService.CreateAsync(createStockRequestDto);

            return CreatedAtAction(nameof(GetById), new { id = createdStock.Id }, createdStock);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateStockRequestDto updateStockRequestDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stock = await _stockService.UpdateAsync(id, updateStockRequestDto);

            if (stock == null)
            {
                return NotFound();
            }

            return Ok(stock);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stock = await _stockService.DeleteAsync(id);

            if (stock == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}