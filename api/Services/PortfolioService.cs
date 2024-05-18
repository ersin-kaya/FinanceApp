using api.Dtos.Portfolio;
using api.Dtos.Stock;
using api.Extensions;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Microsoft.AspNetCore.Identity;

namespace api.Services;

public class PortfolioService : IPortfolioService
{
    private readonly IPortfolioRepository _portfolioRepository;
    private readonly IHttpContextAccessor _httpContextAccessor;
    private readonly UserManager<AppUser> _userManager;

    public PortfolioService(IPortfolioRepository portfolioRepository, UserManager<AppUser> userManager, IHttpContextAccessor httpContextAccessor)
    {
        _portfolioRepository = portfolioRepository;
        _userManager = userManager;
        _httpContextAccessor = httpContextAccessor;
    }

    public async Task<List<StockDto>> GetUserPortfolioAsync()
    {
        var appUser = await _userManager.GetCurrentUserAsync(_httpContextAccessor);
        var stockDtos = (await _portfolioRepository.GetUserPortfolioAsync(appUser)).Select(s=>s.ToStockDto()).ToList();
        return stockDtos;
    }

    public async Task<PortfolioDto> CreateAsync(int stockId)
    {
        var appUser = await _userManager.GetCurrentUserAsync(_httpContextAccessor);
        var portfolioDto = new PortfolioDto()
        {
            StockId = stockId,
            AppUserId = appUser.Id,
            AppUser = appUser,
        };
        
        return (await _portfolioRepository.CreateAsync(portfolioDto.ToPortfolio())).ToPortfolioDto();
    }

    public async Task<PortfolioDto> DeletePortfolioAsync(string symbol)
    {
        var appUser = await _userManager.GetCurrentUserAsync(_httpContextAccessor);
        return (await _portfolioRepository.DeletePortfolioAsync(appUser, symbol)).ToPortfolioDto();
    }
}