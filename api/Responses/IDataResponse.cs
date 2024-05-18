namespace api.Responses;

public interface IDataResponse<T> : IResponse
{
    T Data { get; }
}