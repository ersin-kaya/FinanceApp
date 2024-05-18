namespace api.Responses;

public class SuccessfulDataResponse<T> : DataResponse<T>, ISuccessfulDataResponse<T>
{
    public SuccessfulDataResponse(T data, string message) : base(data, true, message)
    {
    }

    public SuccessfulDataResponse(T data) : base(data, true)
    {
    }

    public SuccessfulDataResponse(string message) : base(default, true, message)
    {
    }

    public SuccessfulDataResponse() : base(default, true)
    {
    }
}