using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstroe2.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Capstroe2
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            services.AddDbContext<UsersContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("AzureConnection")));

            services.AddDbContext<CategorysContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("AzureConnection")));

            services.AddDbContext<OrderContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("AzureConnection")));

            services.AddDbContext<OrderItemsContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("AzureConnection")));

            services.AddDbContext<ProductContext>(options =>
            options.UseSqlServer(Configuration.GetConnectionString("AzureConnection")));

            services.AddCors(options =>
            {
                options.AddPolicy("EnableCORS", builder =>
                {
                    builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod().AllowCredentials().Build();
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseCors("EnableCORS");
            app.UseMvc();
        }
    }
}
