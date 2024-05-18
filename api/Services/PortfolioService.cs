using api.Dtos.Portfolio;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;

namespace api.Services;

public class PortfolioService : IPortfolioService
{
    private readonly IPortfolioRepository _portfolioRepository;

    public PortfolioService(IPortfolioRepository portfolioRepository)
    {
        _portfolioRepository = portfolioRepository;
    }

    public async Task<List<StockDto>> GetUserPortfolioAsync(AppUser appUser)
    {
        var stockDtos = (await _portfolioRepository.GetUserPortfolioAsync(appUser)).Select(s=>s.ToStockDto()).ToList();
        return stockDtos;
    }

    public async Task<PortfolioDto> CreateAsync(PortfolioDto portfolioDto)
    {
        return (await _portfolioRepository.CreateAsync(portfolioDto.ToPortfolio())).ToPortfolioDto();
    }

    public async Task<PortfolioDto> DeletePortfolioAsync(AppUser appUser, string symbol)
    {
        return (await _portfolioRepository.DeletePortfolioAsync(appUser, symbol)).ToPortfolioDto();
    }
}