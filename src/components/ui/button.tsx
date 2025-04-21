import * as React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "sage" | "sunset"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-sunset hover:bg-sunset-dark text-black font-medium",
      outline: "border-2 border-sage hover:border-sage-dark bg-transparent hover:bg-sage/10 text-sage-dark",
      secondary: "bg-sage hover:bg-sage-dark text-black",
      ghost: "hover:bg-muted text-sage hover:text-sage-dark",
      link: "text-sunset underline-offset-4 hover:underline",
      sage: "bg-sage hover:bg-sage-dark text-black font-medium",
      sunset: "bg-sunset hover:bg-sunset-dark text-black font-medium",
    };
    const sizeClasses = {
      default: "h-10 px-5 py-2.5 text-sm",
      sm: "h-9 rounded-md px-4 text-sm",
      lg: "h-12 rounded-md px-8 text-base",
      icon: "h-10 w-10",
    }

    return (
      <button
        className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
