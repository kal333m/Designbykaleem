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
