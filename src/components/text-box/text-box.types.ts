type Variant = "primary" | "error";

export interface TextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | undefined;
  value: string | number;
  name: string;
  errorMessage: string | undefined;
  variant?: Variant;
  helper?: string;
}
