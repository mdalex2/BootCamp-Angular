using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Entidades;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infraestructura.Data.Config
{
    public class EmpleadoConfiguration : IEntityTypeConfiguration<Empleado>
    {
        public void Configure(EntityTypeBuilder<Empleado> builder)
        {
            builder.Property(c => c.Id).IsRequired();
            builder.Property(c => c.Apellidos).IsRequired().HasMaxLength(100);
            builder.Property(c => c.Nombres).IsRequired().HasMaxLength(100);
            builder.Property(c => c.Cargo).IsRequired().HasMaxLength(100);
            builder.Property(c => c.CompaniaId).IsRequired();

            //Todo Relaciones
            builder.HasOne(e => e.Compania).WithMany()
                    .HasForeignKey(e => e.CompaniaId);
        }
    }
}