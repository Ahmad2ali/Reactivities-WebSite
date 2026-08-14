using static System.Runtime.InteropServices.JavaScript.JSType;
namespace Domain;

public class ActivityAttendee
{
    public string? UserId { get; set; }

    public User User { get; set; } = null!;

    public string? ActivityId { get; set; }

    public Activity Activity { get; set; } = null!;


    public bool IsHost { get; set; }

    public DateTime DateJoind { get; set; } = DateTime.UtcNow;
}
