'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import type { Location, Activity } from '../types';

interface MapProps {
  location: Location;
  activities: Activity[];
}

const Map = ({ location, activities }: MapProps) => {
  const mapStyles = {
    height: '100%',
    width: '100%',
  };

  const defaultCenter = {
    lat: location.coordinates.lat,
    lng: location.coordinates.lng,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >
        {activities.map((activity) => (
          <Marker
            key={activity.id}
            position={{
              lat: activity.location.coordinates.lat,
              lng: activity.location.coordinates.lng,
            }}
            title={activity.name}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map; 