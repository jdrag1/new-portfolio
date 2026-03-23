import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Button style variants - Linear.app inspired
const customButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-main focus-visible:ring-offset-2 focus-visible:ring-offset-bg-main disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-accent-main text-white hover:bg-accent-dark hover:shadow-glow",
        secondary: "bg-bg-card text-text-main border border-border-main hover:bg-bg-hover hover:border-accent-main/50",
        outline: "border border-border-main text-text-main hover:bg-bg-hover hover:border-accent-main/50",
        ghost: "text-text-muted hover:bg-bg-hover hover:text-text-main",
        danger: "bg-red-500 text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
        gradient: "bg-gradient-purple text-white hover:opacity-90 hover:shadow-glow-lg",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
        xl: "h-14 px-8 text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

// Interface for button props
export interface ICustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  label?: string       
  asChild?: boolean
  loading?: boolean
  fullWidth?: boolean
}

// Main CustomButton component
const CustomButton = React.forwardRef<HTMLButtonElement, ICustomButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      loading,
      label,
      children,
      asChild = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        ref={ref}
        disabled={disabled || loading}
        className={cn(customButtonVariants({ variant, size, fullWidth }), className)}
        {...props}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg 
              className="animate-spin h-4 w-4" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              />
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </span>
        ) : (
          label || children
        )}
      </Comp>
    )
  }
)

CustomButton.displayName = "CustomButton"

export { CustomButton }