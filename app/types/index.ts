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
    id: 'ericeira',
    name: 'Ericeira',
    coordinates: {
      lat: 38.9637,
      lng: -9.4179
    }
  },
  {
    id: 'troia',
    name: 'Troia',
    coordinates: {
      lat: 38.4849,
      lng: -8.9037
    }
  }
];

export const ACTIVITIES: Activity[] = [
  // Ericeira Activities
  {
    id: 'surf-lesson',
    name: 'Surf Lesson',
    description: 'Group surf lesson at Foz do Lizandro Beach',
    location: LOCATIONS[0],
    day: new Date('2025-05-01'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'coastal-walk',
    name: 'Coastal Walk',
    description: 'Scenic walk along the Ericeira cliffs',
    location: LOCATIONS[0],
    day: new Date('2025-05-01'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'seafood-dinner-ericeira',
    name: 'Seafood Dinner at Mar à Vista',
    description: 'Fresh seafood with ocean views',
    location: LOCATIONS[0],
    day: new Date('2025-05-01'),
    type: 'dining',
    votes: 0
  },
  {
    id: 'beach-day',
    name: 'Beach Day at Praia do Sul',
    description: 'Relaxing beach day with volleyball',
    location: LOCATIONS[0],
    day: new Date('2025-05-02'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'wine-tasting-ericeira',
    name: 'Wine Tasting',
    description: 'Local wine tasting experience',
    location: LOCATIONS[0],
    day: new Date('2025-05-02'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'birthday-dinner-ericeira',
    name: 'Birthday Dinner at Tik Tapas',
    description: 'Spanish fusion celebration dinner',
    location: LOCATIONS[0],
    day: new Date('2025-05-02'),
    type: 'dining',
    votes: 0
  },
  
  // Troia Activities
  {
    id: 'dolphin-watching',
    name: 'Dolphin Watching',
    description: 'Boat tour to spot dolphins in their natural habitat',
    location: LOCATIONS[1],
    day: new Date('2025-05-01'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'beach-activities',
    name: 'Beach Activities',
    description: 'Beach games and water sports at Troia Beach',
    location: LOCATIONS[1],
    day: new Date('2025-05-01'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'seafood-dinner-troia',
    name: 'Dinner at B and G Restaurant',
    description: 'Upscale dining with beach views',
    location: LOCATIONS[1],
    day: new Date('2025-05-01'),
    type: 'dining',
    votes: 0
  },
  {
    id: 'roman-ruins',
    name: 'Roman Ruins Tour',
    description: 'Guided tour of Troia Roman Ruins',
    location: LOCATIONS[1],
    day: new Date('2025-05-02'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'golf',
    name: 'Golf at Troia Resort',
    description: '18-hole golf course with ocean views',
    location: LOCATIONS[1],
    day: new Date('2025-05-02'),
    type: 'activity',
    votes: 0
  },
  {
    id: 'birthday-dinner-troia',
    name: 'Birthday Dinner at Comporta Café',
    description: 'Beachfront birthday celebration',
    location: LOCATIONS[1],
    day: new Date('2025-05-02'),
    type: 'dining',
    votes: 0
  }
]; 