const Icon = ({ name, size = 24 }) => {

  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {

    case "crown":
      return (
        <svg {...commonProps}>
          <path d="m2 4 3 12h14l3-12-6 5-3-7-3 7-6-5Z" />
          <path d="M5 20h14" />
        </svg>
      );

    case "monitor":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="13" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M8 8h4" />
          <path d="M8 12h7" />
        </svg>
      );

    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "trend":
      return (
        <svg {...commonProps}>
          <path d="M3 17 9 11l4 4 8-9" />
          <path d="M15 6h6v6" />
        </svg>
      );

    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
          <path d="M10 12v2h4v-2" />
        </svg>
      );

    case "building":
      return (
        <svg {...commonProps}>
          <path d="M4 21V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v17" />
          <path d="M2 21h20" />
          <path d="M8 6h2" />
          <path d="M8 10h2" />
          <path d="M8 14h2" />
          <path d="M13 6h2" />
          <path d="M13 10h2" />
          <path d="M13 14h2" />
        </svg>
      );

    case "users":
      return (
        <svg {...commonProps}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );

    case "mail":
      return (
        <svg {...commonProps}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "lock":
      return (
        <svg {...commonProps}>
          <rect x="4" y="10" width="16" height="11" rx="2" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
      );

    case "eye":
      return (
        <svg {...commonProps}>
          <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );

    case "eyeOff":
      return (
        <svg {...commonProps}>
          <path d="m3 3 18 18" />
          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
          <path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c6.5 0 10 8 10 8a17 17 0 0 1-3.2 4.2" />
          <path d="M6.6 6.6C3.7 8.5 2 12 2 12s3.5 8 10 8c1.8 0 3.4-.5 4.8-1.2" />
        </svg>
      );

    case "arrowRight":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );

    case "check":
      return (
        <svg {...commonProps}>
          <path d="m5 12 4 4L19 6" />
        </svg>
      );

    default:
      return null;
  }
};

export default Icon;