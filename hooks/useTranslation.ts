"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import React from "react"
import en from "../locales/en"
import pl from "../locales/pl"
import fr from "../locales/fr"

const translations: { [key: string]: { [key: string]: string } } = { en, pl, fr }

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  const t = (key: string) => {
    return translations[language]?.[key] || key
  }

  const value: LanguageContextType = {
    language,
    setLanguage: (lang: string) => {
      setLanguage(lang)
      localStorage.setItem("language", lang)
    },
    t,
  }

  return React.createElement(LanguageContext.Provider, { value }, children)
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a LanguageProvider")
  }
  return context
}
