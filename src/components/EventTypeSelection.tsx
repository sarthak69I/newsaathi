
"use client";

import { motion } from "framer-motion";
import { eventTypes } from "@/lib/event-types-data";

export function EventTypeSelection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1e293b] mb-4">
          We have covered your all Celebrations
        </h2>
        <p className="text-slate-500 italic">
          Enjoy all the phases of life and select your Event type
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {eventTypes.map((event, index) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer overflow-hidden rounded-xl h-[300px]"
          >
            <img
              src={event.image}
              alt={event.title}
              data-ai-hint={event.imageHint}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-white font-bold text-lg leading-tight drop-shadow-md">
                {event.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

    