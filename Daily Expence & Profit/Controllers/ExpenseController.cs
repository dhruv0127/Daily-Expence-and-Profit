using Daily_Expence___Profit.Data;
using Daily_Expence___Profit.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Daily_Expence___Profit.Controllers
{
    public class ExpenseController : Controller
    {
        private readonly ExpenseTrackerContext _context;
        public ExpenseController(ExpenseTrackerContext context)
        {
            _context = context;
        }
       
        public async Task<IActionResult> Index()
        {
            var transactions = await _context.Transactions.ToListAsync();
            return View(transactions);
        }
        public IActionResult Create()
        {
            return View();
        }

        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transaction = await _context.Transactions
                .FirstOrDefaultAsync(m => m.Id == id);

            if (transaction == null)
            {
                return NotFound();
            }

            return View(transaction);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var transaction = await _context.Transactions.FindAsync(id);

            if (transaction == null)
            {
                return NotFound();
            }

            _context.Transactions.Remove(transaction);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(ExpenseTransaction transaction)
        {
            if (ModelState.IsValid)
            {
                _context.Add(transaction);
                await _context.SaveChangesAsync();

                return RedirectToAction(nameof(Index));
            }
            return View(transaction);
        }

        public IActionResult Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var transaction = _context.Transactions.Find(id);

            if (transaction == null)
            {
                return NotFound();
            }

            return View(transaction);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Edit(int id, [Bind("Id,Description,Amount,Date,TransactionType")] ExpenseTransaction transaction)
        {
            if (id != transaction.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(transaction);
                    _context.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TransactionExists(transaction.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(transaction);
        }
        public IActionResult Graphs(int? selectedYear){
            // Retrieve distinct years from the database transactions
            var availableYears = _context.Transactions
                .Select(t => t.Date.Year)
                .Distinct()
                .OrderByDescending(year => year)
                .ToList();

            ViewBag.AvailableYears = availableYears;

            // Set the default selected year if not provided
            if (!selectedYear.HasValue)
            {
                selectedYear = availableYears.FirstOrDefault();
            }


            // Retrieve transactions for the selected year
            var transactions = _context.Transactions
                .Where(t => t.Date.Year == selectedYear)
                .OrderBy(t => t.Date)
                .ToList();

            if (transactions == null || transactions.Count == 0)
            {
                return Json(new { error = "No transactions found for the selected year." });
            }

            // Format the data for Chart.js (same code as before)
            var labels = transactions.Select(t => t.Date.ToString("MMM")).ToList();
            var incomeData = transactions
                .Where(t => t.TransactionType == TransactionType.Income)
                .Select(t => t.Amount)
                .ToList();
            var expenseData = transactions
                .Where(t => t.TransactionType == TransactionType.Expense)
                .Select(t => -t.Amount)
                .ToList();

            var chartData = new
            {
                labels,
                datasets = new[]
                {
            new
            {
                label = "Income",
                backgroundColor = "Green",
                data = incomeData,
            },
            new
            {
                label = "Expense",
                backgroundColor = "red",
                data = expenseData,
            },
        },
            };

            return View(chartData);
        }



        private bool TransactionExists(int id)
        {
            return _context.Transactions.Any(e => e.Id == id);
        }
    }
}
