const dark = {
  base: '#0f0f1a', surface: '#1a1a2e', elevated: '#25254a', overlay: '#232b3d',
  border: '#2d2d5e', borderAccent: '#3d3d7a',
  textPrimary: '#e2e8f0', textBody: '#cbd5e1', textSecondary: '#94a3b8', textMuted: '#64748b',
  accentGreen: '#6b7f3a', accentGreenBg: 'rgba(74,93,35,0.2)',
  accentRed: '#8b3a44', accentRedBg: 'rgba(114,47,55,0.2)',
  coreBg: 'rgba(30,58,138,0.4)', coreText: '#93c5fd',
  primary: '#60a5fa',
};

const light = {
  base: '#eeeceb', surface: '#e0dedc', elevated: '#d1cfcd',
  border: '#d1cfcd', borderAccent: '#a8a29e',
  textPrimary: '#1c1917', textSecondary: '#57534e', textMuted: '#a8a29e',
  accentGreen: '#16a34a', accentGreenBg: '#dcfce7',
  accentRed: '#dc2626', accentRedBg: '#fee2e2',
  primary: '#2563eb',
};

function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
      <div style={{ width: 24, height: 24, borderRadius: 4, background: hex, border: '1px solid rgba(255,255,255,0.1)' }} />
      <span style={{ fontSize: 11, fontFamily: 'monospace' }}>{name}</span>
      <span style={{ fontSize: 11, fontFamily: 'monospace', opacity: 0.6 }}>{hex}</span>
    </div>
  );
}

function SampleCard({ bg, border, textPrimary, textSecondary, accentGreen, accentGreenBg, accentRed, accentRedBg, primary, coreBg, coreText }: Record<string, string>) {
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 12, padding: 20, marginBottom: 12 }}>
      <h3 style={{ color: textPrimary, fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Sample Card</h3>
      <p style={{ color: textSecondary, fontSize: 14, marginBottom: 12 }}>This is body text on a surface</p>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 12 }}>
        <span style={{ background: accentGreenBg, color: accentGreen, padding: '2px 10px', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>Experienced</span>
        <span style={{ background: accentRedBg, color: accentRed, padding: '2px 10px', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>Familiar</span>
        <span style={{ background: coreBg || 'rgba(96,165,250,0.15)', color: coreText || primary, padding: '2px 10px', borderRadius: 999, fontSize: 12, fontWeight: 500 }}>Core</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button style={{ background: primary, color: '#fff', padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, border: 'none', cursor: 'pointer' }}>Primary</button>
        <button style={{ background: 'transparent', color: textPrimary, padding: '8px 16px', borderRadius: 8, fontSize: 14, fontWeight: 500, border: `1px solid ${border}`, cursor: 'pointer' }}>Outline</button>
      </div>
    </div>
  );
}

function Panel({ title, tokens, isLight }: { title: string; tokens: typeof dark | typeof light; isLight?: boolean }) {
  const bg = tokens.base;
  const textColor = isLight ? tokens.textPrimary : (tokens as typeof dark).textPrimary;
  const secondaryColor = tokens.textSecondary;
  const mutedColor = tokens.textMuted;

  const allSwatches = Object.entries(tokens).map(([name, hex]) => ({ name, hex }));

  return (
    <div style={{ background: bg, padding: 24, borderRadius: 16, flex: 1, minWidth: 300 }}>
      <h2 style={{ color: textColor, fontSize: 20, fontWeight: 700, marginBottom: 16 }}>{title}</h2>

      <h3 style={{ color: textColor, fontSize: 16, fontWeight: 600, marginBottom: 4 }}>Text Hierarchy</h3>
      <p style={{ color: textColor, fontSize: 14, marginBottom: 2 }}>Primary text (headings, titles)</p>
      <p style={{ color: secondaryColor, fontSize: 14, marginBottom: 2 }}>Secondary text (body, labels)</p>
      <p style={{ color: mutedColor, fontSize: 14, marginBottom: 16 }}>Muted text (placeholders, hints)</p>

      <SampleCard
        bg={tokens.surface}
        border={tokens.border}
        textPrimary={textColor}
        textSecondary={secondaryColor}
        accentGreen={tokens.accentGreen}
        accentGreenBg={tokens.accentGreenBg}
        accentRed={tokens.accentRed}
        accentRedBg={tokens.accentRedBg}
        primary={tokens.primary}
        coreBg={'coreBg' in tokens ? (tokens as typeof dark).coreBg : ''}
        coreText={'coreText' in tokens ? (tokens as typeof dark).coreText : ''}
      />

      <SampleCard
        bg={'elevated' in tokens ? (tokens as typeof dark).elevated : tokens.surface}
        border={tokens.borderAccent}
        textPrimary={textColor}
        textSecondary={secondaryColor}
        accentGreen={tokens.accentGreen}
        accentGreenBg={tokens.accentGreenBg}
        accentRed={tokens.accentRed}
        accentRedBg={tokens.accentRedBg}
        primary={tokens.primary}
        coreBg={'coreBg' in tokens ? (tokens as typeof dark).coreBg : ''}
        coreText={'coreText' in tokens ? (tokens as typeof dark).coreText : ''}
      />

      <h3 style={{ color: textColor, fontSize: 14, fontWeight: 600, marginTop: 16, marginBottom: 8 }}>Color Swatches</h3>
      <div style={{ color: secondaryColor }}>
        {allSwatches.map((s) => <Swatch key={s.name} name={s.name} hex={s.hex} />)}
      </div>
    </div>
  );
}

export default function PalettePreview() {
  return (
    <div style={{ padding: '24px 0' }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, textAlign: 'center' }}>Color Palette Preview</h1>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Panel title="Dark Mode (Azul-Indigo)" tokens={dark} />
        <Panel title="Light Mode (Warm Gray)" tokens={light} isLight />
      </div>
    </div>
  );
}
