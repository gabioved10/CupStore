using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Capstroe2.Migrations.Product
{
    public partial class InitialCreate7 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "TblProducts",
                columns: table => new
                {
                    prductID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    productName = table.Column<string>(nullable: false),
                    productDescription = table.Column<string>(nullable: false),
                    categoryID = table.Column<int>(nullable: false),
                    color = table.Column<string>(type: "text", nullable: true),
                    weight = table.Column<int>(type: "int", nullable: true),
                    quntity = table.Column<int>(type: "int", nullable: true),
                    price = table.Column<double>(type: "float", nullable: true),
                    imag = table.Column<string>(type: "text", nullable: true),
                    Material = table.Column<string>(type: "text", nullable: true),
                    Neckfinish = table.Column<string>(type: "text", nullable: true),
                    CatNumber = table.Column<string>(type: "text", nullable: true),
                    ProductDiameter = table.Column<string>(type: "text", nullable: true),
                    ProductHeight = table.Column<string>(type: "text", nullable: true),
                    NeckDiameter = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TblProducts", x => x.prductID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TblProducts");
        }
    }
}
