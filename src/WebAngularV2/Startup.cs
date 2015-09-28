using Microsoft.AspNet.Builder;
using Microsoft.Framework.DependencyInjection;

namespace WebAngularV2
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app)
        {
            app.UseStaticFiles();
            app.UseMvc(routes =>
            {
                routes.MapRoute("default", "{controller}/{action}/{id?}",
                    new { controller = "Home", action = "Index" });
            });
        }
    }
}
