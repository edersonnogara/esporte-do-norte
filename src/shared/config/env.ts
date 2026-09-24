// src/config/env.ts

function getEnv(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`A variável de ambiente ${name} não foi configurada.`)
  }

  return value
}

export const env = {
  supabaseUrl: getEnv("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
}