const ANIM = {
  a: "float-a",
  b: "float-b",
  spin: "spin-slow",
  pulse: "pulse-soft",
};

function Wrap({ style, anim = "a", duration = 7, delay = 0, children }) {
  return (
    <div
      style={{
        position: "absolute",
        animation: `${ANIM[anim]} ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        ...style,
      }}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function Circle({ size = 40, color = "var(--cyan)", style, anim, duration, delay, filled = true }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          background: filled ? color : "transparent",
          border: filled ? "none" : `2px solid ${color}`,
        }}
      />
    </Wrap>
  );
}

export function Star({ size = 24, color = "var(--purple)", style, anim = "pulse", duration, delay }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 1.5 14.4 9 22 11.5 14.4 14 12 21.5 9.6 14 2 11.5 9.6 9 12 1.5Z"
          fill={color}
        />
      </svg>
    </Wrap>
  );
}

export function Sparkle({ size = 18, color = "var(--pink)", style, anim = "pulse", duration = 3, delay }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none">
        <path d="M9 0c0 3.5 1 5.5 4.5 6.5C10 7.5 9 9.5 9 13c0-3.5-1-5.5-4.5-6.5C8 5.5 9 3.5 9 0Z" fill={color} />
      </svg>
    </Wrap>
  );
}

export function Dot({ size = 8, color = "var(--purple)", style, anim, duration, delay }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <div style={{ width: size, height: size, borderRadius: "50%", background: color }} />
    </Wrap>
  );
}

export function Blob({ size = 120, color = "var(--lavender)", style, anim = "b", duration = 9, delay, opacity = 1 }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity }}>
        <path
          fill={color}
          d="M45.6,-56.3C58.1,-47.8,66.4,-32.4,69.6,-16.1C72.8,0.2,70.8,17.4,62.8,31.3C54.8,45.2,40.8,55.8,24.8,62.1C8.8,68.4,-9.2,70.4,-25.6,65.6C-42,60.8,-56.8,49.2,-64.9,33.9C-73,18.7,-74.4,-0.3,-68.7,-16.4C-63,-32.5,-50.2,-45.7,-35.9,-53.9C-21.6,-62.1,-5.8,-65.3,9.6,-64.5C25,-63.7,33.1,-64.8,45.6,-56.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </Wrap>
  );
}

export function PlusIcon({ size = 20, color = "var(--purple)", style, anim, duration, delay }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none">
        <path d="M10 2v16M2 10h16" stroke={color} strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </Wrap>
  );
}

export function CurvedLine({ width = 140, height = 60, color = "var(--powder-blue)", style, anim = "a", duration, delay }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <svg width={width} height={height} viewBox="0 0 140 60" fill="none">
        <path d="M2 2C40 2 20 58 70 58C120 58 100 2 138 2" stroke={color} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </Wrap>
  );
}

export function UIWindow({ style, anim = "a", duration = 8, delay, width = 130 }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <div
        style={{
          width,
          borderRadius: 14,
          background: "var(--white)",
          boxShadow: "0 12px 30px -12px rgba(64, 58, 120, 0.25)",
          border: "1px solid var(--lavender)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 5,
            padding: "8px 10px",
            background: "var(--cool-white)",
            borderBottom: "1px solid var(--lavender)",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--pink)" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--cyan)" }} />
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--lavender)" }} />
        </div>
        <div style={{ padding: 10, display: "grid", gap: 6 }}>
          <div style={{ height: 8, width: "70%", borderRadius: 4, background: "var(--lavender)" }} />
          <div style={{ height: 8, width: "45%", borderRadius: 4, background: "var(--cyan)" }} />
        </div>
      </div>
    </Wrap>
  );
}

export function Arrow({ size = 26, color = "var(--purple)", style, rotate = 0, anim, duration, delay }) {
  return (
    <Wrap style={style} anim={anim} duration={duration} delay={delay}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
        <path d="M4 12h16M14 6l6 6-6 6" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Wrap>
  );
}

export function NumberBadge({ n, style, color = "var(--purple)", bg = "var(--cyan)" }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        width: 40,
        height: 40,
        borderRadius: "50%",
        background: bg,
        color,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "0.85rem",
        ...style,
      }}
    >
      {n}
    </div>
  );
}
