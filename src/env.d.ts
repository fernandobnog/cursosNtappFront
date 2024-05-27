interface ImportMetaEnv {
    BASE_URL: string | undefined;
    VITE_VUE_APP_SERVER_PORT: string;
    VITE_VUE_APP_IP_ADDRESS: string;
    VITE_VUE_APP_MODELOS_EXCEL: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}