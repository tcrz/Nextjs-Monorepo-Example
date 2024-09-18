import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  loading?: boolean;
}

const buttonStyles = {
  secondary: "btn-outline-primary",
  danger: "btn-danger",
  primary: "btn-primary"
};
export const Button: React.FC<Props> = ({
  variant = "primary",
  className,
  loading = false,
  ...props
}) => {
  const baseStyle = buttonStyles[variant] || buttonStyles.primary;

  return (
    <button {...props} disabled={loading || props.disabled} className={`btn ${baseStyle} ${className}`}>
      {props.children}
    </button>
  );
};

