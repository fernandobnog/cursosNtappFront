import { Cliente } from "./cliente";
import { StatusPedido } from "./status_pedido";

export type PedidoEvento = {
  id: number;
  cliente: Cliente;
  landpage: Landpage;
  dataHoraPedido: Date;
  statusPedido: StatusPedido;
  quantidade: number;
  valorTotal: number;
}
