using Microsoft.EntityFrameworkCore.Migrations;

namespace BookSiteAPI.Migrations
{
    public partial class BookUpdateCode : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "Book");

            migrationBuilder.AddColumn<string>(
                name: "BookCode",
                table: "Book",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "BookName",
                table: "Book",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BookCode",
                table: "Book");

            migrationBuilder.DropColumn(
                name: "BookName",
                table: "Book");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Book",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
