/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WEATHER_API_KEY: string
  // další env proměnné zde
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

