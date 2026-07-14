// illustrations.jsx
// Original illustrations for the Vetasis concept video.
// Style: flat geometric, two-tone (green + warm cream), no faces/characters
// that imitate the Medico style — we use a simplified vet silhouette with
// a pet companion, phone mockups, sound waves, and note UI.

// ── Vet + cat illustration (original) ────────────────────────────────────
// Abstract flat figure: head (circle), shoulders, simple arm holding a cat.
// All organic shapes, veterinary-flavored, drawn in app's brand greens.
function VetWithPet({ floatY = 0, floatR = 0 }) {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%"
      style={{ transform: `translateY(${floatY}px) rotate(${floatR}deg)`, transition: 'transform 40ms linear' }}>
      {/* Background blob */}
      <path d="M 40 260 Q 80 180 200 170 Q 320 160 360 250 Q 380 340 280 370 Q 160 390 80 360 Q 20 330 40 260 Z"
        fill="#2CBF93" opacity="0.18"/>
      {/* Body / scrubs */}
      <path d="M 110 400 L 110 290 Q 110 220 200 210 Q 290 220 290 290 L 290 400 Z" fill="#2CBF93"/>
      {/* Collar V */}
      <path d="M 170 220 L 200 260 L 230 220 Z" fill="#F4F1E8"/>
      {/* Neck */}
      <rect x="186" y="180" width="28" height="40" fill="#E8B77A"/>
      {/* Head */}
      <circle cx="200" cy="150" r="52" fill="#E8B77A"/>
      {/* Hair cap */}
      <path d="M 148 150 Q 148 95 200 95 Q 252 95 252 150 Q 252 130 240 120 Q 220 110 200 112 Q 170 114 148 150 Z" fill="#1D4E89"/>
      {/* Glasses / eyes */}
      <circle cx="184" cy="150" r="4" fill="#1D4E89"/>
      <circle cx="216" cy="150" r="4" fill="#1D4E89"/>
      {/* Smile */}
      <path d="M 188 168 Q 200 176 212 168" stroke="#1D4E89" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Arm holding pet */}
      <path d="M 290 290 Q 340 280 345 230 Q 345 205 320 200 L 305 210 Q 310 250 290 270 Z" fill="#2CBF93"/>
      {/* Cat in arms */}
      <ellipse cx="335" cy="215" rx="34" ry="26" fill="#F4F1E8"/>
      {/* Cat ears */}
      <path d="M 315 198 L 310 182 L 325 192 Z" fill="#F4F1E8"/>
      <path d="M 355 198 L 360 182 L 345 192 Z" fill="#F4F1E8"/>
      {/* Cat eyes */}
      <circle cx="325" cy="212" r="2.5" fill="#1D4E89"/>
      <circle cx="345" cy="212" r="2.5" fill="#1D4E89"/>
      {/* Cat nose */}
      <path d="M 333 220 L 337 220 L 335 223 Z" fill="#1D4E89"/>
      {/* Cat whiskers */}
      <line x1="320" y1="220" x2="308" y2="218" stroke="#1D4E89" strokeWidth="1"/>
      <line x1="320" y1="223" x2="308" y2="224" stroke="#1D4E89" strokeWidth="1"/>
      <line x1="350" y1="220" x2="362" y2="218" stroke="#1D4E89" strokeWidth="1"/>
      <line x1="350" y1="223" x2="362" y2="224" stroke="#1D4E89" strokeWidth="1"/>
    </svg>
  );
}

// ── Dog looking up ─────────────────────────────────────────────────────
function DogIllo({ floatY = 0 }) {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%"
      style={{ transform: `translateY(${floatY}px)` }}>
      <path d="M 40 300 Q 80 220 200 210 Q 320 200 360 290 Q 380 360 280 380 Q 160 395 80 370 Q 20 340 40 300 Z"
        fill="#2CBF93" opacity="0.22"/>
      {/* Body */}
      <ellipse cx="200" cy="310" rx="130" ry="70" fill="#E8B77A"/>
      {/* Front legs */}
      <rect x="160" y="340" width="22" height="55" rx="8" fill="#E8B77A"/>
      <rect x="218" y="340" width="22" height="55" rx="8" fill="#E8B77A"/>
      {/* Head */}
      <circle cx="200" cy="210" r="70" fill="#E8B77A"/>
      {/* Ears floppy */}
      <ellipse cx="140" cy="200" rx="22" ry="45" fill="#C8965C"/>
      <ellipse cx="260" cy="200" rx="22" ry="45" fill="#C8965C"/>
      {/* Snout */}
      <ellipse cx="200" cy="240" rx="38" ry="26" fill="#F4D9B8"/>
      {/* Nose */}
      <ellipse cx="200" cy="222" rx="10" ry="7" fill="#1D4E89"/>
      {/* Eyes */}
      <circle cx="178" cy="198" r="5" fill="#1D4E89"/>
      <circle cx="222" cy="198" r="5" fill="#1D4E89"/>
      {/* Mouth */}
      <path d="M 195 250 Q 200 258 205 250" stroke="#1D4E89" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* Collar */}
      <rect x="150" y="278" width="100" height="14" fill="#2CBF93"/>
      <circle cx="200" cy="293" r="6" fill="#F4F1E8"/>
    </svg>
  );
}

// ── Phone mockup: recording screen ────────────────────────────────────
function RecordingPhone({ waveProgress = 0, pulse = 0 }) {
  // Generate 22 bars with heights varying with waveProgress
  const bars = Array.from({ length: 22 }, (_, i) => {
    const phase = i * 0.45 + waveProgress * Math.PI * 2;
    const h = 16 + Math.abs(Math.sin(phase)) * 50 + (i % 3) * 6;
    return { i, h };
  });
  return (
    <svg viewBox="0 0 220 440" width="100%" height="100%">
      {/* Phone body */}
      <rect x="10" y="10" width="200" height="420" rx="32" fill="#1a1a1a"/>
      <rect x="16" y="16" width="188" height="408" rx="28" fill="#F4F1E8"/>
      {/* Notch */}
      <rect x="85" y="22" width="50" height="10" rx="5" fill="#1a1a1a"/>
      {/* Status */}
      <text x="30" y="50" fontFamily="Inter, sans-serif" fontSize="10" fill="#666">9:41</text>
      {/* Title */}
      <text x="30" y="85" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="15" fill="#1a1a1a">Recording visit</text>
      <text x="30" y="103" fontFamily="Inter, sans-serif" fontSize="10" fill="#888">Bailey · Golden Retriever</text>
      {/* Waveform center */}
      <g transform="translate(110, 230)">
        {bars.map(({ i, h }) => (
          <rect key={i}
            x={(i - 11) * 7 - 2}
            y={-h/2}
            width="3.5"
            height={h}
            rx="1.75"
            fill="#2CBF93"/>
        ))}
      </g>
      {/* Timer */}
      <text x="110" y="310" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="22" fontWeight="600" fill="#1a1a1a">02:14</text>
      {/* Record button */}
      <circle cx="110" cy="370" r="26" fill="none" stroke="#2CBF93" strokeWidth="3" opacity={0.3 + pulse * 0.7}/>
      <circle cx="110" cy="370" r="18" fill="#E85D5D"/>
      <rect x="103" y="363" width="14" height="14" rx="2" fill="#F4F1E8"/>
    </svg>
  );
}

// ── Phone mockup: generated note ──────────────────────────────────────
function NotePhone({ typedChars = 999 }) {
  // Note text "typed" out
  const lines = [
    "Subjective",
    "Bailey presents with mild",
    "lethargy over 3 days. Owner",
    "reports decreased appetite.",
    "",
    "Objective",
    "T: 38.6°C  HR: 92  RR: 24",
    "Exam: alert, hydrated, no",
    "abdominal tenderness.",
  ];
  const fullText = lines.join("\n");
  const shown = fullText.slice(0, typedChars);
  const shownLines = shown.split("\n");

  return (
    <svg viewBox="0 0 220 440" width="100%" height="100%">
      <rect x="10" y="10" width="200" height="420" rx="32" fill="#1a1a1a"/>
      <rect x="16" y="16" width="188" height="408" rx="28" fill="#F4F1E8"/>
      <rect x="85" y="22" width="50" height="10" rx="5" fill="#1a1a1a"/>
      {/* Header */}
      <text x="30" y="55" fontFamily="Inter, sans-serif" fontSize="9" fill="#2CBF93" fontWeight="700" letterSpacing="1">AI SOAP NOTE</text>
      <text x="30" y="76" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="14" fill="#1a1a1a">Bailey · Wellness</text>
      {/* Sparkle */}
      <path d="M 195 50 L 198 57 L 205 60 L 198 63 L 195 70 L 192 63 L 185 60 L 192 57 Z" fill="#2CBF93"/>
      {/* Divider */}
      <line x1="30" y1="92" x2="190" y2="92" stroke="#e5e2d8"/>
      {/* Body lines */}
      {shownLines.map((line, idx) => {
        const isHeader = line === "Subjective" || line === "Objective";
        return (
          <text key={idx}
            x="30"
            y={115 + idx * 18}
            fontFamily={isHeader ? "Inter, sans-serif" : "Inter, sans-serif"}
            fontWeight={isHeader ? "700" : "400"}
            fontSize={isHeader ? "11" : "10"}
            fill={isHeader ? "#2CBF93" : "#333"}>
            {line}
          </text>
        );
      })}
      {/* Button */}
      <rect x="30" y="370" width="160" height="38" rx="19" fill="#2CBF93"/>
      <text x="110" y="394" textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="12" fill="#F4F1E8">Save to record</text>
    </svg>
  );
}

// ── Stethoscope abstract icon card content ───────────────────────────
function StethoscopeIllo({ floatR = 0 }) {
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <circle cx="200" cy="200" r="160" fill="#2CBF93" opacity="0.14"/>
      <g transform={`translate(200 200) rotate(${floatR})`}>
        <path d="M -80 -80 Q -80 40 0 60 Q 80 40 80 -80" stroke="#1D4E89" strokeWidth="10" fill="none" strokeLinecap="round"/>
        <circle cx="-80" cy="-82" r="10" fill="#1D4E89"/>
        <circle cx="80" cy="-82" r="10" fill="#1D4E89"/>
        <line x1="0" y1="60" x2="0" y2="100" stroke="#1D4E89" strokeWidth="10" strokeLinecap="round"/>
        <circle cx="0" cy="115" r="22" fill="#2CBF93"/>
        <circle cx="0" cy="115" r="14" fill="#5EEB5F"/>
      </g>
    </svg>
  );
}

// ── Animated sound wave ─────────────────────────────────────────────
function SoundWaveIllo({ t }) {
  const bars = Array.from({ length: 15 }, (_, i) => {
    const phase = i * 0.6 + t * 5;
    const h = 40 + Math.abs(Math.sin(phase)) * 120;
    return { i, h };
  });
  return (
    <svg viewBox="0 0 400 400" width="100%" height="100%">
      <rect x="40" y="40" width="320" height="320" rx="24" fill="#2CBF93" opacity="0.15"/>
      <g transform="translate(200 200)">
        {bars.map(({ i, h }) => (
          <rect key={i}
            x={(i - 7) * 18 - 5}
            y={-h/2}
            width="10"
            height={h}
            rx="5"
            fill={i % 2 ? "#2CBF93" : "#47D777"}/>
        ))}
      </g>
      {/* Mic icon */}
      <g transform="translate(200 310)">
        <rect x="-14" y="-20" width="28" height="36" rx="14" fill="#1D4E89"/>
        <path d="M -20 10 Q -20 26 0 26 Q 20 26 20 10" stroke="#1D4E89" strokeWidth="3" fill="none"/>
        <line x1="0" y1="26" x2="0" y2="38" stroke="#1D4E89" strokeWidth="3"/>
      </g>
    </svg>
  );
}

// ── Vetasis logo mark (reusable) ─────────────────────────────────────
function VetasisMark({ size = 80, color }) {
  // Pulled from the user's provided SVG path
  const uid = React.useId ? React.useId() : Math.random().toString(36).slice(2);
  const clipId = `vmClip-${uid}`;
  const gradId = `vmGrad-${uid}`;
  return (
    <svg width={size} height={size} viewBox="0 0 43 43" fill="none">
      <defs>
        <linearGradient id={gradId} x1="43" y1="12" x2="0" y2="29" gradientUnits="userSpaceOnUse">
          <stop offset="0.375" stopColor="#5EEB5F"/>
          <stop offset="0.515" stopColor="#47D777"/>
          <stop offset="0.71" stopColor="#2CBF93"/>
        </linearGradient>
        <clipPath id={clipId}>
          <rect width="41.4" height="41.4" y="0.8" rx="6.17"/>
        </clipPath>
      </defs>
      <rect width="41.4" height="41.4" y="0.8" rx="6.17" fill="#FFFFFF"/>
      <g clipPath={`url(#${clipId})`}>
        <path d="M21.3 6.36C20.1 5.51 19.15 4.86 17.32 3.54C17.32 4.06 17.34 7.82 17.34 8.32L17.24 29.88L9.74 22.1C9.19 21.48 8.39 21.51 7.43 21.51L-0.59 21.51L-0.59 25.27L6.96 25.27L17.45 36.0C18.01 36.62 19.26 37.82 20.02 38.71L21.52 40.21C21.52 38.52 21.55 35.35 21.52 34.49L21.67 11.6L30.16 17.44C30.75 17.81 30.02 17.35 31.04 17.98L43 17.98L43 14.3L32.43 14.34L21.32 6.36Z"
          fill={color || `url(#${gradId})`}/>
      </g>
    </svg>
  );
}

// ── Vetasis wordmark ─────────────────────────────────────────────────
function VetasisWordmark({ size = 40, color = '#F4F1E8' }) {
  return (
    <div style={{
      fontFamily: 'Plus Jakarta Sans, Inter, sans-serif',
      fontWeight: 800,
      fontSize: size,
      letterSpacing: '-0.03em',
      color,
      lineHeight: 1,
    }}>
      VetAsis
    </div>
  );
}

Object.assign(window, {
  VetWithPet, DogIllo, RecordingPhone, NotePhone,
  StethoscopeIllo, SoundWaveIllo, VetasisMark, VetasisWordmark,
});
