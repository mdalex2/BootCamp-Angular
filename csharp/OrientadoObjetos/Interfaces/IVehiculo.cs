using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.Interfaces
{
    public interface IVehiculo
    {
        void CambiarCarrera(int x);

        void Acelerar(int x);

        void AplicarFrenos(int x);

        void ImprimirEstados();
    }
}