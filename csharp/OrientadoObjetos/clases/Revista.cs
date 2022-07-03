using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OrientadoObjetos.clases
{
    public class Revista : Publicacion
    {
        public double Precio { get; set; }
       public Revista(string titulo, string autor, int paginas, double precio) : base (titulo,autor,paginas)
       {
            this.Precio = Precio;
       }

        #region  metodos
        public override string ObtenerDescripcion()
        {
             return $"Revista {this.Titulo} escrito por {this.Autor} con {this.Paginas} páginas";
        }
        #endregion
    }
}