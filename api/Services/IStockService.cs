using api.Dtos.Stock;
using api.Helpers;
using api.Models;

namespace api.Services
{
    public interface IStockService
    {
        Task<List<StockDto>> GetAllAsync(StockQueryObject stockQueryObject);
        Task<StockDto?> GetByIdAsync(int id);
        Task<StockDto?> GetBySymbolAsync(string symbol);
        Task<StockDto> CreateAsync(CreateStockRequestDto createStockRequestDto);
        Task<StockDto?> UpdateAsync(int id, UpdateStockRequestDto updateStockRequestDto);
        Task<StockDto?> DeleteAsync(int id);
        Task<bool> StockExists(int id);
    }
}