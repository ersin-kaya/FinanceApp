using api.Dtos.Stock;

namespace api.Interfaces
{
    public interface IFMPService
    {
        Task<StockDto> FindStockBySymbolAsync(string symbol);
    }
}