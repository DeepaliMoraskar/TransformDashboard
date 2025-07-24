/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH: string;
  // add other env variables you use here, e.g.
  // readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
