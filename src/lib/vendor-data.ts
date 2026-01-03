
'use client';

import { 
  MapPin, 
  Camera, 
  Palette, 
  Music, 
  Utensils, 
  Hotel, 
  Smile, 
  Zap, 
  Briefcase, 
  Wrench, 
  Settings,
  LucideIcon
} from "lucide-react";

type VendorItem = {
  title: string;
  details: string;
  imageUrl: string;
  imageHint: string;
};

type VendorDetails = {
  title: string;
  description: string;
  items: VendorItem[];
};

export type Vendor = {
  name: string;
  slug: string;
  icon: LucideIcon;
  details?: VendorDetails;
};

type VendorData = {
  title: string;
  subtitle: string;
  vendors: Vendor[];
};

export const vendorData: VendorData = {
  title: "Explore our wide range of Vendors",
  subtitle: "Select the Vendors for your Events",
  vendors: [
    { 
      name: "Event Venue", 
      slug: "event-venue",
      icon: MapPin,
      details: {
        title: "Find the Perfect Venue",
        description: "From grand ballrooms to intimate garden settings, discover the ideal backdrop for your event. We offer a diverse selection of venues to match any style and budget.",
        items: [
          { title: "Grand Ballroom", details: "Capacity: 500 guests. Perfect for weddings and galas.", imageUrl: "https://picsum.photos/seed/venue1/400/400", imageHint: "grand ballroom" },
          { title: "Modern Loft", details: "Capacity: 150 guests. Ideal for corporate mixers.", imageUrl: "https://picsum.photos/seed/venue2/400/400", imageHint: "modern loft" },
          { title: "Garden Pavilion", details: "Capacity: 200 guests. Surrounded by lush greenery.", imageUrl: "https://picsum.photos/seed/venue3/400/400", imageHint: "garden pavilion" },
        ]
      } 
    },
    { 
      name: "Photography & Videography", 
      slug: "photo-video",
      icon: Camera,
      details: {
        title: "Capture Every Moment",
        description: "Our professional photographers and videographers specialize in capturing the essence of your event, creating timeless memories you'll cherish forever.",
        items: [
          { title: "Candid Wedding Photography", details: "Natural, emotional, and unforgettable shots.", imageUrl: "https://picsum.photos/seed/photo1/400/400", imageHint: "wedding photography" },
          { title: "Corporate Event Coverage", details: "Professional coverage for conferences and meetings.", imageUrl: "https://picsum.photos/seed/photo2/400/400", imageHint: "corporate event" },
          { title: "Cinematic Event Film", details: "A beautiful film telling the story of your day.", imageUrl: "https://picsum.photos/seed/photo3/400/400", imageHint: "event videography" },
        ]
      }
    },
    { 
      name: "Event Design & Décor", 
      slug: "design-decor",
      icon: Palette,
      details: {
        title: "Transform Your Space",
        description: "Our designers work with you to create a stunning and cohesive look for your event, from floral arrangements to lighting design.",
        items: [
          { title: "Luxury Floral Arrangements", details: "Elegant centerpieces and bouquets.", imageUrl: "https://picsum.photos/seed/decor1/400/400", imageHint: "floral arrangement" },
          { title: "Thematic Stage Design", details: "Custom stages for conferences and performances.", imageUrl: "https://picsum.photos/seed/decor2/400/400", imageHint: "stage design" },
          { title: "Ambient Lighting", details: "Create the perfect mood with professional lighting.", imageUrl: "https://picsum.photos/seed/decor3/400/400", imageHint: "event lighting" },
        ]
      }
    },
    { 
      name: "Artist", 
      slug: "artists",
      icon: Music,
      details: {
        title: "Live Entertainment",
        description: "Elevate your event with talented artists, from live bands and DJs to unique performers who will captivate your guests.",
        items: [
          { title: "Live Wedding Band", details: "Get your guests dancing all night long.", imageUrl: "https://picsum.photos/seed/artist1/400/400", imageHint: "live band" },
          { title: "Corporate Event DJ", details: "Professional DJs for any corporate function.", imageUrl: "https://picsum.photos/seed/artist2/400/400", imageHint: "dj music" },
          { title: "Magicians & Performers", details: "Add a touch of magic and wonder to your event.", imageUrl: "https://picsum.photos/seed/artist3/400/400", imageHint: "magician performance" },
        ]
      }
    },
    { 
      name: "Caterer", 
      slug: "catering",
      icon: Utensils,
      details: {
        title: "Exquisite Catering Services",
        description: "Delight your guests with exceptional food and beverage services, tailored to your tastes and dietary needs.",
        items: [
          { title: "Gourmet Plated Dinners", details: "Fine dining experience for formal events.", imageUrl: "https://picsum.photos/seed/cater1/400/400", imageHint: "gourmet food" },
          { title: "Artisanal Buffet Spreads", details: "A wide variety of delicious options for guests.", imageUrl: "https://picsum.photos/seed/cater2/400/400", imageHint: "buffet food" },
          { title: "Craft Cocktail Bar", details: "Expert mixologists serving unique creations.", imageUrl: "https://picsum.photos/seed/cater3/400/400", imageHint: "cocktail bar" },
        ]
      }
    },
    { 
      name: "Hotels And Resorts", 
      slug: "hotels-resorts",
      icon: Hotel,
      details: {
        title: "Luxurious Accommodations",
        description: "Book premium hotels and resorts for your out-of-town guests, ensuring a comfortable and memorable stay.",
        items: [
          { title: "5-Star City Hotel", details: "Luxury stay in the heart of the city.", imageUrl: "https://picsum.photos/seed/hotel1/400/400", imageHint: "luxury hotel" },
          { title: "Beachfront Resort", details: "Stunning views and world-class amenities.", imageUrl: "https://picsum.photos/seed/hotel2/400/400", imageHint: "beach resort" },
          { title: "Boutique Country Inn", details: "Charming and personalized accommodations.", imageUrl: "https://picsum.photos/seed/hotel3/400/400", imageHint: "boutique hotel" },
        ]
      }
    },
    { 
      name: "Grooming Services", 
      slug: "grooming",
      icon: Smile,
      details: {
        title: "Look Your Best",
        description: "Professional hair, makeup, and grooming services to ensure you and your party look flawless for the big day.",
        items: [
          { title: "Bridal Makeup Artist", details: "Look stunning on your wedding day.", imageUrl: "https://picsum.photos/seed/groom1/400/400", imageHint: "bridal makeup" },
          { title: "Professional Hairstyling", details: "Elegant updos and modern styles.", imageUrl: "https://picsum.photos/seed/groom2/400/400", imageHint: "hairstyling" },
          { title: "Groom's Barber Services", details: "Sharp cuts and classic shaves.", imageUrl: "https://picsum.photos/seed/groom3/400/400", imageHint: "barber shop" },
        ]
      }
    },
    { 
      name: "Special Effects", 
      slug: "special-effects",
      icon: Zap,
      details: {
        title: "Dazzling Special Effects",
        description: "Add a wow-factor to your event with pyrotechnics, fog machines, laser shows, and other stunning visual effects.",
        items: [
          { title: "Indoor Pyrotechnics", details: "Safe and spectacular fireworks for your grand entrance.", imageUrl: "https://picsum.photos/seed/sfx1/400/400", imageHint: "fireworks indoor" },
          { title: "Laser Light Show", details: "A mesmerizing light performance synchronized to music.", imageUrl: "https://picsum.photos/seed/sfx2/400/400", imageHint: "laser show" },
          { title: "Confetti Cannons", details: "A burst of celebration for your key moments.", imageUrl: "https://picsum.photos/seed/sfx3/400/400", imageHint: "confetti celebration" },
        ]
      }
    },
    { 
      name: "Event Management Company", 
      slug: "event-management",
      icon: Briefcase,
      details: {
        title: "Full-Service Event Planning",
        description: "Our experienced event managers handle every detail from start to finish, ensuring a seamless and stress-free experience for you.",
        items: [
          { title: "Corporate Conference Planning", details: "Logistics, speakers, and venue management.", imageUrl: "https://picsum.photos/seed/plan1/400/400", imageHint: "conference planning" },
          { title: "Luxury Wedding Coordination", details: "From vendor booking to day-of execution.", imageUrl: "https://picsum.photos/seed/plan2/400/400", imageHint: "wedding planner" },
          { title: "Large Scale Festival Org", details: "Managing security, vendors, and programming.", imageUrl: "https://picsum.photos/seed/plan3/400/400", imageHint: "festival planning" },
        ]
      }
    },
    { 
      name: "Facility Management", 
      slug: "facility-management",
      icon: Wrench,
      details: {
        title: "Venue & Facility Services",
        description: "Comprehensive facility management to ensure your chosen venue is pristine, secure, and fully operational for your event.",
        items: [
          { title: "On-site Technical Support", details: "AV technicians and IT support.", imageUrl: "https://picsum.photos/seed/fac1/400/400", imageHint: "technical support" },
          { title: "Event Security Team", details: "Professional security for crowd control and safety.", imageUrl: "https://picsum.photos/seed/fac2/400/400", imageHint: "event security" },
          { title: "Post-Event Cleaning Crew", details: "Leave your venue spotless after the event.", imageUrl: "https://picsum.photos/seed/fac3/400/400", imageHint: "cleaning crew" },
        ]
      }
    },
    { 
      name: "Technical Setup", 
      slug: "technical-setup",
      icon: Settings,
      details: {
        title: "Audio-Visual & Technical Production",
        description: "State-of-the-art sound systems, lighting rigs, and video projection to create an immersive experience for your audience.",
        items: [
          { title: "Concert Sound Systems", details: "Crystal-clear audio for any size venue.", imageUrl: "https://picsum.photos/seed/tech1/400/400", imageHint: "sound system" },
          { title: "LED Video Walls", details: "Stunning, high-resolution video displays.", imageUrl: "https://picsum.photos/seed/tech2/400/400", imageHint: "led wall" },
          { title: "Intelligent Lighting Rigs", details: "Dynamic lighting to match the mood of your event.", imageUrl: "https://picsum.photos/seed/tech3/400/400", imageHint: "stage lighting" },
        ]
      }
    },
  ]
};
