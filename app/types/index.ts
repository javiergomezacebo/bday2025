export interface Location {
  id: string;
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  location: Location;
  day: Date;
  type: 'activity' | 'dining';
  votes: number;
}

export const LOCATIONS: Location[] = [
  {
    id: 'troia',
    name: 'Troia',
    coordinates: {
      lat: 38.483167,
      lng: -8.897583
    }
  }
];

export const ACTIVITIES: Activity[] = [
  // Troia Activities
  {
    id: 'dolphin-watching',
    name: 'Dolphin Watching',
    description: 'Boat tour to spot dolphins in their natural habitat',
    location: LOCATIONS[0],
    day: new Date('2025-05-01'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'beach-activities',
    name: 'Beach Activities',
    description: 'Beach games and water sports at Troia Beach',
    location: LOCATIONS[0],
    day: new Date('2025-05-01'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'seafood-dinner-troia',
    name: 'Dinner at B and G Restaurant',
    description: 'Upscale dining with beach views',
    location: LOCATIONS[0],
    day: new Date('2025-05-01'),
    type: 'dining',
    votes: 0
  },
  {
    id: 'roman-ruins',
    name: 'Roman Ruins Tour',
    description: 'Guided tour of Troia Roman Ruins',
    location: LOCATIONS[0],
    day: new Date('2025-05-02'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'golf',
    name: 'Golf at Troia Resort',
    description: '18-hole golf course with ocean views',
    location: LOCATIONS[0],
    day: new Date('2025-05-02'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'birthday-dinner-troia',
    name: 'Birthday Dinner at Comporta Café',
    description: 'Beachfront birthday celebration',
    location: LOCATIONS[0],
    day: new Date('2025-05-02'),
    type: 'dining',
    votes: 0
  }
]; 