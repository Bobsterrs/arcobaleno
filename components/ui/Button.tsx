import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-500",
      secondary: "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500",
      outline: "border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500",
      ghost: "text-emerald-600 hover:bg-emerald-50 focus:ring-emerald-500",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };
    
    const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    
    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
