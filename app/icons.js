/* Hand-built line icons in the ApexMedia editorial style — bold, geometric,
   single-weight strokes designed to sit inside the site's crimson/amber/
   charcoal/cream badge treatment rather than any third-party icon set. */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconBadge({ children, tone = 'crimson', size = 56, colors }) {
  const bg = tone === 'charcoal' ? colors.charcoal : colors.cream;
  const border = tone === 'charcoal' ? colors.amber : colors.crimson;
  const fg = tone === 'charcoal' ? colors.cream : colors.charcoal;
  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: size, height: size, background: bg, border: `2px solid ${border}`,
        color: fg, flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

/* ── Who We Help ── */

export function IconHealthcare(props) {
  return (
    <svg {...base} width="28" height="28" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9.5" />
      <polyline points="4.5,12 8,12 9.5,7 12.5,17 14.5,9 16,12 19.5,12" />
    </svg>
  );
}

export function IconInsurance(props) {
  return (
    <svg {...base} width="28" height="28" stroke="currentColor" {...props}>
      <path d="M12 2.5 L19.5 5.5 V11 C19.5 16 16 19.8 12 21.5 C8 19.8 4.5 16 4.5 11 V5.5 Z" />
      <polyline points="8.2,12 10.8,14.8 15.8,9" />
    </svg>
  );
}

export function IconEcommerce(props) {
  return (
    <svg {...base} width="28" height="28" stroke="currentColor" {...props}>
      <path d="M9 8 V6.5 a3 3 0 0 1 6 0 V8" />
      <path d="M6.2 8 H17.8 L17 21 H7 Z" />
      <line x1="8.5" y1="11.5" x2="15.5" y2="11.5" />
    </svg>
  );
}

/* ── Capabilities ── */

export function IconSEO(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.2" y1="15.2" x2="21" y2="21" />
      <polyline points="7.5,12 9,9 11,10.5 13.5,7" />
    </svg>
  );
}

export function IconSearchAds(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconSocialAds(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2.5" />
      <path d="M8 17 L6.3 21 L11.5 17" />
      <path d="M16.5 5.5 L17.3 7.6 L19.5 8.3 L17.3 9 L16.5 11.1 L15.7 9 L13.5 8.3 L15.7 7.6 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconDisplayAds(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <circle cx="8" cy="10" r="1.4" />
      <polyline points="4,17.5 9,12.5 13,16 17.5,10.5 21,15" />
    </svg>
  );
}

export function IconCRO(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <path d="M4 4 H20 L14 12.5 V19 L10 21 V12.5 Z" />
      <polyline points="16,4 20,4 20,8" />
    </svg>
  );
}

export function IconWebDesign(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <line x1="3" y1="8.5" x2="21" y2="8.5" />
      <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <circle cx="8" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      <line x1="7" y1="12" x2="17" y2="12" />
      <line x1="7" y1="15.5" x2="14" y2="15.5" />
    </svg>
  );
}

export function IconEmailSMS(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <polyline points="3.5,7 12,13.5 20.5,7" />
    </svg>
  );
}

export function IconAnalytics(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <line x1="4" y1="20" x2="20" y2="20" />
      <rect x="5.5" y="12" width="3" height="7" />
      <rect x="10.5" y="8.5" width="3" height="10.5" />
      <rect x="15.5" y="4.5" width="3" height="14.5" />
    </svg>
  );
}

export function IconAISearch(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <circle cx="10" cy="10" r="6" />
      <line x1="14.2" y1="14.2" x2="21" y2="21" />
      <path d="M17 2.5 L18 5 L20.5 6 L18 7 L17 9.5 L16 7 L13.5 6 L16 5 Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconLeadGen(props) {
  return (
    <svg {...base} width="26" height="26" stroke="currentColor" {...props}>
      <path d="M4 4 H20 L13.3 12.5 V14 H10.7 V12.5 Z" />
      <ellipse cx="12" cy="16.3" rx="4" ry="1.3" />
      <path d="M8 16.3 V19.5 a4 1.3 0 0 0 8 0 V16.3" />
    </svg>
  );
}
