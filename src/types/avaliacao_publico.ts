import { Cliente } from "./cliente";

export type AvaliacaoPublico = {
  id: number;
  cliente: Cliente;
  comentario: string;
  nota: number;
}
