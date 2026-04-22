// Dotted world map with a yellow marker at Cabinet IVATIS
// (Abomey-Calavi, Bénin — lat 6.4517, lon 2.3482)

const W = 360;
const H = 180;

const project = (lon: number, lat: number) => ({
  x: ((lon + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
});

// Deterministic pseudo-random
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Approximate continental regions (lon/lat bounding boxes)
const regions = [
  { lonMin: -165, lonMax: -55, latMin: 15, latMax: 70 },   // North America
  { lonMin: -110, lonMax: -75, latMin: 8, latMax: 22 },    // Central America
  { lonMin: -82, lonMax: -35, latMin: -55, latMax: 12 },   // South America
  { lonMin: -10, lonMax: 40, latMin: 36, latMax: 70 },     // Europe
  { lonMin: -18, lonMax: 52, latMin: -35, latMax: 37 },    // Africa
  { lonMin: 35, lonMax: 60, latMin: 12, latMax: 40 },      // Middle East
  { lonMin: 60, lonMax: 145, latMin: 8, latMax: 70 },      // Asia
  { lonMin: 95, lonMax: 140, latMin: -10, latMax: 25 },    // SE Asia
  { lonMin: 113, lonMax: 154, latMin: -40, latMax: -11 },  // Australia
];

const DOTS: Array<[number, number]> = [];
let seed = 1;
regions.forEach((r) => {
  const area = (r.lonMax - r.lonMin) * (r.latMax - r.latMin);
  const count = Math.round(area * 0.05);
  for (let i = 0; i < count; i++) {
    const lon = r.lonMin + rand(seed++) * (r.lonMax - r.lonMin);
    const lat = r.latMin + rand(seed++) * (r.latMax - r.latMin);
    DOTS.push([lon, lat]);
  }
});

const COMPANY_LON = 2.3482;
const COMPANY_LAT = 6.4517;

export function WorldMapLocation() {
  const marker = project(COMPANY_LON, COMPANY_LAT);
  return (
    <div className="w-full">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        role="img"
        aria-label="Localisation du Cabinet IVATIS au Bénin sur la carte du monde"
      >
        {DOTS.map(([lon, lat], i) => {
          const p = project(lon, lat);
          return <circle key={i} cx={p.x} cy={p.y} r={0.7} fill="rgba(255,255,255,0.55)" />;
        })}
        {/* Pulsing glow */}
        <circle cx={marker.x} cy={marker.y} r={4} fill="hsl(45,95%,55%)" opacity={0.25}>
          <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Marker */}
        <circle
          cx={marker.x}
          cy={marker.y}
          r={1.8}
          fill="hsl(45,95%,55%)"
          stroke="white"
          strokeWidth={0.4}
        />
      </svg>
    </div>
  );
}
