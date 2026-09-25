import * as React from "react"
import { Slot } from "radix-ui"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// shadcn/ui Badge — sticker style
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full border-[2.5px] border-ink px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider [&>svg]:size-3.5 [&>svg]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-sun text-ink",
        lime: "bg-lime text-ink",
        pink: "bg-bubble text-ink",
        sky: "bg-sky text-ink",
        ink: "bg-ink text-cream",
        paper: "bg-paper text-ink",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"
  return <Comp data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
