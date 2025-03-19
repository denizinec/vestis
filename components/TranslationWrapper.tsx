'use client'
import { createContext, useContext } from 'react'

type TranslationContextType = {
  dict: Record<string, string>
}

export const TranslationContext = createContext<TranslationContextType | null>(null)

export function TranslationWrapper({ 
  children, 
  dict 
}: { 
  children: React.ReactNode
  dict: Record<string, string>
}) {
  return (
    <TranslationContext.Provider value={{ dict }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationWrapper')
  }
  return context
} 