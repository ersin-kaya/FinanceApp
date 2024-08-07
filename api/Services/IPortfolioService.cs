using api.Dtos.Portfolio;
using api.Dtos.Stock;
using api.Models;
using api.Responses;

namespace api.Services;

public interface IPortfolioService
{
    Task<List<StockDto>> GetUserPortfolioAsync();
    Task<PortfolioDto> CreateAsync(int stockId);
    Task<PortfolioDto> DeletePortfolioAsync(string symbol);
    Task<IResponse> AddStockToPortfolioAsync(string symbol, int stockId);
}