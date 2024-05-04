import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// export const fetcher = (...args) => fetch(...args).then(res => res.json())

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}
