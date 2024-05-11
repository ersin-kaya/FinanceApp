using api.Dtos.Stock;
using api.Helpers;
using api.Models;

namespace api.Services
{
    public interface IStockService
    {
        Task<List<Stock>> GetAllAsync(StockQueryObject stockQuery);
        Task<Stock?> GetByIdAsync(int id);
        Task<Stock?> GetBySymbolAsync(string symbol);
        Task<Stock> CreateAsync(Stock stockModel);
        Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto);
        Task<Stock?> DeleteAsync(int id);
        Task<bool> StockExists(int id);
    }
}