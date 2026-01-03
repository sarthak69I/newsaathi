
"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";
import { cityData } from "@/lib/city-data";

export function CitySelection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    const speed = 0.5; // Pixels per frame

    const scroll = () => {
      if (!scrollRef.current) return;
      if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container-custom text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-[#1e293b] mb-4 italic">
          Explore Vendors and Venues around you
        </h2>
        <p className="text-slate-500 italic">
          Select the city of your choice
        </p>
      </div>

      <div 
        className="relative container-custom group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 px-4 md:px-0 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...cityData, ...cityData].map((city, index) => (
            <motion.div
              key={`${city.name}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex-shrink-0 w-[280px] h-[200px] relative rounded-2xl overflow-hidden group/item cursor-pointer shadow-lg"
            >
              <img
                src={city.image}
                alt={city.name}
                data-ai-hint={city.imageHint}
                className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover/item:bg-black/20 transition-colors flex items-center justify-center">
                <h3 className="text-white font-bold text-2xl tracking-wider drop-shadow-lg">
                  {city.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
      `}</style>
    </section>
  );
}

    