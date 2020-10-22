﻿// <auto-generated />
using Capstroe2.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Capstroe2.Migrations.Users
{
    [DbContext(typeof(UsersContext))]
    [Migration("20200830075826_Initial Create9")]
    partial class InitialCreate9
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Capstroe2.Models.UsersDetails", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Password");

                    b.Property<string>("address");

                    b.Property<string>("phone");

                    b.Property<string>("userEmail");

                    b.Property<string>("userName");

                    b.HasKey("id");

                    b.ToTable("TblUsers");
                });
#pragma warning restore 612, 618
        }
    }
}