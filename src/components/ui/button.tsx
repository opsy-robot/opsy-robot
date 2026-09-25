import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// shadcn/ui Button — restyled with chunky outlines + hard offset shadows
const buttonVariants = cva(
  "toon-press inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border-[3px] border-ink font-display tracking-wide transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-4 focus-visible:ring-sky/60 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-ink text-cream shadow-toon hover:bg-grape",
        sun: "bg-sun text-ink shadow-toon",
        pink: "bg-bubble text-ink shadow-toon",
        sky: "bg-sky text-ink shadow-toon",
        outline: "bg-paper text-ink shadow-toon",
        ghost: "border-transparent bg-transparent shadow-none hover:bg-ink/5",
      },
      size: {
        default: "h-12 px-6 text-lg",
        sm: "h-9 px-4 text-base",
        lg: "h-14 px-8 text-xl",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
