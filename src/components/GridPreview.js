import { COLOR_LIST } from "../constants/colors";

const GridPreview = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 4, width: 240, height: 240 }}>
      {COLOR_LIST.map((c, i) => (
        <div key={i} style={{
          borderRadius: 8, background: c,
          boxShadow: `0 0 10px ${c}66`,
          animation: `pulse 3s ease-in-out infinite`,
          animationDelay: `${(i * 0.08) % 2}s`,
        }} />
      ))}
    </div>
  );
};

export default GridPreview;