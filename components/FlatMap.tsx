import React, { useEffect, useState, useMemo } from 'react';
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

// Using the same GeoJSON source as the Globe for consistency
const GEO_JSON_URL = "https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson";

interface FlatMapProps {
  onCountryClick: (properties: GeoJsonProperties) => void;
  selectedCountry: string | null;
}

export const FlatMap: React.FC<FlatMapProps> = ({ onCountryClick, selectedCountry }) => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    let isMounted = true;
    fetch(GEO_JSON_URL)
      .then(res => res.json())
      .then((data: FeatureCollection) => {
        if (isMounted) setFeatures(data.features);
      })
      .catch(err => console.error("Error loading map data", err));

    const handleResize = () => {
      if (isMounted) setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const pathGenerator = useMemo(() => {
    // Equirectangular projection looks like a standard flat map
    // We center it and scale it to fit the window width
    const proj = geoEquirectangular()
      .translate([dimensions.width / 2, dimensions.height / 2 + (dimensions.height * 0.1)]) // Shift slightly down
      .scale(dimensions.width / 6.5); // Approximate scale for full width
      
    return geoPath().projection(proj);
  }, [dimensions]);

  if (features.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#050505]">
        <span className="text-gray-500 font-serif italic animate-pulse">Loading Atlas...</span>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-[#050505] relative overflow-hidden animate-in fade-in duration-700">
       
       {/* Subtle grid texture overlay */}
       <div className="absolute inset-0 opacity-5 pointer-events-none" 
            style={{ 
              backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }}>
       </div>

       <svg width={dimensions.width} height={dimensions.height} style={{ display: 'block' }}>
          <g>
            {features.map((feature, i) => {
               const isSelected = selectedCountry === feature.properties.ADMIN;
               const d = pathGenerator(feature as any);
               if (!d) return null;
               
               return (
                 <path
                   key={i}
                   d={d}
                   // HIGH CONTRAST SCHEME
                   // Default Land: Dark Grey (#1A1A1A)
                   // Selected Land: Red (#FF3530)
                   fill={isSelected ? "#FF3530" : "#1A1A1A"} 
                   
                   // Borders: Subtle Grey (#333)
                   stroke="#333333" 
                   strokeWidth={0.5}
                   
                   style={{ transition: 'all 0.3s ease', cursor: 'pointer' }}
                   onClick={(e) => {
                     e.stopPropagation();
                     onCountryClick(feature.properties);
                   }}
                   
                   // Hover: Stark White for immediate feedback
                   className="hover:fill-white hover:stroke-white transition-colors duration-300"
                 />
               )
            })}
          </g>
       </svg>
       
       {/* Editorial Decorative Elements (Updated for Dark Mode) */}
       <div className="absolute bottom-12 left-12 font-serif-display text-white/10 text-[12vw] pointer-events-none select-none italic leading-none z-0">
         World<br/>Atlas
      </div>
      
      {/* Aesthetic lines */}
      <div className="absolute top-12 right-12 w-64 h-px bg-white/10 z-0"></div>
      <div className="absolute top-12 right-12 h-64 w-px bg-white/10 z-0"></div>
      
      {/* Coordinates / Data Decorations */}
      <div className="absolute bottom-8 right-8 text-white/20 font-mono text-xs flex flex-col items-end gap-1">
          <span>LAT 00° 00' 00" N</span>
          <span>LON 00° 00' 00" E</span>
          <span className="text-[#FF3530]">SYS: ONLINE</span>
      </div>

    </div>
  );
};