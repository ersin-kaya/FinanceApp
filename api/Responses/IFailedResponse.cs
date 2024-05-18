namespace api.Responses;

public interface IFailedResponse<TError> : IResponse
{
    IEnumerable<TError> Errors { get; }
}