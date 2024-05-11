using api.Dtos.Stock;
using api.Helpers;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class StockService : IStockService
    {
        public readonly IStockRepository _stockRepository;

        public StockService(IStockRepository stockRepository)
        {
            _stockRepository = stockRepository;
        }
        
        public async Task<List<Stock>> GetAllAsync(StockQueryObject stockQuery)
        {
            var stocks = await _stockRepository.GetAllAsync();
            
            if (QueryHelper.IsStringValid(stockQuery.CompanyName))
            {
                stocks = stocks.Where(s => s.CompanyName.Contains(stockQuery.CompanyName));
            }
            
            if (QueryHelper.IsStringValid(stockQuery.Symbol))
            {
                stocks = stocks.Where(s => s.Symbol.Contains(stockQuery.Symbol));
            }
            
            if (QueryHelper.IsStringValid(stockQuery.SortBy))
            {
                if (stockQuery.SortBy.Equals("Symbol", StringComparison.OrdinalIgnoreCase))
                {
                    stocks = stockQuery.IsDecsending ? stocks.OrderByDescending(s => s.Symbol) : stocks.OrderBy(s => s.Symbol);
                }
            }
            
            var skipNumber = (stockQuery.PageNumber - 1) * stockQuery.PageSize;
            
            return await stocks.Skip(skipNumber).Take(stockQuery.PageSize).ToListAsync();
        }

        public Task<Stock?> GetByIdAsync(int id)
        {
            return _stockRepository.GetByIdAsync(id);
        }

        public Task<Stock?> GetBySymbolAsync(string symbol)
        {
            return _stockRepository.GetBySymbolAsync(symbol);
        }

        public Task<Stock> CreateAsync(Stock stockModel)
        {
            return _stockRepository.CreateAsync(stockModel);
        }

        public Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto)
        {
            return _stockRepository.UpdateAsync(id, stockDto);
        }

        public Task<Stock?> DeleteAsync(int id)
        {
            return _stockRepository.DeleteAsync(id);
        }

        public Task<bool> StockExists(int id)
        {
            return _stockRepository.StockExists(id);
        }
    }
}