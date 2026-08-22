using static System.Runtime.InteropServices.JavaScript.JSType;
public class ActivityParams : PaginationParams<DateTime?>
{
    public string? Filter { get; set; }

    public DateTime StartDate { get; set; } = DateTime.UtcNow;

}