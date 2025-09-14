import React from "react"

export interface FormProps extends React.HTMLAttributes<HTMLDivElement> {
    
}

export const Form: React.FC<FormProps> = ({ children, ...props }) => {
    return (
      <p {...props}>{children}</p>
    )
  }
  