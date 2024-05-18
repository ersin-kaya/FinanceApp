namespace api.Responses;

public class SuccessfulResponse : Response, ISuccessfulResponse
{
    public SuccessfulResponse(string message) : base(true, message)
    {
    }

    public SuccessfulResponse() : base(true)
    {
    }
}