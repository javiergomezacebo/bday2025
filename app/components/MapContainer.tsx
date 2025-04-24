import Map from './Map';
import type { Location, Activity } from '../types';

interface MapContainerProps {
  location: Location;
  activities: Activity[];
}

export default function MapContainer({ location, activities }: MapContainerProps) {
  console.log('MapContainer MapID:', process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID);
  return (
    <Map 
      location={location} 
      activities={activities}
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
      googleMapsMapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID || ''}
    />
  );
} 