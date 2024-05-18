namespace api.Responses;

public class FailedDataResponse<T, TError> : DataResponse<T>, IFailedDataResponse<T, TError>
{
    public IEnumerable<TError> Errors { get; }
    
    public FailedDataResponse(T data, string message, IEnumerable<TError> errors) : base(data, false, message)
    {
        Errors = errors;
    }

    public FailedDataResponse(T data, IEnumerable<TError> errors) : base(data, false)
    {
        Errors = errors;
    }

    public FailedDataResponse(string message, IEnumerable<TError> errors) : base(default, false, message)
    {
        Errors = errors;
    }

    public FailedDataResponse(IEnumerable<TError> errors) : base(default, false)
    {
        Errors = errors;
    }

    public FailedDataResponse(string message) : base(default, false, message)
    {
        Errors = Enumerable.Empty<TError>();
    }

    public FailedDataResponse(T data) : base(data, false)
    {
        Errors = Enumerable.Empty<TError>();
    }

    public FailedDataResponse() : base(default, false)
    {
        Errors = Enumerable.Empty<TError>();
    }
}