﻿// <auto-generated />
using System;
using Capstroe2.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Capstroe2.Migrations.Product
{
    [DbContext(typeof(ProductContext))]
    [Migration("20200826061412_Initial Create7")]
    partial class InitialCreate7
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Capstroe2.Models.ProductDetails", b =>
                {
                    b.Property<int>("prductID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CatNumber")
                        .HasColumnType("text");

                    b.Property<string>("Material")
                        .HasColumnType("text");

                    b.Property<string>("NeckDiameter")
                        .HasColumnType("text");

                    b.Property<string>("Neckfinish")
                        .HasColumnType("text");

                    b.Property<string>("ProductDiameter")
                        .HasColumnType("text");

                    b.Property<string>("ProductHeight")
                        .HasColumnType("text");

                    b.Property<int>("categoryID");

                    b.Property<string>("color")
                        .HasColumnType("text");

                    b.Property<string>("imag")
                        .HasColumnType("text");

                    b.Property<double?>("price")
                        .HasColumnType("float");

                    b.Property<string>("productDescription")
                        .IsRequired();

                    b.Property<string>("productName")
                        .IsRequired();

                    b.Property<int?>("weight")
                        .HasColumnType("int");

                    b.HasKey("prductID");

                    b.ToTable("TblProducts");
                });
#pragma warning restore 612, 618
        }
    }
}
