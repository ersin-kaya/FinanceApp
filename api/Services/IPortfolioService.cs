using api.Dtos.Portfolio;
using api.Dtos.Stock;
using api.Models;

namespace api.Services;

public interface IPortfolioService
{
    Task<List<StockDto>> GetUserPortfolio(AppUser user);
    Task<PortfolioDto> CreateAsync(PortfolioDto portfolioDto);
    Task<PortfolioDto> DeletePortfolio(AppUser appUser, string symbol);
}