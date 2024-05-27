import { AvaliacaoPublico } from "./avaliacao_publico";
import { ConteudoProgramatico } from "./conteudo_programatico";
import { Custo } from "./custo";
import { DiaHoraEvento } from "./dia_hora_evento";
import { FormatoEvento } from "./formato_evento";
import { GrupoLandpage } from "./grupo_landpage";
import { Instrutor } from "./instrutor";
import { ModalidadeEvento } from "./modelidade_evento";
import { PoliticaReembolso } from "./politica_reembolso";

export type Landpage = {
  id: number;
  grupoLandpage: GrupoLandpage;
  titulo: string;
  subtitulo: string;
  descricao: string;
  objetivo: string;
  conteudoProgramatico: ConteudoProgramatico;
  intrutoresLista: Instrutor[];
  cargaHoraria: number;
  diaHoraEventoLista: DiaHoraEvento[];
  localEvento: string;
  formatoEvento: FormatoEvento;
  modalidadeEvento: ModalidadeEvento;
  certificacao: string;
  preRequisitosLista: string[];
  custo: Custo;
  politicaReembolso: PoliticaReembolso;
  beneficiosLista: string[];
  avaliacaoPublicoLista: AvaliacaoPublico[];
}
