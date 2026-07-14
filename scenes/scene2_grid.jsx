// Scene 2 — Feature grid. New layout per reference:
// Top row split: [01 wide-left] [02 narrow] [03 short-middle / 04 tall-right]
// Bottom row: [CTA wide] [trial narrow]
// Graphics come from assets/containerN.svg. Only the graphic image floats idly;
// containers, labels and titles are still.

// Resolve asset URLs — prefers the bundler's inlined blob URL when available,
// otherwise falls back to the on-disk path (for dev).
function _asset(id, fallback) {
  return (typeof window !== 'undefined' && window.__resources && window.__resources[id]) || fallback;
}

function Scene2Grid({ primary, background, accent, textCopy, illoVariant }) {
  const { localTime } = useSprite();
  const t = localTime;

  // Panel split-open (incoming)
  const openP = Easing.easeInOutCubic(clamp(t / 0.7, 0, 1));
  const panelOffset = openP * 700;

  // Card entry stagger
  const cardEntry = (delay) => {
    const local = clamp((t - 0.4 - delay) / 0.6, 0, 1);
    return {
      opacity: local,
      scale: 0.92 + 0.08 * Easing.easeOutBack(local),
    };
  };

  // Idle float amounts (applied only to inner graphic)
  const f1 = Math.sin(t * 0.9) * 5;
  const f2 = Math.sin(t * 0.7 + 1.2) * 6;
  const f3 = Math.sin(t * 1.1 + 0.6) * 4;
  const f4 = Math.sin(t * 0.8 + 2.0) * 6;
  const f5 = Math.sin(t * 0.6 + 0.3) * 5;

  // Tagline rotator (bottom CTA)
  const taglines = textCopy.ctaLines;
  const cycleT = Math.max(0, t - 1.2);
  const cycleIdx = Math.floor(cycleT / 4.5) % taglines.length;
  const cycleLocal = (cycleT % 4.5) / 4.5;
  const fadeIn = Easing.easeOutCubic(clamp(cycleLocal / 0.12, 0, 1));
  const fadeOut = 1 - Easing.easeInCubic(clamp((cycleLocal - 0.88) / 0.12, 0, 1));
  const taglineOp = Math.min(fadeIn, fadeOut);

  const JP_FONT = "'Plus Jakarta Sans','Hiragino Sans','Noto Sans JP',sans-serif";
  const MONO = "'JetBrains Mono', monospace";
  const LABEL_NAVY = '#1D4E89';

  return (
    <div style={{
      position: 'absolute', inset: 0, background,
      overflow: 'hidden',
    }}>
      {/* Split-open incoming panels */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: 0, height: '50%',
        background: primary, transform: `translateY(${-panelOffset}px)`, zIndex: 30,
      }}/>
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: '50%',
        background: primary, transform: `translateY(${panelOffset}px)`, zIndex: 30,
      }}/>

      {/* Grid: 12 col × 10 row */}
      <div style={{
        position: 'absolute', inset: 0, padding: 44,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateRows: 'repeat(10, 1fr)',
        gap: 22,
      }}>

        {/* ─────── Card 01 — wide left, full top height ─────── */}
        <Card gridArea="1 / 1 / 8 / 6" entry={cardEntry(0.0)} bg={background}>
          <div style={{ padding: '28px 32px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: MONO, fontSize: 15, color: '#036145', fontWeight: 700, letterSpacing: '0.04em' }}>
              1. リアルタイム音声認識
            </div>
            <div style={{
              fontFamily: JP_FONT, fontWeight: 600,
              fontSize: 32, color: '#036145', lineHeight: 1.25,
              marginTop: 10, letterSpacing: '-0.01em',
            }}>
              独自開発のAIを搭載した、<br/>リアルタイム音声認識
            </div>
            <div style={{ flex: 1, position: 'relative', marginTop: 10, overflow: 'hidden' }}>
              <img src={_asset('container1', 'assets/container1.svg')} alt=""
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'center bottom',
                  transform: `translateY(${f1}px)`,
                }}/>
            </div>
          </div>
        </Card>

        {/* ─────── Card 02 — middle-top green (narrow, aligned to green box right edge) ─────── */}
        <Card gridArea="1 / 6 / 5 / 9" entry={cardEntry(0.12)} bg={primary}>
          <div style={{ padding: '28px 28px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontFamily: JP_FONT, fontWeight: 600,
              fontSize: 28, color: '#FFFFFF', lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>
              2.SOAP要約を自動生成
            </div>
            <div style={{ flex: 1, position: 'relative', marginTop: 10, overflow: 'hidden' }}>
              <img src={_asset('container2', 'assets/container2.svg')} alt=""
                style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0,
                  width: '100%', height: 'auto',
                  transform: `translateY(${Math.min(f2 * 0.4, 0)}px)`,
                  display: 'block',
                }}/>
            </div>
          </div>
        </Card>

        {/* ─────── Card 03 — middle-bottom white (under 02) ─────── */}
        <Card gridArea="5 / 6 / 8 / 9" entry={cardEntry(0.22)} bg={background}>
          <div style={{ padding: '26px 30px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              fontFamily: JP_FONT, fontWeight: 600,
              fontSize: 30, color: '#036145', lineHeight: 1.25, letterSpacing: '-0.01em',
            }}>
              3. 要約の詳細度を指定可能
            </div>
            <div style={{ flex: 1, position: 'relative', marginTop: 8, overflow: 'hidden' }}>
              <img src={_asset('container3', 'assets/container3.svg')} alt=""
                style={{
                  position: 'absolute', inset: 0, width: '100%', height: '100%',
                  objectFit: 'contain', objectPosition: 'center',
                  transform: `translateY(${f3}px)`,
                }}/>
            </div>
          </div>
        </Card>

        {/* ─────── Card 04 — right column, expanded to fill ─────── */}
        <Card gridArea="1 / 9 / 8 / 13" entry={cardEntry(0.32)} bg={background}>
          <div style={{ padding: '30px 32px 0', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontFamily: MONO, fontSize: 15, color: '#036145', fontWeight: 700, letterSpacing: '0.04em' }}>
              4. 診察タイルにフィット
            </div>
            <div style={{
              fontFamily: JP_FONT, fontWeight: 600,
              fontSize: 32, color: '#036145', lineHeight: 1.25, letterSpacing: '-0.01em',
              marginTop: 10, textAlign: 'left',
            }}>
              獣医師ひとりひとりの好みに<br/>合わせて、要約を最適化
            </div>
            <div style={{ flex: 1, position: 'relative', marginTop: 8, overflow: 'hidden' }}>
              <img src={_asset('container4', 'assets/container4_v2.svg')} alt=""
                style={{
                  position: 'absolute', left: 0, right: 0, bottom: 0,
                  width: '100%', height: 'auto',
                  transform: `translateY(${f4 * 0.3}px)`,
                  display: 'block',
                }}/>
            </div>
          </div>
        </Card>

        {/* ─────── Bottom CTA — wide green ─────── */}
        <Card gridArea="8 / 1 / 11 / 9" entry={cardEntry(0.44)} bg={primary}>
          <div style={{
            padding: '36px 44px', height: '100%', position: 'relative',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {/* bottom-right decorative half-disc */}
            <div style={{
              position: 'absolute', right: -20, bottom: -40, width: 220, height: 110,
              background: 'rgba(255,255,255,0.22)',
              borderRadius: '220px 220px 0 0',
            }}/>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{
                fontFamily: JP_FONT, fontWeight: 500,
                fontSize: 28, color: '#F4F1E8', opacity: 0.92, lineHeight: 1.15,
              }}>
                {textCopy.ctaOverline}
              </div>
              <div style={{
                fontFamily: JP_FONT, fontWeight: 600,
                fontSize: 43, color: '#FFFFFF', lineHeight: 1.15, letterSpacing: '-0.01em',
                marginTop: 8, minHeight: 76, position: 'relative',
              }}>
                <div style={{ opacity: taglineOp, transform: `translateY(${(1 - taglineOp) * 8}px)` }}>
                  {taglines[cycleIdx]}
                </div>
              </div>
            </div>
            {/* logo lockup top-right */}
            <div style={{
              position: 'absolute', right: 36, top: 28,
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <VetasisMark size={32}/>
              <VetasisWordmark size={26} color="#FFFFFF"/>
            </div>
          </div>
        </Card>

        {/* ─────── Bottom trial — SVG is self-contained ─────── */}
        <Card gridArea="8 / 9 / 11 / 13" entry={cardEntry(0.56)} bg={background}>
          <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
            <img src={_asset('container5', 'assets/container5.svg')} alt=""
              style={{
                position: 'absolute', inset: 0, width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
                transform: `translateY(${f5 * 0.3}px)`,
              }}/>
          </div>
        </Card>
      </div>
    </div>
  );
}

function Card({ gridArea, entry, bg, children }) {
  return (
    <div style={{
      gridArea,
      background: bg,
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(29, 78, 137, 0.08)',
      opacity: entry.opacity,
      transform: `scale(${entry.scale})`,
      transformOrigin: 'center',
    }}>
      {children}
    </div>
  );
}

Object.assign(window, { Scene2Grid, Card });
