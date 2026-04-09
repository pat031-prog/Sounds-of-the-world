import React, { useEffect, useRef, useState, useCallback } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
import { GeoJsonProperties } from '../types';
import * as THREE from 'three';

interface EarthGlobeProps {
  onCountryClick: (properties: GeoJsonProperties) => void;
}

export const EarthGlobe: React.FC<EarthGlobeProps> = ({ onCountryClick }) => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const [hoverD, setHoverD] = useState<object | null>(null);
  const [countries, setCountries] = useState({ features: [] });
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then(res => res.json())
      .then(setCountries)
      .catch(err => console.error("Error loading globe data:", err));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.0 });
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      
      const directionalLight = globeEl.current.scene().children.find(obj => obj.type === 'DirectionalLight') as THREE.DirectionalLight;
      if (directionalLight) {
        directionalLight.intensity = 1.0;
        directionalLight.position.set(5, 5, 5);
      }
      const ambientLight = globeEl.current.scene().children.find(obj => obj.type === 'AmbientLight') as THREE.AmbientLight;
      if (ambientLight) {
        ambientLight.intensity = 0.5;
      }
    }
  }, []);

  const handlePolygonClick = useCallback((polygon: object) => {
    const p = polygon as { properties: GeoJsonProperties, bbox?: number[] };
    if (globeEl.current) {
        globeEl.current.controls().autoRotate = false;
    }
    onCountryClick(p.properties);
  }, [onCountryClick]);

  return (
    <div className="cursor-move">
      <Globe
        ref={globeEl}
        width={width}
        height={height}
        backgroundColor="rgba(0,0,0,0)"
        
        // --- DARK MODE AESTHETIC ---
        globeMaterial={new THREE.MeshPhongMaterial({
          color: '#121212', // Black Ocean
          shininess: 0.2,
        })}
        showAtmosphere={true}
        atmosphereColor="#333"
        atmosphereAltitude={0.1}
        
        polygonsData={countries.features}
        polygonAltitude={d => d === hoverD ? 0.08 : 0.01}
        
        // Land Color: Dark Grey
        // Hover Color: Neon Pastel Green (Sage/Mint)
        polygonCapColor={d => d === hoverD ? '#B4E197' : '#2A2A2A'}
        
        // Borders: Black, thin
        polygonSideColor={() => '#000000'} 
        polygonStrokeColor={() => '#111111'}
        
        polygonLabel={({ properties: d }: any) => `
          <div style="
            background: #1E1E1E; 
            color: #fff; 
            padding: 6px 12px; 
            border-radius: 20px; 
            font-family: 'DM Sans', sans-serif; 
            font-weight: 500; 
            font-size: 14px;
            border: 1px solid #444;
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
          ">
            ${d.ADMIN}
          </div>
        `}
        onPolygonHover={setHoverD}
        onPolygonClick={handlePolygonClick}
      />
    </div>
  );
};