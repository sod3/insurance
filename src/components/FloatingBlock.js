const FloatingBlock = ({ color, style, delay = 0 }) => (
  <div
    style={{
      position: "absolute",
      width: 44,
      height: 44,
      borderRadius: 10,
      background: color,
      boxShadow: `0 0 18px ${color}88, 0 4px 12px #0008`,
      animation: `floatBlock 6s ease-in-out infinite`,
      animationDelay: `${delay}s`,
      ...style,
    }}
  />
);

export default FloatingBlock;