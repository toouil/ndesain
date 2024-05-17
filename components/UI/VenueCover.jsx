export default function VenueCover({ image, index, currentIndex, maxDistance }) {
  const distance = Math.abs(currentIndex - index);
  let scale = 1.2;
  let translateY = 15;
  let opacity = 0;
  let background = "#"

  if (index >= currentIndex) {
    scale = 0.8 + 0.2 * ((maxDistance - distance) / maxDistance);
    translateY = ((-15 * distance) / maxDistance) * 2;
    opacity = 1 - distance * 0.3;
  }

  return (
    <div
      style={{
        transform: `translateY(${translateY}%) scale(${scale})`,
        zIndex: maxDistance - index,
        opacity,
      }}
    >
      <img
        src={image}
        style={{ opacity: currentIndex - index + 1 }}
        alt={`Venue cover`}
      />
    </div>
  );
}
