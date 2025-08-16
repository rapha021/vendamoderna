import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
const price = 9.90;

export default price.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const brandName = "Crianças de Deus";

