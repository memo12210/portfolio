/**
 * Utility functions for the portfolio.
 * Exports 'cn', a helper for merging Tailwind and conditional class names.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
  return twMerge(clsx(...inputs));
};
