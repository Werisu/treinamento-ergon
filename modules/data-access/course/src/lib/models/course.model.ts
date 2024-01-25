export type Course = {
  createdAt: string;
  titulo: string;
  imagem: string;
  carga_horaria: number;
  nota: number;
  quant_avaliacoes: number;
  id: string;
  inscrito: boolean;
  quant_aulas: number;
  quant_assistidas: number;
  vagas: number;
};

// type CourseWithoutId = Omit<Course, 'id'>;
