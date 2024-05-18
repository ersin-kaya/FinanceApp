namespace api.Responses;

public class Response : IResponse
{
    public bool Succeeded { get; }
    public string Message { get; }
    
    public Response(bool succeeded, string message) : this(succeeded)
    {
        Message = message;
    }

    public Response(bool succeeded)
    {
        Succeeded = succeeded;
    }
}