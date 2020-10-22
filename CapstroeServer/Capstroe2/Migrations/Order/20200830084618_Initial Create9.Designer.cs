﻿// <auto-generated />
using System;
using Capstroe2.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Capstroe2.Migrations.Order
{
    [DbContext(typeof(OrderContext))]
    [Migration("20200830084618_Initial Create9")]
    partial class InitialCreate9
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Capstroe2.Models.OrderDetails", b =>
                {
                    b.Property<int>("orderID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("address");

                    b.Property<string>("blessing");

                    b.Property<string>("comment");

                    b.Property<string>("email");

                    b.Property<string>("phone");

                    b.Property<double>("price");

                    b.Property<bool>("shiping");

                    b.Property<bool>("status");

                    b.Property<int?>("userId");

                    b.Property<string>("userName");

                    b.HasKey("orderID");

                    b.ToTable("TblOrders");
                });
#pragma warning restore 612, 618
        }
    }
}
