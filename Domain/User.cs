namespace Domain;
using Microsoft.AspNetCore.Identity;

public class User : IdentityUser

{
     public string? DisplayName { get; set; }
     public string? Bio { get; set; }

     public string? ImagUrl { get; set; }

     // navigation properties

     public ICollection<ActivityAttendee> Activities { get; set; } = [];
     public ICollection<Photo> Photos { get; set; } = [];
}
