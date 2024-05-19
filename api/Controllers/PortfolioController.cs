using api.Dtos.Portfolio;
using api.Extensions;
using api.Interfaces;
using api.Mappers;
using api.Models;
using api.Responses;
using api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/portfolio")]
    [ApiController]
    [Authorize]
    public class PortfolioController : ControllerBase
    {
        private readonly IPortfolioService _portfolioService;
        private readonly IStockService _stockService;
        private readonly IFMPService _fmpService;

        public PortfolioController(IPortfolioService portfolioService, IStockService stockService, IFMPService fmpService)
        {
            _portfolioService = portfolioService;
            _stockService = stockService;
            _fmpService = fmpService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserPortfolio()
        {
            var userPortfolio = await _portfolioService.GetUserPortfolioAsync();
            return Ok(userPortfolio);
        }

        [HttpPost]
        public async Task<IActionResult> AddPortfolio(string symbol)
        {
            var stock = await _stockService.GetBySymbolAsync(symbol);

            if (stock == null)
            {
                stock = await _fmpService.FindStockBySymbolAsync(symbol);
                
                if (stock == null)
                {
                    return BadRequest("Stock does not exists");
                }

                await _stockService.CreateAsync(stock.ToCreateDTOFromStockDTO());
            }

            if (stock == null)
            {
                return BadRequest("Stock not found");
            }
            
            var response = await _portfolioService.AddStockToPortfolioAsync(symbol, stock.Id);
            
            if (!response.Succeeded)
            {
                return BadRequest(response.Message);
            }

            return Created();
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePortfolio(string symbol)
        {
            var userPortfolio = await _portfolioService.GetUserPortfolioAsync();

            var filteredStock = userPortfolio.Where(s => s.Symbol.ToLower() == symbol.ToLower()).ToList();

            if (filteredStock.Count == 1)
            {
                await _portfolioService.DeletePortfolioAsync(symbol);
            }
            else
            {
                return BadRequest("Stock not in your portfolio");
            }

            return Ok();
        }
    }
}