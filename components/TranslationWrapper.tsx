'use client'
import { createContext, useContext } from 'react'

type TranslationContextType = {
  dict: Record<string, any>
}

export const TranslationContext = createContext<TranslationContextType | null>(null)

export function TranslationWrapper({ 
  children, 
  dict 
}: { 
  children: React.ReactNode
  dict: any
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