namespace api.Helpers;

public static class QueryHelper
{
    public static bool IsStringValid(string value)
    {
        return !string.IsNullOrWhiteSpace(value);
    }
}