using OrientadoObjetos.clases;

Libro libro1 = new Libro("Libro 1", "Autor 1", 30);
Libro libro2 = new Libro("Libro 2", "Autor 2", 360);

Revista revista = new Revista("Revista 1:", "Autor revista 1", 10,2500.23);
Console.WriteLine(libro1.ObtenerDescripcion());
Console.WriteLine(libro2.ObtenerDescripcion());
Console.WriteLine(revista.ObtenerDescripcion());
