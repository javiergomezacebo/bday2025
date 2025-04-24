'use client';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import type { Location, Activity } from '../types';
import { useEffect, useState } from 'react';

// Move libraries array outside component
const GOOGLE_MAPS_LIBRARIES: ('marker' | 'places')[] = ['marker', 'places'];

interface MapProps {
  location: Location;
  activities: Activity[];
  googleMapsApiKey: string;
  googleMapsMapId: string;
}

declare global {
  interface Window {
    google: typeof google;
  }
}

const Map = ({ location, activities, googleMapsApiKey, googleMapsMapId }: MapProps) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markers, setMarkers] = useState<google.maps.marker.AdvancedMarkerElement[]>([]);

  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: location.coordinates.lat,
    lng: location.coordinates.lng,
  };

  useEffect(() => {
    if (map && window.google) {
      // Clear existing markers
      markers.forEach(marker => {
        marker.map = null;
      });
      
      // Create new markers
      const newMarkers = activities.map(activity => {
        const marker = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: {
            lat: activity.location.coordinates.lat,
            lng: activity.location.coordinates.lng,
          },
          title: activity.name,
        });
        return marker;
      });
      
      setMarkers(newMarkers);

      // Cleanup function
      return () => {
        newMarkers.forEach(marker => {
          marker.map = null;
        });
      };
    }
  }, [map, activities, location, markers]);

  const onLoad = (map: google.maps.Map) => {
    setMap(map);
  };

  console.log('Map Component MapID:', googleMapsMapId);

  return (
    <LoadScript 
      googleMapsApiKey={googleMapsApiKey}
      onError={(error) => console.error('Google Maps loading error:', error)}
      libraries={GOOGLE_MAPS_LIBRARIES}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
        onLoad={onLoad}
        mapId={googleMapsMapId}
        options={{
          mapId: googleMapsMapId,
          useAdvancedMarkers: true
        }}
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default Map; 