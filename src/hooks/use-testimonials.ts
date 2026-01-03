
import { useState, useEffect } from 'react';

const mockTestimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Event Director',
    company: 'TechCorp',
    content: "ChaskaEvent made organizing our annual conference effortless. The platform is intuitive and their support team is exceptional!",
    rating: 5,
    avatarUrl: 'https://picsum.photos/seed/test1/100/100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Manager',
    company: 'InnovateCo',
    content: "Outstanding service from start to finish. Our product launch was a massive success thanks to ChaskaEvent's comprehensive tools.",
    rating: 5,
    avatarUrl: 'https://picsum.photos/seed/test2/100/100'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'Creative Studios',
    content: "The best event management platform we've used. Highly recommended for anyone serious about hosting professional events.",
    rating: 5,
    avatarUrl: 'https://picsum.photos/seed/test3/100/100'
  }
];

export function useTestimonials() {
    const [data, setData] = useState<typeof mockTestimonials | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            try {
                setData(mockTestimonials);
                setError(null);
            } catch (e) {
                setError(e instanceof Error ? e : new Error('An unknown error occurred'));
            } finally {
                setIsLoading(false);
            }
        }, 500);
    }, []);

    return { data, isLoading, error };
}
    
