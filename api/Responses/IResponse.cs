namespace api.Responses;

public interface IResponse
{
    bool Succeeded { get; }
    string Message { get; }
}