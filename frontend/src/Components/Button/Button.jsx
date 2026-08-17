import React from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.buttonContent}>{children}</span>
    </button>
  );
};

export default Button;