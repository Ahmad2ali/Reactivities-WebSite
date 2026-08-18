using Microsoft.AspNetCore.Http;

public interface IPhotoService
{
    Task<PhotoUploadResult?> UploadPhoto(IFormFile file);

    Task<string> DeleatePhoto(string publicId);
}