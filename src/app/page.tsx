

"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { VendorSelection } from "@/components/VendorSelection";
import { EventTypeSelection } from "@/components/EventTypeSelection";
import { CitySelection } from "@/components/CitySelection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { insertContactSchema, type InsertContact } from "@/lib/schema";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Play, Star, Users, Calendar, Trophy, MapPin, Mail, Phone, Clock, Search, Download } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { heroData } from "@/lib/hero-data";
import { contactData } from "@/lib/contact-data";
import { brochureData } from "@/lib/brochure-data";
import { portfolioData } from "@/lib/portfolio-data";

// --- Components Section ---
function SectionHeading({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Carousel */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroData[currentIndex].imageUrl}
            alt="Event Background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container-custom relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-4 tracking-tight drop-shadow-lg">
              {heroData[currentIndex].title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              {heroData[currentIndex].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Rajesh Purohit",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      text: "ChaskaEvent.com connects you with trusted vendors. I never had to worry about quality because everything is verified and reviewed.",
      rating: 5
    },
    {
      name: "Shakshi Sharma",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      text: "The entire process—from searching to booking—was smooth. I could chat with vendors and finalize everything without any stress.",
      rating: 5
    },
    {
      name: "Raj Patel",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      text: "Great experience! I booked an event photographer through ChaskaEvent.com, and the whole process was hassle-free. The vendor was fantastic!",
      rating: 5
    },
    {
      name: "Jai Ranawat",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      text: "I was struggling to find the right venue for my wedding, but ChaskaEvent.com connected me with the best professionals in no time!",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
      text: "Outstanding service! Found the perfect decorator for my sister's engagement. Highly recommended platform for all event needs.",
      rating: 5
    }
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationFrameId: number;
    const speed = 0.8; // Slow smooth scrolling

    const scroll = () => {
      if (!scrollRef.current) return;
      if (scrollRef.current.scrollLeft + scrollRef.current.clientWidth >= scrollRef.current.scrollWidth - 1) {
        scrollRef.current.scrollLeft = 0;
      } else {
        scrollRef.current.scrollLeft += speed;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container-custom text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-[#1e293b] mb-4 italic">
          Happy clients of ChaskaEvent.com
        </h2>
        <p className="text-slate-500 italic text-lg">
          Stories from Event Creators and Planners
        </p>
      </div>

      <div 
        className="relative px-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto no-scrollbar py-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Double the items for seamless loop */}
          {[...testimonials, ...testimonials].map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 w-[350px] bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative"
            >
              {/* Floating Avatar */}
              <div className="absolute -top-6 -left-4 z-10">
                <Avatar className="h-16 w-16 border-4 border-white shadow-lg ring-2 ring-[#1e40af]">
                  <AvatarImage src={item.image} alt={item.name} className="object-cover" />
                  <AvatarFallback>{item.name[0]}</AvatarFallback>
                </Avatar>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-xl text-slate-900 mb-2">{item.name}</h3>
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <style jsx global>{`
          .no-scrollbar::-webkit-scrollbar {
              display: none;
          }
        `}</style>
      </div>
    </section>
  );
}

const PortfolioItem = ({ item }: { item: typeof portfolioData[0] }) => {
  const getGridClasses = () => {
    switch (item.size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      default:
        return '';
    }
  };

  return (
    <div className={`${getGridClasses()} relative group rounded-3xl overflow-hidden shadow-md`}>
      <img 
        src={item.imageUrl} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        data-ai-hint={item.imageHint}
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      <div className={`absolute bottom-0 left-0 p-${item.size === 'large' ? '8' : '6'}`}>
        <h3 className={`font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ${item.size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          {item.title}
        </h3>
        {item.size === 'large' && (
          <p className="text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
            {item.location}
          </p>
        )}
      </div>
    </div>
  );
};

// --- Main Page Component ---
export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    const whatsappNumber = contactData.whatsappNumber;
    const whatsappMessage = `Email: ${data.email}\nSubject: ${data.subject}\nMessage: ${data.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, "_blank");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      <main>
        <HeroSection />
        <EventTypeSelection />
      </main>

      <VendorSelection />

      <CitySelection />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <SectionHeading title="Event Portfolio" subtitle="Our Recent Work" />
            <div className="mb-12 hidden md:block">
              <p className="text-slate-500 max-w-xs text-right">
                Explore our gallery of recently executed events from around the globe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            {portfolioData.map(item => <PortfolioItem key={item.id} item={item} />)}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <SectionHeading title="We Create Experiences That Matter" subtitle="About ChaskaEvent" />
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  At ChaskaEvent, we believe that events are more than just gatherings—they are opportunities to connect, inspire, and transform.
                </p>
                <p>
                  Founded in 2015, we have grown from a small local agency to a global event management powerhouse. Our team of passionate planners, designers, and strategists work tirelessly to bring your vision to life.
                </p>
              </div>

              <div className="mt-8">
                <a href={brochureData.url} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="rounded-full">
                    <Download className="mr-2 h-5 w-5" />
                    Download Our Brochure
                  </Button>
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
                {[
                  { icon: CheckCircle, title: "Meticulous Planning", text: "Every detail matters to us." },
                  { icon: Trophy, title: "Award Winning", text: "Recognized globally for excellence." },
                  { icon: Users, title: "Expert Team", text: "Dedicated professionals at your service." },
                  { icon: Star, title: "Premium Quality", text: "We never compromise on standards." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Office/Team meeting */}
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                  alt="The ChaskaEvent team in a planning meeting"
                  className="w-full h-auto object-cover"
                  data-ai-hint="team meeting office"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-100 rounded-full -z-10" />
              <div className="absolute top-1/2 -right-10 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
            {/* Contact Form */}
            <div className="lg:col-span-2 p-12">
              <div className="max-w-xl mx-auto">
                <h3 className="text-3xl font-display font-bold mb-2 text-center text-slate-900">Contact Us</h3>
                <p className="text-slate-500 mb-8 text-center">We'd love to hear from you. Fill out the form to get in touch.</p>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} className="bg-slate-50 border-slate-200 h-12 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} className="bg-slate-50 border-slate-200 h-12 focus:bg-white transition-colors" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us more about your event..." 
                              className="resize-none bg-slate-50 border-slate-200 min-h-[120px] focus:bg-white transition-colors" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

    