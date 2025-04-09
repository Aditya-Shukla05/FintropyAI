import * as React from "react"
import { createContext, forwardRef, useContext, useEffect, useRef, useState } from "react"
import { OTPInput, SingleOTPInput } from "input-otp"

import { cn } from "@/lib/utils"

const OTPContext = createContext({})

function useOTP() {
  const context = useContext(OTPContext)

  if (!context) {
    throw new Error("useOTP must be used within an OTPProvider")
  }

  return context
}

const OTP = forwardRef(({ className, containerClassName, ...props }, ref) => {
  return (
    <OTPContext.Provider value={{ disabled: props.disabled }}>
      <OTPInput
        ref={ref}
        containerClassName={cn("flex items-center gap-2", containerClassName)}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
    </OTPContext.Provider>
  )
})
OTP.displayName = "OTP"

const OTPGroup = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
})
OTPGroup.displayName = "OTPGroup"

const OTPInput_ = forwardRef(({ className, ...props }, ref) => {
  const { disabled } = useOTP()
  const inputRef = useRef(null)

  return (
    <SingleOTPInput
      ref={ref}
      inputRef={inputRef}
      className={cn(
        "aspect-square h-10 w-10 rounded-md border border-input text-center text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
})
OTPInput_.displayName = "OTPInput"

const OTPSeparator = ({ className, ...props }) => (
  <div
    className={cn("flex items-center text-muted-foreground", className)}
    role="separator"
    aria-orientation="horizontal"
    {...props}
  />
)
OTPSeparator.displayName = "OTPSeparator"

export { OTP, OTPGroup, OTPInput_, OTPSeparator }