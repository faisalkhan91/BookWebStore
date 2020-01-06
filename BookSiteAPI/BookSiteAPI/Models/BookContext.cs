using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BookSiteAPI.Models;

namespace BookSiteAPI.Models
{
    public class BookContext : DbContext
    {
        public BookContext(DbContextOptions<BookContext> options) : base(options)
        {
        }
        public DbSet<Book> Books { get; set; }
        public DbSet<Book> Orders { get; set; }
        public DbSet<BookSiteAPI.Models.Order> Order { get; set; }
    }
}
