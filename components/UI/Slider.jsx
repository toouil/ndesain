export default function Slider({ direction, children }) {
  return (
    <div className="SLIDER" style={{ "--direction": direction }}>
      <div className="SLIDES" style={{ direction: direction == -1 ? "ltr" : "rtl" }}>
        <div className="SLIDE">{children}</div>
        <div className="SLIDE">{children}</div>
      </div>
    </div>
  );
}