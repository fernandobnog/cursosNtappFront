import { Endereco } from "./endereco";
import { PedidoEvento } from "./pedido_evento";
import { TipoPessoa } from "./tipo_pessoa";

export type Cliente = {
  id: number;
  tipoPessoa: TipoPessoa;
  documento: string;
  nome: string;
  telefone: string;
  celular: string;
  email: string;
  emailCc?: string;
  endereco: Endereco;
  retencaoImposto: boolean;
  inscricaoMunicipal: string;
  inscricaoEstadual: string;
  pedidoEventoLista: PedidoEvento[];
}
