using api.Dtos.Portfolio;
using api.Dtos.Stock;
using api.Models;

namespace api.Services;

public interface IPortfolioService
{
    Task<List<StockDto>> GetUserPortfolioAsync(AppUser appUser);
    Task<PortfolioDto> CreateAsync(PortfolioDto portfolioDto);
    Task<PortfolioDto> DeletePortfolioAsync(AppUser appUser, string symbol);
}