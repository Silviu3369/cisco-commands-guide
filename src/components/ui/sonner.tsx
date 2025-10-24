// src/components/ui/sonner.tsx
"use client"

import { Toaster as SonnerPrimitive, toast as sonnerToast } from "sonner" // Importăm direct și funcția toast
import { useTheme } from "next-themes"
import type { ExternalToast, ToastT } from "sonner"; // Importăm tipurile necesare

type ToasterProps = React.ComponentProps<typeof SonnerPrimitive>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <SonnerPrimitive
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{ // Stiluri standard shadcn pentru sonner
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          // Adaugă clase pentru error, success etc. dacă dorești
            error: "group toast group-[.toaster]:bg-destructive group-[.toaster]:text-destructive-foreground group-[.toaster]:border-destructive",
            success: "group toast group-[.toaster]:bg-green-600 group-[.toaster]:text-white group-[.toaster]:border-green-600", // Exemplu
            warning: "group toast group-[.toaster]:bg-yellow-500 group-[.toaster]:text-black group-[.toaster]:border-yellow-500", // Exemplu
            info: "group toast group-[.toaster]:bg-blue-600 group-[.toaster]:text-white group-[.toaster]:border-blue-600", // Exemplu
        },
      }}
      // Eliminăm stilul inline complex, folosim clasele de mai sus
      {...props}
    />
  )
}

// Re-exportăm funcția toast din sonner pentru a putea fi folosită ușor
const toast = (message: string | React.ReactNode, data?: ExternalToast & { type?: 'success' | 'info' | 'warning' | 'error' | 'action' | 'loading' | 'default' }): string | number => {
  // Putem adăuga logica de mapare a tipului la funcția specifică sonner dacă dorim
  switch (data?.type) {
      case 'success': return sonnerToast.success(message, data);
      case 'info': return sonnerToast.info(message, data);
      case 'warning': return sonnerToast.warning(message, data);
      case 'error': return sonnerToast.error(message, data);
      case 'action': return sonnerToast.action(message, data);
      case 'loading': return sonnerToast.loading(message, data);
      default: return sonnerToast(message, data);
  }
};


export { Toaster, toast }; // Exportăm Toaster și funcția toast re-exportată
