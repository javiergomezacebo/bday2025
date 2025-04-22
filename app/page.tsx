'use client';

import { useState } from 'react';
import { LOCATIONS, ACTIVITIES, type Activity, type Location } from './types';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./components/Map'), { ssr: false });

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState<Location>(LOCATIONS[0]);
  const [votes, setVotes] = useState<Record<string, boolean>>({});

  const handleVote = (activityId: string) => {
    setVotes(prev => ({
      ...prev,
      [activityId]: !prev[activityId]
    }));
  };

  const filteredActivities = ACTIVITIES.filter(
    activity => activity.location.id === selectedLocation.id
  );

  const getActivitiesByDay = (date: Date, type?: Activity['type']) => {
    return filteredActivities.filter(
      activity => 
        activity.day.toDateString() === date.toDateString() &&
        (type ? activity.type === type : true)
    );
  };

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Birthday Planning - May 2nd, 2025
        </h1>
        
        <div className="flex gap-4 mb-8">
          {LOCATIONS.map(location => (
            <button
              key={location.id}
              onClick={() => setSelectedLocation(location)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedLocation.id === location.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {location.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="h-[400px] w-full">
              <MapComponent location={selectedLocation} activities={filteredActivities} />
            </div>
          </div>

          <div className="space-y-8">
            {[new Date('2025-05-01'), new Date('2025-05-02')].map((date) => (
              <div key={date.toISOString()} className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">
                  {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-medium mb-3">Activities</h3>
                    <div className="space-y-4">
                      {getActivitiesByDay(date, 'activity').map(activity => (
                        <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium">{activity.name}</h4>
                            <p className="text-gray-600">{activity.description}</p>
                          </div>
                          <button
                            onClick={() => handleVote(activity.id)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              votes[activity.id]
                                ? 'bg-green-600 text-white'
                                : 'bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {votes[activity.id] ? 'Voted' : 'Vote'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium mb-3">Dining</h3>
                    <div className="space-y-4">
                      {getActivitiesByDay(date, 'dining').map(activity => (
                        <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h4 className="font-medium">{activity.name}</h4>
                            <p className="text-gray-600">{activity.description}</p>
                          </div>
                          <button
                            onClick={() => handleVote(activity.id)}
                            className={`px-4 py-2 rounded-lg transition-colors ${
                              votes[activity.id]
                                ? 'bg-green-600 text-white'
                                : 'bg-white border border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {votes[activity.id] ? 'Voted' : 'Vote'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
