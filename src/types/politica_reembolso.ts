import { ModalidadeEvento } from "./modelidade_evento";

export type PoliticaReembolso = {
  id: number;
  modalidadeEvento: ModalidadeEvento;
  regras: string;
}
