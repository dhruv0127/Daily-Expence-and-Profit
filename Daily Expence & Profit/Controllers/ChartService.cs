using Daily_Expence___Profit.Models;
using Microsoft.AspNetCore.Mvc;

namespace Daily_Expence___Profit.Controllers
{
    public class ChartService 
    {
       /* public static ChartData GetChartData()
        {
            var dt = GetData();

            ChartData chartData = new ChartData();
            chartData.labels = dt.AtEnumerable().Select(x => x["Month"].ToString()).Distinct.ToList();
        
            var users = dt.AtEnumerable().Select(x => x["Name"].ToString()).Distinct.ToList();
            int colorIndex = 1;

            foreach (var user in users)
            {
                Dataset ds = new Dataset();
                ds.label = user;
                ds.backgroundColor = GetColor(colorIndex);
                ds.data = dt.AsEnumerable().Where(x => x["Name"].ToString() == user).Select(x => x["Ticket"].toString()).ToList();
                chartData.datasets.Add(ds);
                colorIndex++;
            }
            return chartData;
        }*/
    }
}
