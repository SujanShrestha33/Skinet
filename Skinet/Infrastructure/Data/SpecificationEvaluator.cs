using Core.Entities;
using Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data
{
    public class SpecificationEvaluator<T> where T : BaseEntity
    {
        public static IQueryable<T> GetQuery(IQueryable<T> query, ISpecification<T> specs)
        {
            if(specs.Criteria != null)
            {
                query = query.Where(specs.Criteria);
            }

            if(specs.OrderBy != null)
            {
                query = query.OrderBy(specs.OrderBy);
            }

            if(specs.OrderByDescending != null)
            {
                query = query.OrderByDescending(specs.OrderByDescending);
            }

            if (specs.IsDistinct)
            {
                query = query.Distinct();
            }

            if (specs.IsPagingEnabled)
            {
                query = query.Skip(specs.Skip).Take(specs.Take);
            }

            return query;
        }

    public static IQueryable<TResult> GetQuery<T, TResult>(IQueryable<T> query, ISpecification<T, TResult> specs)
    {
        if (specs.Criteria != null)
        {
            query = query.Where(specs.Criteria);
        }

        if (specs.OrderBy != null)
        {
            query = query.OrderBy(specs.OrderBy);
        }

        if (specs.OrderByDescending != null)
        {
            query = query.OrderByDescending(specs.OrderByDescending);
        }

        var selectQuery = query as IQueryable<TResult>;

        if(specs.Select != null)
        {
            selectQuery = query.Select(specs.Select);
        }

            if (specs.IsDistinct)
            {
                selectQuery = selectQuery?.Distinct();
            }

            if (specs.IsPagingEnabled)
            {
                selectQuery = selectQuery?.Skip(specs.Skip).Take(specs.Take);
            }

            return selectQuery ?? query.Cast<TResult>();
    }
    }

}

