import Map from './Map';
import type { Location, Activity } from '../types';

interface MapWrapperProps {
  location: Location;
  activities: Activity[];
}

export default function MapWrapper({ location, activities }: MapWrapperProps) {
  return (
    <Map 
      location={location} 
      activities={activities}
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      googleMapsMapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || ''}
    />
  );
} 