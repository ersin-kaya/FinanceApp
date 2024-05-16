using api.Dtos.Portfolio;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;

namespace api.Services;

public class PortfolioService : IPortfolioService
{
    public readonly IPortfolioRepository _portfolioRepository;

    public PortfolioService(IPortfolioRepository portfolioRepository)
    {
        _portfolioRepository = portfolioRepository;
    }

    public async Task<List<StockDto>> GetUserPortfolio(AppUser user)
    {
        var stockDtos = (await _portfolioRepository.GetUserPortfolio(user)).Select(s=>s.ToStockDto()).ToList();
        return stockDtos;
    }

    public async Task<PortfolioDto> CreateAsync(PortfolioDto portfolioDto)
    {
        return (await _portfolioRepository.CreateAsync(portfolioDto.ToPortfolio())).ToPortfolioDto();
    }

    public async Task<PortfolioDto> DeletePortfolio(AppUser appUser, string symbol)
    {
        return (await _portfolioRepository.DeletePortfolio(appUser, symbol)).ToPortfolioDto();
    }
}