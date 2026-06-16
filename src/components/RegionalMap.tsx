"use client";

import { useEffect, useRef, useState } from "react";

interface RegionStat {
  id: string;
  name: string;
  value: string;
  label: string;
  sub: string;
  path: string;
  markerX: number;
  markerY: number;
  labelX: number;
  labelY: number;
}

const regions: RegionStat[] = [
  {
    id: "LB",
    name: "Lebanon",
    value: "140",
    label: "Containers shipped",
    sub: "100,800 panels",
    path: "M600.029726,359.634797L601.542077,358.373783L601.088458,357.055675L599.840968,356.883867L599.788798,357.001349L598.409308,359.365790L597.421520,362.074948L598.349685,362.081106L598.605088,361.500439L599.349225,361.456812L600.029726,359.634797Z",
    markerX: 599.5,
    markerY: 359.6,
    labelX: 599.5,
    labelY: 352,
  },
  {
    id: "SY",
    name: "Syria",
    value: "153",
    label: "Containers shipped",
    sub: "110,160 panels",
    path: "M613.729897,357.643190L614.777737,353.548605L614.516314,351.044471L616.034399,350.192325L617.455884,348.027560L614.301042,348.568732L612.806605,348.509894L609.615216,349.811317L605.857555,349.169919L602.804043,350.132954L601.896374,349.460020L600.260763,352.888506L599.581982,354.292500L599.840968,356.883867L601.088458,357.055675L601.542077,358.373783L600.029726,359.634797L599.349225,361.456812L599.391648,362.811501L599.015567,363.313349L599.068597,363.335834L602.158656,364.639078L607.589909,361.120690L613.729897,357.643190Z",
    markerX: 606.1,
    markerY: 355.4,
    labelX: 606.1,
    labelY: 340,
  },
  {
    id: "IQ",
    name: "Iraq",
    value: "80",
    label: "Containers shipped",
    sub: "57,600 panels",
    path: "M617.455884,348.027560L616.034399,350.192325L614.516314,351.044471L614.777737,353.548605L613.729897,357.643190L607.589909,361.120690L608.707977,365.137243L612.048710,366.023834L616.181162,368.301751L624.001048,374.755023L629.157549,375.008626L631.193032,371.946887L633.056527,372.213548L634.702457,372.370526L632.254345,368.966171L632.708967,366.613894L631.281893,364.125978L627.883544,362.318536L625.962433,359.157366L626.605240,356.535659L628.001213,355.368275L627.791960,353.381128L625.973326,352.354346L624.176333,348.234486L624.176272,348.234513L622.847149,348.821808L621.873121,347.935741L618.647190,347.485721L617.455884,348.027560Z",
    markerX: 622.8,
    markerY: 359.1,
    labelX: 622.8,
    labelY: 340,
  },
  {
    id: "EG",
    name: "Egypt",
    value: "+50",
    label: "Containers in 2025",
    sub: "+35K panels",
    path: "M569.794208,367.070053L568.790346,368.628120L568.505232,371.994565L569.337082,374.565124L569.337082,385.683190L569.337082,396.852038L580.486485,396.852038L591.247600,396.852038L602.247873,396.852038L601.761016,396.238826L598.530712,393.541220L598.992303,391.048059L596.503545,387.674352L590.789477,376.256204L589.925287,372.612683L591.904250,377.164316L594.080325,379.580487L594.726963,379.033374L596.857248,373.729150L596.581684,372.900349L595.034626,368.206576L595.034611,368.206585L593.669961,369.022435L587.886028,367.523981L582.326470,368.311960L580.191193,369.337350L573.484355,367.016240L569.794208,367.070053Z",
    markerX: 586.3,
    markerY: 378.6,
    labelX: 586.3,
    labelY: 360,
  },
];

export function RegionalMap() {
  const [activeIndex, setActiveIndex] = useState(0);
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
          className="relative mx-auto mt-12 aspect-[1000/647] w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
          onMouseEnter={stopCycle}
          onMouseLeave={startCycle}
        >
          <svg
            viewBox="0 0 1000 647"
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Interactive map of solar deliveries across Egypt, Lebanon, Syria, and Iraq"
            preserveAspectRatio="xMidYMid meet"
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

            <rect width="1000" height="647" fill="url(#grid)" />
            <rect width="1000" height="647" fill="url(#mapGlow)" />

            {/* Country shapes */}
            {regions.map((region, index) => {
              const isActive = index === activeIndex;
              return (
                <g key={region.id}>
                  <path
                    d={region.path}
                    className={`cursor-pointer transition-colors duration-500 ${
                      isActive ? "fill-accent/25" : "fill-accent/5"
                    }`}
                    stroke="#183C2E"
                    strokeWidth={isActive ? 2 : 1}
                    strokeOpacity={isActive ? 0.6 : 0.25}
                    onMouseEnter={() => {
                      stopCycle();
                      setActiveIndex(index);
                    }}
                  />
                  <text
                    x={region.labelX}
                    y={region.labelY}
                    textAnchor="middle"
                    className={`pointer-events-none select-none text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      isActive ? "fill-accent" : "fill-muted"
                    }`}
                  >
                    {region.name}
                  </text>
                </g>
              );
            })}

            {/* Active marker */}
            <g
              className="pointer-events-none transition-all duration-700"
              style={{
                transform: `translate(${active.markerX}px, ${active.markerY}px)`,
              }}
            >
              <circle r="24" className="fill-accent/10 animate-pulse" />
              <circle r="8" className="fill-accent" />
            </g>
          </svg>

          {/* Floating stat card */}
          <div
            className="pointer-events-none absolute z-10 w-52 -translate-x-1/2 -translate-y-full rounded-2xl border border-border bg-white p-4 shadow-md transition-all duration-500"
            style={{
              left: `${(active.markerX / 1000) * 100}%`,
              top: `${(active.markerY / 647) * 100 - 5}%`,
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
