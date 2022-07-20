using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using OrientadoObjetos.Interfaces;

namespace OrientadoObjetos.clases
{
    public class Bicicleta : IVehiculo
    {
        public int  Velocidad { get; set; }
        public int Carrera { get; set; }

        public void Acelerar(int x)
        {
            Velocidad = Velocidad + x;
        }

        public void AplicarFrenos(int x)
        {
            Velocidad = Velocidad - x;
        }

        public void CambiarCarrera(int x)
        {
            Carrera = x;
        }

        public void ImprimirEstados()
        {
            Console.WriteLine($"** Bicicleta Velocidad: {Velocidad} Carrera: {Carrera}");
        }
    }
}