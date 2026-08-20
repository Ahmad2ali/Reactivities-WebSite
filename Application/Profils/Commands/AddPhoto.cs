using MediatR;
using Application.Core;
using Domain;
using Microsoft.AspNetCore.Http;
using System.Reflection.Metadata;
using Persistence;

namespace Application.Profils.Commands;

public class AddPhoto
{
    public class Command : IRequest<Result<Photo>>
    {
        public required IFormFile File { get; set; }
    }

    public class Handler(IUserAccessor userAccessor, AppDbContext context, IPhotoService photoService) 
    : IRequestHandler<Command, Result<Photo>>
    {
        public async Task<Result<Photo>> Handle(Command request, CancellationToken cancellationToken)
        {
            var uploadeResult = await photoService.UploadPhoto(request.File);

            if (uploadeResult == null) return Result<Photo>.Failure("Failer to upload photo", 400);

            var user = await userAccessor.GetUserAsync();

            var photo = new Photo
            {
                Url = uploadeResult.Url,
                PublicId = uploadeResult.PublicId,
                UserId = user.Id
            };

            user.ImageUrl ??= photo.Url;
            context.Photos.Add(photo);

            var result = await context.SaveChangesAsync(cancellationToken) > 0;

            return result
            ? Result<Photo>.Success(photo)
            : Result<Photo>.Failure("Failer saving photo to DB",400);
        }
    }

}
