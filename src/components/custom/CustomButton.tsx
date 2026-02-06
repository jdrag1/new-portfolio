import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Button style variants
const customButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-slate-900 text-white hover:bg-slate-900/90",
        secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
        danger: "bg-red-500 text-white hover:bg-red-500/90",
        ghost: "hover:bg-slate-100",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-8",
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

// New interface for label
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
        {loading ? "Loading..." : label || children}
      </Comp>
    )
  }
)

CustomButton.displayName = "CustomButton"

export { CustomButton }
