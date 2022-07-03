using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.clases
{
    public class Libro : Publicacion
    {

        public Libro(string titulo, string autor, int paginas) : base (titulo,autor,paginas)
        {
        }
        public override string ObtenerDescripcion()
        {
            return $"Libro {this.Titulo} escrito por {this.Autor} con {this.Paginas} páginas";
        }
    }
}