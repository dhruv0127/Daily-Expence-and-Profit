namespace Daily_Expence___Profit.Models
{
    public class ChartData
    {
        public ChartData() { 
        
            labels = new List<string>();
            datasets = new List<Dataset>(); 

        }
        public List<string> labels { get; set; }
        public List<Dataset> datasets { get; set; }
       
    }

    public class Dataset
    {
        public Dataset()
        {
            data = new List<decimal>(); // Change the data type to List<decimal>
        }

        public string label { get; set; }
        public string backgroundColor { get; set; }
        public List<decimal> data { get; set; } // Change the data type to List<decimal>
    }


}
