// Simple dotted world map (equirectangular projection) with a yellow marker
// at the company's location in Abomey-Calavi, Benin (lat 6.4517, lon 2.3482).

const DOTS: Array<[number, number]> = [];
// Generate a sparse dot grid covering rough continental shapes.
// We use a hand-curated set of (lon, lat) ranges to approximate continents.
const CONTINENTS: Array<{ lonMin: number; lonMax: number; latMin: number; latMax: number; density?: number }> = [
  // North America
  { lonMin: -165, lonMax: -55, latMin: 15, latMax: 70 },
  // Central America
  { lonMin: -110, lonMax: -75, latMin: 8, latMax: 22 },
  // South America
  { lonMin: -82, lonMax: -35, latMin: -55, latMax: 12 },
  // Europe
  { lonMin: -10, lonMax: 40, latMin: 36, latMax: 70 },
  // Africa
  { lonMin: -18, lonMax: 52, latMin: -35, latMax: 37 },
  // Middle East
  { lonMin: 35, lonMax: 60, latMin: 12, latMax: 40 },
  // Asia
  { lonMin: 60, lonMax: 145, latMin: 8, latMax: 70 },
  // SE Asia / Indonesia
  { lonMin: 95, lonMax: 140, latMin: -10, latMax: 25 },
  // Australia
  { lonMin: 113, lonMax: 154, latminus: -40, latMax: -11 } as any,
];

// Simple deterministic pseudo-random
function rand(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const regions = [
  { lonMin: -165, lonMax: -55, latMin: 15, latMax: 70 },
  { lonMin: -110, lonMax: -75, latMin: 8, latMax: 22 },
  { lonMin: -82, lonMax: -35, latMin: -55, latMax: 12 },
  { lonMin: -10, lonMax: 40, latMin: 36, latMax: 70 },
  { lonMin: -18, lonMax: 52, latMin: -35, latMax: 37 },
  { lonMin: 35, lonMax: 60, latMin: 12, latMax: 40 },
  { lonMin: 60, lonMax: 145, latMin: 8, latMax: 70 },
  { lonMin: 95, lonMax: 140, latMin: -10, latMax: 25 },
  { lonMin: 113, lonMax: 154, latMin: -40, latMax: -11 },
];

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

const W = 360;
const H = 180;
const project = (lon: number, lat: number) => ({
  x: ((lon + 180) / 360) * W,
  y: ((90 - lat) / 180) * H,
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
        {/* Glow */}
        <circle cx={marker.x} cy={marker.y} r={4} fill="hsl(45,95%,55%)" opacity={0.25}>
          <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* Marker */}
        <circle cx={marker.x} cy={marker.y} r={1.8} fill="hsl(45,95%,55%)" stroke="white" strokeWidth={0.4} />
      </svg>
    </div>
  );
}
