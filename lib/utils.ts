import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    currencyDisplay: "symbol",
  }).format(value)
}

export function convertDateToNumber (date: string){

  const dateObj = new Date(date);

const interval= setInterval(() => {
  const now = new Date()
  const diff = dateObj.getTime() - now.getTime()
  if (diff <= 0) {
    clearInterval(interval)
    return "Auction Ended"
  }
  const diffInSeconds = Math.floor(diff / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)

  if(diffInDays < 0) {
    return `${diffInHours}: ${diffInMinutes % 60}: ${diffInSeconds % 60}`
  }

  if(diffInDays === 0) {
    return `${diffInHours}: ${diffInMinutes % 60}: ${diffInSeconds % 60}`
  }

  if(diffInDays === 1 && diffInHours < 24) {
    return `${diffInHours} Hours`
  }

  if(diffInDays > 1) {
    return `${diffInDays} days`
  }

  }, 1000)
}