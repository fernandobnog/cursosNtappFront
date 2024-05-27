import { FormaPagamento } from "./forma_pagamento";

export type Custo = {
  id: number;
  valor: number;
  formaPagamento: FormaPagamento;
  descontoPercentual: number;
  parcelamento: number;
}
