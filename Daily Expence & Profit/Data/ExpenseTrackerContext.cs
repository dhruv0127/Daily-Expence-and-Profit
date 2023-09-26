using Daily_Expence___Profit.Models;
using Microsoft.EntityFrameworkCore;

namespace Daily_Expence___Profit.Data
{
    public class ExpenseTrackerContext : DbContext
    {
        public ExpenseTrackerContext(DbContextOptions<ExpenseTrackerContext> options)
            : base(options)
        {
        }

        public DbSet<ExpenseTransaction> Transactions { get; set; }
    }
}
