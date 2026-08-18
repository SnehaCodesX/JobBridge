import React, { useEffect } from "react";
import styles from "./Modal.module.css";

const Modal = ({
  isOpen,
  onClose,
  title = "Welcome to JobBridge",
  children,
}) => {
  // Prevent background scrolling
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close modal with Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Don't render when modal is closed
  if (!isOpen) {
    return null;
  }

  // Close when clicking outside modal
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={handleOverlayClick}
    >
      {/* Background Glow */}
      <div className={styles.backgroundGlow}></div>
      <div className={styles.backgroundGlowTwo}></div>

      {/* Modal Card */}
      <div className={styles.modal}>

        {/* Decorative Sparkles */}
        <span
          className={`${styles.sparkle} ${styles.sparkleOne}`}
        >
          ✦
        </span>

        <span
          className={`${styles.sparkle} ${styles.sparkleTwo}`}
        >
          ✦
        </span>

        <span
          className={`${styles.sparkle} ${styles.sparkleThree}`}
        >
          •
        </span>

        {/* Close Button */}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close modal"
        >
          <span className={styles.closeIcon}></span>
        </button>

        {/* Top Gradient Line */}
        <div className={styles.gradientLine}></div>

        {/* Header */}
        <div className={styles.header}>

          <div className={styles.iconBox}>
            <span>✦</span>
          </div>

          <h2>{title}</h2>

          <div className={styles.titleLine}></div>

        </div>

        {/* Modal Content */}
        <div className={styles.content}>
          {children}
        </div>

      </div>
    </div>
  );
};

export default Modal;