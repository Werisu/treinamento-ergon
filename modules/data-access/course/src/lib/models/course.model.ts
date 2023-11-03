export type Course = {
  createdAt: string;
  titulo: string;
  imagem: string;
  carga_horaria: number;
  nota: number;
  quant_avaliacoes: number;
  id: string;
};

// type CourseWithoutId = Omit<Course, 'id'>;
