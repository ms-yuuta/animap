declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NEXT_PUBLIC_GOOGLE_MAP_API_KEY: string;
    readonly NEXT_PUBLIC_API_URL: string
  }
}