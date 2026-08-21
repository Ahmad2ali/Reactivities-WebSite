using MediatR;
using Application.Core;
using Domain;
using Application.Profils.DTOs;
using Persistence;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace Application.Profils.Queries;

public class GetFollowing
{
    public class Query : IRequest<Result<List<UserProfile>>>
    {
        public string Predicate { get; set; } = "foolowers";
        public required string UserId { get; set; }
    }


    public class Handler(AppDbContext context, IMapper mapper, IUserAccessor userAccessor) : IRequestHandler<Query, Result<List<UserProfile>>>
    {
        public async Task<Result<List<UserProfile>>> Handle(Query request, CancellationToken cancellationToken)
        {
            var profiles = new List<UserProfile>();

            switch (request.Predicate)
            {
                case "followers":
                    profiles = await context.UserFollowings.Where(x => x.TargetId == request.UserId)
                    .Select(x => x.Observer)
                    .ProjectTo<UserProfile>(mapper.ConfigurationProvider, new {currentUserId = userAccessor.GetUserId()})
                    .ToListAsync(cancellationToken);
                    break;

                case "followings":
                    profiles = await context.UserFollowings.Where(x => x.ObserverId == request.UserId)
                    .Select(x => x.Target)
                    .ProjectTo<UserProfile>(mapper.ConfigurationProvider, new {currentUserId = userAccessor.GetUserId()})
                    .ToListAsync(cancellationToken);
                    break;
            }

            return Result<List<UserProfile>>.Success(profiles);
        }

    }
}
