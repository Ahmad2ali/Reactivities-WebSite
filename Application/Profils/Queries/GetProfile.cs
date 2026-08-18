using MediatR;
using Application.Core;
using Domain;
using Application.Profils.DTOs;
using Persistence;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace Application.Profils.Queries;

public class GetProfile
{
    public class Query : IRequest<Result<UserProfile>>
    {
        public string UserId { get; set; }
    }


    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Query, Result<UserProfile>>
    {
        public async Task<Result<UserProfile>> Handle(Query request, CancellationToken cancellationToken)
        {
            var profile = await context.Users
            .ProjectTo<UserProfile>(mapper.ConfigurationProvider)
            .SingleOrDefaultAsync(x => x.Id == request.UserId, cancellationToken);

            return profile == null
              ? Result<UserProfile>.Failure("Profile not found", 404)
              : Result<UserProfile>.Success(profile);
        }
    }

}
