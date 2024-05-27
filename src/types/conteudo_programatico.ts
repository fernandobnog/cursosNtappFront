import { ModuloConteudoProgramatico } from "./modulo_conteudo_programatico";

export type ConteudoProgramatico = {
  id: number;
  modulosLista: ModuloConteudoProgramatico[];
  detalhes: string;
}
