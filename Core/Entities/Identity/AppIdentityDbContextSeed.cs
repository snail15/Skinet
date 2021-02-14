using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace Core.Entities.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Bob",
                    Email = "bob@test.com",
                    UserName = "bob@test.com",
                    Address = new Address
                    {
                        FirstName = "Bob",
                        LastName = "Bobbity",
                        Street = "1 Columbus Circle",
                        City = "New York",
                        State = "NY",
                        Zipcode = "10064"
                    }
                };

                await userManager.CreateAsync(user, "Password@12345");
            }
        }
    }
}