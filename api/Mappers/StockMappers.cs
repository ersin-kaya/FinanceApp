using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Models;

namespace api.Mappers
{
    public static class StockMappers
    {
        public static StockDto ToStockDto(this Stock stockModel)
        {
            return new StockDto
            {
                Id = stockModel.Id,
                Symbol = stockModel.Symbol,
                CompanyName = stockModel.CompanyName,
                Purchase = stockModel.Purchase,
                LastDiv = stockModel.LastDiv,
                Industry = stockModel.Industry,
                MarketCap = stockModel.MarketCap,
                Comments = stockModel.Comments.Select(c => c.ToCommentDto()).ToList()
            };
        }

        public static Stock ToStockFromCreateDTO(this CreateStockRequestDto stockDto)
        {
            try
            {
                return new Stock
                {
                    Symbol = stockDto.Symbol,
                    CompanyName = stockDto.CompanyName,
                    Purchase = stockDto.Purchase,
                    LastDiv = stockDto.LastDiv,
                    Industry = stockDto.Industry,
                    MarketCap = stockDto.MarketCap
                };
            }
            catch (Exception e)
            {
                return null;
            }
        }
        
        public static CreateStockRequestDto ToCreateDTOFromStockDTO(this StockDto stockDto)
        {
            try
            {
                return new CreateStockRequestDto
                {
                    Symbol = stockDto.Symbol,
                    CompanyName = stockDto.CompanyName,
                    Purchase = stockDto.Purchase,
                    LastDiv = stockDto.LastDiv,
                    Industry = stockDto.Industry,
                    MarketCap = stockDto.MarketCap
                };
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public static StockDto ToStockFromFMP(this FMPStock fMPStock)
        {
            return new StockDto
            {
                Symbol = fMPStock.Symbol,
                CompanyName = fMPStock.CompanyName,
                Purchase = (decimal)fMPStock.Price,
                LastDiv = (decimal)fMPStock.LastDiv,
                Industry = fMPStock.Industry,
                MarketCap = fMPStock.MktCap
            };
        }
    }
}