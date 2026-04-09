import React, { useEffect, useMemo, useState } from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { GeoJsonProperties } from '../types';
import worldCountriesData from '../data/worldCountries.json';

interface Feature {
  type: string;
  properties: GeoJsonProperties;
  geometry: any;
}

interface FlatMapProps {
  onCountryClick: (properties: GeoJsonProperties) => void;
  selectedCountry: string | null;
}

export const FlatMap: React.FC<FlatMapProps> = ({ onCountryClick, selectedCountry }) => {
  const [dimensions, setDimensions] = useState(() => ({
    width: typeof window !== 'undefined' ? window.innerWidth : 1440,
    height: typeof window !== 'undefined' ? window.innerHeight : 900,
  }));
  const features = (worldCountriesData as { features?: Feature[] }).features ?? [];

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pathGenerator = useMemo(() => {
    const projection = geoEquirectangular()
      .translate([dimensions.width / 2, dimensions.height / 2 + dimensions.height * 0.1])
      .scale(dimensions.width / 6.5);

    return geoPath().projection(projection);
  }, [dimensions]);

  if (features.length === 0) {
    throw new Error('Local atlas dataset is empty.');
  }

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050505] animate-in fade-in duration-700">
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <svg width={dimensions.width} height={dimensions.height} style={{ display: 'block' }}>
        <g>
          {features.map((feature, index) => {
            const isSelected = selectedCountry === feature.properties.ADMIN;
            const path = pathGenerator(feature as any);

            if (!path) {
              return null;
            }

            return (
              <path
                key={index}
                d={path}
                fill={isSelected ? '#FF3530' : '#1A1A1A'}
                stroke="#333333"
                strokeWidth={0.5}
                style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                onClick={(event) => {
                  event.stopPropagation();
                  onCountryClick(feature.properties);
                }}
                className="hover:fill-white hover:stroke-white transition-colors duration-300"
              />
            );
          })}
        </g>
      </svg>

      <div className="pointer-events-none absolute bottom-12 left-12 z-0 select-none font-serif-display text-[12vw] italic leading-none text-white/10">
        World
        <br />
        Atlas
      </div>

      <div className="absolute right-12 top-12 z-0 h-px w-64 bg-white/10" />
      <div className="absolute right-12 top-12 z-0 h-64 w-px bg-white/10" />

      <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1 font-mono text-xs text-white/20">
        <span>LAT 00 DEG 00' 00" N</span>
        <span>LON 00 DEG 00' 00" E</span>
        <span className="text-[#FF3530]">SYS: ONLINE</span>
      </div>
    </div>
  );
};
