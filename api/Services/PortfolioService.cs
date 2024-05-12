using api.Interfaces;
using api.Models;

namespace api.Services;

public class PortfolioService : IPortfolioService
{
    public readonly IPortfolioRepository _portfolioRepository;

    public PortfolioService(IPortfolioRepository portfolioRepository)
    {
        _portfolioRepository = portfolioRepository;
    }

    public Task<List<Stock>> GetUserPortfolio(AppUser user)
    {
        return _portfolioRepository.GetUserPortfolio(user);
    }

    public Task<Portfolio> CreateAsync(Portfolio portfolio)
    {
        return _portfolioRepository.CreateAsync(portfolio);
    }

    public Task<Portfolio> DeletePortfolio(AppUser appUser, string symbol)
    {
        return _portfolioRepository.DeletePortfolio(appUser, symbol);
    }
}