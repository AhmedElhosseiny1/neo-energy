"use client";

import { useEffect, useRef, useState } from "react";

interface RegionStat {
  id: string;
  name: string;
  value: string;
  label: string;
  sub: string;
  x: number;
  y: number;
}

const regions: RegionStat[] = [
  {
    id: "lebanon",
    name: "Lebanon",
    value: "140",
    label: "Containers shipped",
    sub: "100,800 panels",
    x: 282,
    y: 118,
  },
  {
    id: "syria",
    name: "Syria",
    value: "153",
    label: "Containers shipped",
    sub: "110,160 panels",
    x: 336,
    y: 98,
  },
  {
    id: "iraq",
    name: "Iraq",
    value: "80",
    label: "Containers shipped",
    sub: "57,600 panels",
    x: 430,
    y: 136,
  },
  {
    id: "egypt",
    name: "Egypt",
    value: "+50",
    label: "Containers in 2025",
    sub: "+35K panels",
    x: 176,
    y: 244,
  },
];

// Stylised, simplified country silhouettes for the MENA region.
const COUNTRY_PATHS = [
  {
    id: "egypt",
    d: "M150,140 L260,170 L300,260 L260,380 L180,320 L130,220 Z",
  },
  {
    id: "lebanon",
    d: "M270,100 L300,100 L305,130 L275,130 Z",
  },
  {
    id: "syria",
    d: "M290,80 L380,80 L400,130 L360,160 L290,140 Z",
  },
  {
    id: "iraq",
    d: "M380,110 L480,110 L500,200 L460,260 L400,240 L360,190 Z",
  },
];

export function RegionalMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startCycle = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % regions.length);
    }, 3000);
  };

  const stopCycle = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startCycle();
    return () => stopCycle();
  }, []);

  const active = regions[activeIndex];

  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="mono-label text-accent">REGIONAL REACH</span>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Delivering Solar Across the Region
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted">
            Hover over each country to see our delivery footprint, or watch the
            numbers cycle through automatically.
          </p>
        </div>

        <div
          className="relative mx-auto mt-12 aspect-[16/9] w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Map SVG */}
          <svg
            viewBox="0 0 800 420"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Interactive map of solar deliveries across Egypt, Lebanon, Syria, and Iraq"
          >
            <defs>
              <pattern
                id="grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" className="fill-border" />
              </pattern>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#EEF6EA" />
                <stop offset="100%" stopColor="#F7F3E8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background grid + glow */}
            <rect width="800" height="420" fill="url(#grid)" />
            <rect width="800" height="420" fill="url(#mapGlow)" />

            {/* Connecting route lines */}
            <polyline
              points="176,244 282,118 336,98 430,136"
              fill="none"
              stroke="#183C2E"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.25"
            />

            {/* Country shapes */}
            {COUNTRY_PATHS.map((country) => {
              const isActive = country.id === active.id;
              return (
                <path
                  key={country.id}
                  d={country.d}
                  className={`transition-colors duration-500 ${
                    isActive ? "fill-accent/15" : "fill-accent/5"
                  }`}
                  stroke="#183C2E"
                  strokeWidth="1"
                  strokeOpacity={isActive ? 0.4 : 0.2}
                />
              );
            })}

            {/* Country labels */}
            {regions.map((region) => (
              <text
                key={`label-${region.id}`}
                x={region.x}
                y={region.y + 34}
                textAnchor="middle"
                className="fill-muted text-[10px] font-semibold uppercase tracking-wider"
              >
                {region.name}
              </text>
            ))}

            {/* Markers */}
            {regions.map((region, index) => {
              const isActive = index === activeIndex;
              return (
                <g
                  key={region.id}
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    stopCycle();
                    setActiveIndex(index);
                  }}
                  onMouseLeave={() => {
                    if (!isHovering) startCycle();
                  }}
                >
                  {/* Pulse ring */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={isActive ? 22 : 8}
                    className={`transition-all duration-700 ${
                      isActive ? "fill-accent/10" : "fill-transparent"
                    }`}
                  />
                  {/* Core dot */}
                  <circle
                    cx={region.x}
                    cy={region.y}
                    r={isActive ? 8 : 5}
                    className={`transition-all duration-300 ${
                      isActive ? "fill-accent" : "fill-accent/60"
                    }`}
                  />
                </g>
              );
            })}
          </svg>

          {/* Floating stat card */}
          <div
            className="pointer-events-none absolute z-10 w-48 -translate-x-1/2 -translate-y-full rounded-2xl border border-border bg-white p-4 shadow-md transition-all duration-500"
            style={{
              left: `${(active.x / 800) * 100}%`,
              top: `${(active.y / 420) * 100 - 4}%`,
              opacity: isHovering || active ? 1 : 0,
            }}
          >
            <p className="text-3xl font-semibold text-accent">{active.value}</p>
            <p className="mt-1 text-sm font-medium text-foreground">
              {active.label}
            </p>
            <p className="text-xs text-muted">{active.sub}</p>
            <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45 border-b border-r border-border bg-white" />
          </div>
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {regions.map((region, index) => (
            <button
              key={region.id}
              type="button"
              onMouseEnter={() => {
                stopCycle();
                setActiveIndex(index);
              }}
              onMouseLeave={() => startCycle()}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                index === activeIndex
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-foreground hover:border-accent"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  index === activeIndex ? "bg-white" : "bg-accent"
                }`}
              />
              {region.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
