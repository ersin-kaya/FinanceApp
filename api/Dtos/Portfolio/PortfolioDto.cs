using api.Models;

namespace api.Dtos.Portfolio;

public class PortfolioDto
{
    public string AppUserId { get; set; }
    public int StockId { get; set; }

    public AppUser AppUser { get; set; }
}