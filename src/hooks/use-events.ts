
import { useState, useEffect } from 'react';

const mockEvents = [
  {
    id: 1,
    title: "Global Tech Summit 2024",
    category: "Conference",
    price: 299,
    date: "2024-09-15T09:00:00",
    location: "San Francisco, CA",
    imageUrl: "https://picsum.photos/seed/event1/400/250",
    imageHint: "tech conference",
    attendees: 1200,
    description: "Join the brightest minds in technology as they discuss the future of AI, blockchain, and more. A three-day event full of networking and learning opportunities."
  },
  {
    id: 2,
    title: "Creative Design Workshop",
    category: "Workshop",
    price: 150,
    date: "2024-10-05T10:00:00",
    location: "New York, NY",
    imageUrl: "https://picsum.photos/seed/event2/400/250",
    imageHint: "design workshop",
    attendees: 75,
    description: "Unleash your creativity in this hands-on workshop. Learn the latest design trends and techniques from industry experts."
  },
  {
    id: 3,
    title: "Indie Music Festival",
    category: "Concert",
    price: 75,
    date: "2024-10-12T15:00:00",
    location: "Austin, TX",
    imageUrl: "https://picsum.photos/seed/event3/400/250",
    imageHint: "music festival",
    attendees: 5000,
    description: "Experience the best of indie music with a lineup of talented artists. A weekend of great music, food, and vibes."
  },
  {
    id: 4,
    title: "Startup Networking Night",
    category: "Networking",
    price: 25,
    date: "2024-09-28T18:00:00",
    location: "Chicago, IL",
    imageUrl: "https://picsum.photos/seed/event4/400/250",
    imageHint: "business networking",
    attendees: 250,
    description: "Connect with fellow entrepreneurs, investors, and innovators. Share your ideas and build valuable connections in the startup ecosystem."
  },
  {
    id: 5,
    title: "AI in Healthcare Conference",
    category: "Conference",
    price: 450,
    date: "2024-11-02T09:30:00",
    location: "Boston, MA",
    imageUrl: "https://picsum.photos/seed/event5/400/250",
    imageHint: "healthcare conference",
    attendees: 800,
    description: "Explore the transformative impact of Artificial Intelligence in healthcare. Hear from leading researchers and practitioners."
  },
  {
    id: 6,
    title: "Jazz Under the Stars",
    category: "Concert",
    price: 50,
    date: "2024-09-21T19:00:00",
    location: "New Orleans, LA",
    imageUrl: "https://picsum.photos/seed/event6/400/250",
    imageHint: "jazz club",
    attendees: 300,
    description: "A magical evening of live jazz music in an open-air venue. Enjoy classic tunes and modern improvisations."
  }
];

export function useEvents() {
    const [data, setData] = useState<typeof mockEvents | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        // Simulate network delay
        setTimeout(() => {
            try {
                setData(mockEvents);
                setError(null);
            } catch (e) {
                setError(e instanceof Error ? e : new Error('An unknown error occurred'));
            } finally {
                setIsLoading(false);
            }
        }, 1000);
    }, []);

    return { data, isLoading, error };
}

export function useEvent(id: number) {
  const [data, setData] = useState<(typeof mockEvents)[0] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      try {
        const event = mockEvents.find(e => e.id === id);
        if (event) {
          setData(event);
        } else {
          setError(new Error("Event not found"));
        }
      } catch (e) {
        setError(e instanceof Error ? e : new Error('An unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    }, 500);
  }, [id]);

  return { data, isLoading, error };
}

    