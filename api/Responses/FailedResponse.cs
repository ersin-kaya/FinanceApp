namespace api.Responses;

public class FailedResponse<TError> : Response, IFailedResponse<TError>
{
    public IEnumerable<TError> Errors { get; }
    
    public FailedResponse(string message, IEnumerable<TError> errors) : base(false, message)
    {
        Errors = errors;
    }

    public FailedResponse(IEnumerable<TError> errors) : base(false)
    {
        Errors = errors;
    }

    public FailedResponse(string message) : base(false, message)
    {
        Errors = Enumerable.Empty<TError>();
    }

    public FailedResponse() : base(false)
    {
        Errors = Enumerable.Empty<TError>();
    }
}