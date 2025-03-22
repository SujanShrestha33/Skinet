using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specification
{
    public class BrandListSpecification : Specification<Product, string>
    {
        public BrandListSpecification()
        {
            AddSelect(x => x.Brand);
            ApplyDistinct();
        }
    }
}
