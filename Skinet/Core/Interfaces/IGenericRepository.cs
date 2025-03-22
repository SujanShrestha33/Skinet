﻿using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public  interface IGenericRepository<T> where T:BaseEntity
    {
        Task<T?> GetById(int id);

        Task<IReadOnlyList<T>> ListAllAsync();

        Task<T?> GetEntitityWithSpec(ISpecification<T> spec);

        Task<IReadOnlyList<T>> ListAsync(ISpecification<T> spec);

        Task<TResult?> GetEntitityWithSpec<TResult>(ISpecification<T, TResult> spec);

        Task<IReadOnlyList<TResult?>> ListAsync<TResult>(ISpecification<T, TResult> spec);

        void Add(T entity);

        void Remove(T entity);

        void Update(T entity);

        Task<bool> SaveAllAsync();

        bool Exists(int id);

        Task<int> CountAsync(ISpecification<T> spec);
    }
}
