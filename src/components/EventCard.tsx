
"use client";

import Image from "next/image";
import { format } from "date-fns";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";

type Event = {
  id: number;
  title: string;
  category: string;
  price: number;
  date: string;
  location: string;
  imageUrl: string;
  imageHint: string;
  attendees: number;
  description: string;
};

export function EventCard({ event }: { event: Event }) {
  return (
    <div className="block group">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            width={400}
            height={250}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={event.imageHint}
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge className="bg-primary text-white">{event.category}</Badge>
            <Badge variant="secondary" className="bg-white/80 backdrop-blur-sm text-slate-800">${event.price}</Badge>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          <div className="space-y-3 text-sm text-slate-600 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>{format(new Date(event.date), "EEE, MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-slate-400" />
              <span>{event.location}</span>
            </div>
          </div>
          <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center">
             <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="h-4 w-4" />
                <span>{event.attendees} attending</span>
            </div>
            <div className="flex items-center gap-1 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Details</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
