namespace Daily_Expence___Profit.Models
{
    public enum TransactionType
    {
        Expense,
        Income
    }
    public class ExpenseTransaction
    {
        public int Id { get; set; }
        public required string Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }

        public TransactionType TransactionType { get; set; }
    }
}
