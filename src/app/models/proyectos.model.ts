export class Proyecto {
  id: number;
  created_at: Date;
  descripcion: string;
  descripcionCorta: string;
  fecha: Date;
  imagenesproyectos?: Imagen[];
  link?: string;
  published_at: Date;
  titulo: string;
  updated_at: Date;
  video?: string;
  categoriasproyectos: Categoria[];
}

interface Imagen {
  created_at: Date;
  id: number;
  updated_at: Date;
  url: string;
}
interface Categoria {
  created_at: Date;
  id: number;
  updated_at: Date;
  contenido: string;
}
