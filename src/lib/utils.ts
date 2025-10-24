import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Funcție utilitară pentru a combina clase Tailwind CSS în mod condiționat
// și a rezolva conflictele de stil (ex: px-2 px-4 devine px-4)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
