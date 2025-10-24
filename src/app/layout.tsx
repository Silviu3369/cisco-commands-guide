import type { Metadata, Viewport } from "next"; // Import Viewport type
// Importă fonturile Google (sau locale dacă le ai configurate)
// Presupunem că folosim next/font așa cum era în original,
// Dar pentru static export, fonturile trebuie gestionate atent.
// O alternativă ar fi importul direct în globals.css dacă next/font dă erori la export.
import { Inter as FontSans } from "next/font/google"; // Folosim Inter ca exemplu, originalul folosea Geist
import { JetBrains_Mono as FontMono } from "next/font/google"; // Folosim JetBrains Mono ca exemplu

import "./globals.css"; // Importă CSS-ul global
import { cn } from "@/lib/utils"; // Importă utilitarul cn
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // Sonner Toaster
import { Toaster as DefaultToaster } from "@/components/ui/toaster"; // shadcn Toaster
import { ThemeProvider } from "@/components/theme-provider"; // Adăugăm ThemeProvider

// Configurăm fonturile
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans", // Variabila CSS pentru font sans-serif
});

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono", // Variabila CSS pentru font mono
});

// Metadata site-ului (informații pentru SEO și partajare)
export const metadata: Metadata = {
  title: "Cisco CCNA Command Guide",
  description: "Ghid complet și interactiv de comenzi Cisco pentru certificarea CCNA.",
  keywords: ["Cisco", "CCNA", "Networking", "Commands", "Router", "Switch", "OSPF", "EIGRP", "VLAN", "NAT", "Security", "ASA"],
  // Poți adăuga și alte metadate (authors, openGraph, twitter etc.)
  icons: {
      // Asigură-te că favicon.ico există în folderul 'public' sau 'src/app'
      icon: '/cisco-commands-guide/favicon.ico', // Ajustat cu basePath
  },
};

// Viewport configuration for responsive design
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // themeColor: '#ffffff', // Poți seta o culoare de temă
}

// Componenta RootLayout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" suppressHydrationWarning> {/* Setăm limba română */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased", // Clase Tailwind de bază
          fontSans.variable, // Adaugă variabila CSS pentru font sans
          fontMono.variable // Adaugă variabila CSS pentru font mono
        )}
      >
        {/* ThemeProvider înfășoară tot conținutul pentru gestionarea temei */}
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          {children} {/* Aici va fi randat conținutul paginii (page.tsx) */}
          <DefaultToaster /> {/* Adaugă toaster-ul shadcn */}
          <SonnerToaster /> {/* Adaugă toaster-ul Sonner */}
        </ThemeProvider>
      </body>
    </html>
  );
}
