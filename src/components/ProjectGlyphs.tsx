// Minimal abstract line-art glyphs used as a project thumbnail overlay,
// instead of a cropped product screenshot which doesn't survive shrinking.

export function KanbanGlyph() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.9">
        <rect x="38" y="46" width="26" height="70" rx="8" stroke="white" strokeWidth="2.5" />
        <rect x="45" y="58" width="12" height="4" rx="2" fill="white" />
        <rect x="45" y="68" width="12" height="4" rx="2" fill="white" />

        <rect x="87" y="30" width="26" height="86" rx="8" stroke="white" strokeWidth="2.5" />
        <rect x="94" y="42" width="12" height="4" rx="2" fill="white" />
        <rect x="94" y="52" width="12" height="4" rx="2" fill="white" />
        <rect x="94" y="62" width="12" height="4" rx="2" fill="white" />

        <rect x="136" y="58" width="26" height="58" rx="8" stroke="white" strokeWidth="2.5" />
        <rect x="143" y="70" width="12" height="4" rx="2" fill="white" />

        <circle cx="51" cy="34" r="4" fill="white" />
        <circle cx="100" cy="18" r="4" fill="white" />
        <circle cx="149" cy="46" r="4" fill="white" />
      </g>
    </svg>
  );
}

// Four-point sparkle, the generic mark most AI products use, sized as a
// big and small pair so it reads as a glyph rather than a single asterisk.
export function AtlasGlyph() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.95">
        <polygon
          points="135,65 104.9,55.1 95,25 85.1,55.1 55,65 85.1,74.9 95,105 104.9,74.9"
          fill="white"
        />
        <polygon
          points="164,100 152,96 148,84 144,96 132,100 144,104 148,116 152,104"
          fill="white"
          opacity="0.65"
        />
      </g>
    </svg>
  );
}

// A budget-utilization ring with a checkmark, standing in for
// procurement approvals and spend tracking.
export function ProcureGlyph() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.9">
        <circle
          cx="100"
          cy="70"
          r="32"
          stroke="white"
          strokeWidth="14"
          strokeOpacity="0.35"
        />
        <circle
          cx="100"
          cy="70"
          r="32"
          stroke="white"
          strokeWidth="14"
          strokeDasharray="150.8 50.3"
          strokeLinecap="round"
          transform="rotate(-90 100 70)"
        />
        <path
          d="M88,70 L96,78 L114,58"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

// A shield with a checkmark, standing in for AI-verified insurance coverage.
export function GuardianGlyph() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.9">
        <path
          d="M100,16 L152,37 L152,77 C152,112 128,133 100,146 C72,133 48,112 48,77 L48,37 Z"
          stroke="white"
          strokeWidth="3"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M76,79 L93,96 L126,60"
          stroke="white"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
}

// A zigzag waypoint path with a flag at the end, standing in for a
// gamified, milestone-driven journey.
export function JourneyGlyph() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <g opacity="0.9">
        <path
          d="M38,108 L84,48 L130,108 L168,48"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray="1 9"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="38" cy="108" r="7" stroke="white" strokeWidth="2.5" />
        <circle cx="84" cy="48" r="7" stroke="white" strokeWidth="2.5" />
        <circle cx="130" cy="108" r="7" stroke="white" strokeWidth="2.5" />
        <circle cx="168" cy="48" r="6" fill="white" />
        <path
          d="M168,48 L168,20 L184,26 L168,32"
          stroke="white"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="none"
        />
      </g>
    </svg>
  );
}
