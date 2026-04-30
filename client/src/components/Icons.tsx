// Custom SVG Icons in Rose Gold and Party Red colors

export const FlowerIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" fill={color} />
    <circle cx="12" cy="4" r="2.5" fill={color} />
    <circle cx="18.66" cy="6.34" r="2.5" fill={color} />
    <circle cx="20" cy="12" r="2.5" fill={color} />
    <circle cx="18.66" cy="17.66" r="2.5" fill={color} />
    <circle cx="12" cy="20" r="2.5" fill={color} />
    <circle cx="5.34" cy="17.66" r="2.5" fill={color} />
    <circle cx="4" cy="12" r="2.5" fill={color} />
    <circle cx="5.34" cy="6.34" r="2.5" fill={color} />
  </svg>
);

export const ChampagneIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2h6v2H9V2z" fill={color} />
    <path d="M8 4h8v1H8V4z" fill={color} />
    <path d="M7 5h10c.55 0 1 .45 1 1v4c0 2-1 3-2 4v5h-8v-5c-1-1-2-2-2-4V6c0-.55.45-1 1-1z" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 18h4v2h-4v-2z" fill={color} />
  </svg>
);

export const RingIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" fill="none" stroke={color} strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill={color} />
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke={color} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const TableIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="20" height="12" rx="1" fill="none" stroke={color} strokeWidth="1.5" />
    <line x1="2" y1="8" x2="22" y2="8" stroke={color} strokeWidth="1" />
    <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1" />
    <line x1="8" y1="4" x2="8" y2="16" stroke={color} strokeWidth="1" />
    <line x1="14" y1="4" x2="14" y2="16" stroke={color} strokeWidth="1" />
    <path d="M4 18h16v2H4v-2z" fill={color} />
  </svg>
);

export const DecorIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3 7h7l-5.5 4 2 7-6.5-5-6.5 5 2-7L2 9h7l3-7z" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CakeIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="8" width="18" height="12" rx="1" fill="none" stroke={color} strokeWidth="1.5" />
    <line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="1" />
    <line x1="3" y1="16" x2="21" y2="16" stroke={color} strokeWidth="1" />
    <circle cx="6" cy="10" r="1" fill={color} />
    <circle cx="12" cy="10" r="1" fill={color} />
    <circle cx="18" cy="10" r="1" fill={color} />
    <path d="M8 2v3M12 2v3M16 2v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const BalloonIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="6" fill="none" stroke={color} strokeWidth="1.5" />
    <path d="M12 14v6M10 20h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 15c-1 1-2 2-2 3M14 15c1 1 2 2 2 3" stroke={color} strokeWidth="1" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const GlassIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2h10l-1 8c0 2-1.5 4-3 4s-3-2-3-4L7 2z" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="6" y1="10" x2="18" y2="10" stroke={color} strokeWidth="1.5" />
    <path d="M8 18h8v2H8v-2z" fill={color} />
  </svg>
);

export const CandleIcon = ({ color = "#E0BFB8", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="6" width="6" height="10" rx="1" fill="none" stroke={color} strokeWidth="1.5" />
    <path d="M11 4c0-1 1-2 1-2s1 1 1 2M10 2c-1 0-1 1-1 2M14 2c1 0 1 1 1 2" stroke={color} strokeWidth="1" strokeLinecap="round" />
    <rect x="8" y="16" width="8" height="2" fill={color} />
  </svg>
);

export const CheckIcon = ({ color = "#E63946", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ArrowIcon = ({ color = "#E63946", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M12 5l7 7-7 7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
