namespace api.Responses;

public class DataResponse<T> : Response, IDataResponse<T>
{
    public T Data { get; }

    public DataResponse(T data, bool succeeded, string message) : base(succeeded, message)
    {
        Data = data;
    }

    public DataResponse(T data, bool succeeded) : base(succeeded)
    {
        Data = data;
    }
}