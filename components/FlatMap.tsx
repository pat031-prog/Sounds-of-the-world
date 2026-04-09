import React, { useEffect, useMemo, useState } from 'react';
import { geoEquirectangular, geoPath } from 'd3-geo';
import { GeoJsonProperties } from '../types';

interface Feature {
  type: string;
  properties: GeoJsonProperties;
  geometry: any;
}

interface FeatureCollection {
  type: string;
  features: Feature[];
}

const GEO_JSON_URL =
  'https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson';

interface FlatMapProps {
  onCountryClick: (properties: GeoJsonProperties) => void;
  selectedCountry: string | null;
}

export const FlatMap: React.FC<FlatMapProps> = ({ onCountryClick, selectedCountry }) => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let isMounted = true;

    fetch(GEO_JSON_URL)
      .then((response) => response.json())
      .then((data: FeatureCollection) => {
        if (isMounted) {
          setFeatures(data.features);
        }
      })
      .catch((error) => console.error('Error loading map data', error));

    const handleResize = () => {
      if (isMounted) {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      isMounted = false;
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
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#050505]">
        <span className="animate-pulse font-serif italic text-gray-500">Loading Atlas...</span>
      </div>
    );
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
