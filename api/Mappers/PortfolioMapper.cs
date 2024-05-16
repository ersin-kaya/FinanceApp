using api.Dtos.Portfolio;
using api.Models;

namespace api.Mappers;

public static class PortfolioMapper
{
    public static PortfolioDto ToPortfolioDto(this Portfolio portfolio)
    {
        return new PortfolioDto()
        {
            AppUserId = portfolio.AppUserId,
            StockId = portfolio.StockId,
        };
    }

    public static Portfolio ToPortfolio(this PortfolioDto portfolioDto)
    {
        return new Portfolio()
        {
            AppUserId = portfolioDto.AppUserId,
            StockId = portfolioDto.StockId,
        };
    }
}