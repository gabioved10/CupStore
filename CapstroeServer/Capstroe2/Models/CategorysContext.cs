﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Capstroe2.Models;

namespace Capstroe2.Models
{
    public class CategorysContext : DbContext
    {
        public CategorysContext(DbContextOptions<CategorysContext> options) : base(options)



    }
}