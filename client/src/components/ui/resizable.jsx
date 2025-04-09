import * as React from "react"
import * as ResizablePrimitive from "react-resizable-panels"
import { ChevronLeft, ChevronRight, Grip } from "lucide-react"

import { cn } from "@/lib/utils"

const ResizablePanelGroup = React.forwardRef(({ className, ...props }, ref) => (
  <ResizablePrimitive.PanelGroup
    ref={ref}
    className={cn(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      className
    )}
    {...props}
  />
))
ResizablePanelGroup.displayName = "ResizablePanelGroup"

const ResizablePanel = React.forwardRef(({ className, ...props }, ref) => (
  <ResizablePrimitive.Panel
    ref={ref}
    className={cn("flex h-full w-full flex-col", className)}
    {...props}
  />
))
ResizablePanel.displayName = "ResizablePanel"

const ResizableHandle = React.forwardRef(({ withHandle, className, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    ref={ref}
    className={cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <Grip className="h-2.5 w-2.5" />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
))
ResizableHandle.displayName = "ResizableHandle"

const ResizableHandleHover = React.forwardRef(({ withHandle, className, ...props }, ref) => (
  <ResizablePrimitive.PanelResizeHandle
    ref={ref}
    className={cn(
      "group relative flex w-8 items-center justify-center bg-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-8 data-[panel-group-direction=vertical]:w-full [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    )}
    {...props}
  >
    {withHandle && (
      <div className="flex h-2 w-full flex-col items-center justify-center">
        <div className="z-10 flex h-8 w-[30px] flex-1 items-center justify-center rounded-md border-0 group-hover:border group-hover:bg-accent group-hover:opacity-100">
          <ChevronLeft className="h-3 w-3" />
          <ChevronRight className="h-3 w-3" />
        </div>
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
))
ResizableHandleHover.displayName = "ResizableHandleHover"

export {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
  ResizableHandleHover,
}