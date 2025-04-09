// Bridge file for TypeScript compatibility
import { Textarea } from "./textarea.jsx"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export { Textarea }
