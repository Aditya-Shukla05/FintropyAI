// Bridge file for TypeScript compatibility
import { Button, buttonVariants } from "./button.jsx"
import { type VariantProps } from "class-variance-authority"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export { Button, buttonVariants }
