// Scene 1 — Opening logo on solid green, with soft floating blobs
// Timing: 0 → 5s
//  0.0 – 0.4 : background blobs drift in
//  0.4 – 1.3 : logo mark scales/fades in
//  1.0 – 1.7 : wordmark writes in
//  2.5 – 4.5 : subtle floating idle
//  4.5 – 5.0 : exit (handled by scene2's overlap / transition panels)

function Scene1Opening({ primary, background, accent, tagline }) {
  const { localTime, duration } = useSprite();

  // Idle float offsets
  const floatY = Math.sin(localTime * 1.1) * 6;
  const floatYBlob1 = Math.sin(localTime * 0.5) * 14;
  const floatYBlob2 = Math.sin(localTime * 0.4 + 2) * 10;
  const floatXBlob3 = Math.cos(localTime * 0.45) * 12;

  // Entry tweens
  const blobOpacity = animate({ from: 0, to: 0.28, start: 0, end: 0.6, ease: Easing.easeOutCubic })(localTime);
  const markScale = animate({ from: 0.6, to: 1, start: 0.4, end: 1.2, ease: Easing.easeOutBack })(localTime);
  const markOpacity = animate({ from: 0, to: 1, start: 0.4, end: 0.9, ease: Easing.easeOutCubic })(localTime);
  const wordmarkClip = animate({ from: 0, to: 100, start: 1.0, end: 1.7, ease: Easing.easeInOutCubic })(localTime);
  const wordmarkOpacity = animate({ from: 0, to: 1, start: 1.0, end: 1.3, ease: Easing.easeOutCubic })(localTime);
  const taglineOpacity = animate({ from: 0, to: 1, start: 1.6, end: 2.2, ease: Easing.easeOutCubic })(localTime);
  const taglineY = animate({ from: 12, to: 0, start: 1.6, end: 2.2, ease: Easing.easeOutCubic })(localTime);

  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #C6D0F7 0%, #BFE5DF 55%, #BCF0D1 100%)',
      overflow: 'hidden',
    }}>
      {/* Big organic blobs */}
      <svg viewBox="0 0 1920 1080" width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: blobOpacity * 0.55 }}>
        <path d={`M ${-100 + floatXBlob3} ${200 + floatYBlob1} Q 300 100 500 250 Q 700 400 500 600 Q 300 800 100 700 Q -100 600 ${-100 + floatXBlob3} ${200 + floatYBlob1} Z`}
          fill={primary} opacity="0.55"/>
        <path d={`M 1500 ${-80 + floatYBlob2} Q 1800 120 2000 280 Q 1950 480 1700 420 Q 1450 360 1500 ${-80 + floatYBlob2} Z`}
          fill={primary} opacity="0.45"/>
        <path d={`M 1350 ${850 + floatYBlob1} Q 1600 750 1900 820 Q 2050 1000 1750 1100 Q 1450 1150 1350 ${850 + floatYBlob1} Z`}
          fill={primary} opacity="0.5"/>
        <path d={`M ${-50 + floatXBlob3} ${950 + floatYBlob2} Q 250 880 450 980 Q 500 1150 200 1150 Q -50 1150 ${-50 + floatXBlob3} ${950 + floatYBlob2} Z`}
          fill={primary} opacity="0.4"/>
      </svg>

      {/* Center logo lockup */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 24,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 28,
          transform: `translateY(${floatY}px)`,
        }}>
          <div style={{
            opacity: markOpacity,
            transform: `scale(${markScale})`,
            filter: 'drop-shadow(0 8px 24px rgba(44,191,147,0.22))',
          }}>
            <VetasisMark size={140}/>
          </div>
          <div style={{
            opacity: wordmarkOpacity,
            clipPath: `inset(0 ${100 - wordmarkClip}% 0 0)`,
          }}>
            <VetasisWordmark size={120} color="#1D4E89"/>
          </div>
        </div>
        <div style={{
          opacity: taglineOpacity * 0.9,
          transform: `translateY(${taglineY}px)`,
          fontFamily: "'Plus Jakarta Sans','Hiragino Sans','Noto Sans JP', Inter, sans-serif",
          fontSize: 28,
          fontWeight: 500,
          color: '#1D4E89',
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

Object.assign(window, { Scene1Opening });
