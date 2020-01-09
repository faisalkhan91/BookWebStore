using Microsoft.EntityFrameworkCore.Migrations;

namespace BookSiteAPI.Migrations
{
    public partial class OrderUpdateTotalPrice2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "TotalPrice",
                table: "Order",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "TotalPrice",
                table: "Order",
                type: "int",
                nullable: false,
                oldClrType: typeof(float));
        }
    }
}
