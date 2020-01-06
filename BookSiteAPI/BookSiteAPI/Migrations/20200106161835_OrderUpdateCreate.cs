using Microsoft.EntityFrameworkCore.Migrations;

namespace BookSiteAPI.Migrations
{
    public partial class OrderUpdateCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BookId1",
                table: "Order");

            migrationBuilder.AddColumn<string>(
                name: "BookId",
                table: "Order",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BookId",
                table: "Order");

            migrationBuilder.AddColumn<string>(
                name: "BookId1",
                table: "Order",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
