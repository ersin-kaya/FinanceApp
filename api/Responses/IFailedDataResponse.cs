namespace api.Responses;

public interface IFailedDataResponse<T, TError> : IDataResponse<T>, IFailedResponse<TError>
{
    
}