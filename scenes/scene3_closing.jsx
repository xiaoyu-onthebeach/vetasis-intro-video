// Scene 3 — Closing transition + final logo lockup
// Timing: 0 → 5s
// - 0.0 – 0.7 : green panels close from top & bottom (covers scene 2)
// - 0.5 – 1.2 : logo mark fades + scales in at center
// - 1.0 – 1.6 : wordmark writes in
// - 1.4 – 2.0 : tagline fades in
// - 2.0 – 4.0 : idle hold with subtle float
// - 4.0 – 5.0 : logo + tagline fade out (leading into loop back to scene1)

function Scene3Closing({ primary, background, tagline }) {
  const { localTime } = useSprite();
  const t = localTime;

  // Closing panels
  const closeP = Easing.easeInOutCubic(clamp(t / 0.7, 0, 1));
  const topH = closeP * 50;
  const botH = closeP * 50;

  // Logo entry
  const markOp = animate({ from: 0, to: 1, start: 0.5, end: 1.1, ease: Easing.easeOutCubic })(t);
  const markScale = animate({ from: 0.7, to: 1, start: 0.5, end: 1.2, ease: Easing.easeOutBack })(t);
  const wordClip = animate({ from: 0, to: 100, start: 1.0, end: 1.6, ease: Easing.easeInOutCubic })(t);
  const wordOp = animate({ from: 0, to: 1, start: 1.0, end: 1.3, ease: Easing.easeOutCubic })(t);
  const taglineOp = animate({ from: 0, to: 1, start: 1.4, end: 2.0, ease: Easing.easeOutCubic })(t);
  const taglineY = animate({ from: 12, to: 0, start: 1.4, end: 2.0, ease: Easing.easeOutCubic })(t);

  // Outro fade
  const outroFade = animate({ from: 1, to: 0, start: 4.3, end: 5.0, ease: Easing.easeInCubic })(t);

  // Idle float
  const floatY = Math.sin(t * 1.0) * 5;

  // Blob drift
  const blobY1 = Math.sin(t * 0.5) * 10;
  const blobY2 = Math.cos(t * 0.4) * 12;

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      {/* Top closing panel */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: `${topH}%`,
        background: primary,
        zIndex: 30,
      }}/>
      {/* Bottom closing panel */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: `${botH}%`,
        background: primary,
        zIndex: 30,
      }}/>

      {/* Final background (underneath panels but above scene2 — same primary so seamless after close) */}
      {closeP >= 0.99 && (
        <div style={{ position: 'absolute', inset: 0, background: primary, zIndex: 29 }}>
          {/* Subtle blobs */}
          <svg viewBox="0 0 1920 1080" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
            <path d={`M -100 ${200 + blobY1} Q 200 150 450 280 Q 650 420 400 580 Q 150 660 -100 ${500 + blobY1} Z`}
              fill="#F4F1E8" opacity="0.18"/>
            <path d={`M 1500 ${-80 + blobY2} Q 1800 120 2000 280 Q 1950 480 1700 420 Q 1450 360 1500 ${-80 + blobY2} Z`}
              fill="#F4F1E8" opacity="0.15"/>
            <path d={`M 1400 ${850 + blobY1} Q 1650 780 1950 850 Q 2050 1050 1750 1100 Q 1450 1150 1400 ${850 + blobY1} Z`}
              fill="#F4F1E8" opacity="0.18"/>
          </svg>
        </div>
      )}

      {/* Final logo lockup */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 31,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 28,
        opacity: outroFade,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 28,
          transform: `translateY(${floatY}px)`,
        }}>
          <div style={{
            opacity: markOp,
            transform: `scale(${markScale})`,
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.2))',
          }}>
            <VetasisMark size={160}/>
          </div>
          <div style={{
            opacity: wordOp,
            clipPath: `inset(0 ${100 - wordClip}% 0 0)`,
          }}>
            <VetasisWordmark size={140} color="#FFFFFF"/>
          </div>
        </div>
        <div style={{
          opacity: taglineOp * 0.9,
          transform: `translateY(${taglineY}px)`,
          fontFamily: "'Plus Jakarta Sans','Hiragino Sans','Noto Sans JP', Inter, sans-serif",
          fontSize: 28,
          fontWeight: 500,
          color: '#FFFFFF',
          letterSpacing: '-0.005em',
          textAlign: 'center',
          lineHeight: 1.4,
          whiteSpace: 'pre-line',
        }}>
          {tagline}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Scene3Closing });
