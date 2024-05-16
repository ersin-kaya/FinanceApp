using api.Dtos.Stock;
using api.Helpers;
using api.Interfaces;
using api.Mappers;
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
        
        public async Task<List<StockDto>> GetAllAsync(StockQueryObject stockQuery)
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
            var pagedStocks = await stocks.Skip(skipNumber).Take(stockQuery.PageSize).ToListAsync();
            var stockDtos = pagedStocks.Select(s=>s.ToStockDto()).ToList();

            return stockDtos;
        }

        public async Task<StockDto?> GetByIdAsync(int id)
        {
            var stockDto = (await _stockRepository.GetByIdAsync(id)).ToStockDto();
            return stockDto;
        }

        public async Task<StockDto?> GetBySymbolAsync(string symbol)
        {
            var stock = (await _stockRepository.GetBySymbolAsync(symbol));
            
            try
            {
                var stockDto = stock.ToStockDto();
                return stockDto;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public async Task<StockDto> CreateAsync(CreateStockRequestDto createStockRequestDto)
        {
            var stockDto = (await _stockRepository.CreateAsync(createStockRequestDto.ToStockFromCreateDTO())).ToStockDto();
            return stockDto;
        }

        public async Task<StockDto?> UpdateAsync(int id, UpdateStockRequestDto updateStockRequestDto)
        {
            var stockDto = (await _stockRepository.UpdateAsync(id, updateStockRequestDto)).ToStockDto();
            return stockDto;
        }

        public async Task<StockDto?> DeleteAsync(int id)
        {
            var stockDto = (await _stockRepository.DeleteAsync(id)).ToStockDto();
            return stockDto;
        }

        public Task<bool> StockExists(int id)
        {
            return _stockRepository.StockExists(id);
        }
    }
}