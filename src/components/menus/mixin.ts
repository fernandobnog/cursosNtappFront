// Importe as dependências necessárias
import { MenuItem } from "primevue/menuitem";
import router from "../../router";

// Defina a função menuItems que utiliza a função de tradução t

export const menuItems = (): MenuItem[] => [
  {
    label: 'Home',
    command: () => {
      void router.push("/");
    }
  }
];

