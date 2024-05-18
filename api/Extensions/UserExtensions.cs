using api.Models;
using Microsoft.AspNetCore.Identity;

namespace api.Extensions;

public static class UserExtensions
{
    public static async Task<AppUser?> GetCurrentUserAsync(this UserManager<AppUser> userManager, IHttpContextAccessor httpContextAccessor)
    {
        var username = httpContextAccessor.HttpContext.User.GetUsername();
        var appUser = await userManager.FindByNameAsync(username);
        return appUser;
    }
}