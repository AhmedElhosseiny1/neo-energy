interface NeoLogoProps {
  className?: string;
  color?: string;
}

export function NeoLogo({ className = "", color = "currentColor" }: NeoLogoProps) {
  return (
    <svg
      viewBox="0 0 220 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Neo Energy logo"
    >
      {/* neo wordmark */}
      <text
        x="0"
        y="62"
        fill={color}
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="72"
        fontWeight="700"
        letterSpacing="-2"
      >
        neo
      </text>

      {/* ENERGY */}
      <text
        x="132"
        y="75"
        fill={color}
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        fontSize="17"
        fontWeight="600"
        letterSpacing="3"
      >
        ENERGY
      </text>

      {/* Registered symbol */}
      <circle cx="204" cy="14" r="7" stroke={color} strokeWidth="1.5" fill="none" />
      <text
        x="204"
        y="17"
        fill={color}
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="8"
        fontWeight="600"
        textAnchor="middle"
      >
        R
      </text>
    </svg>
  );
}
