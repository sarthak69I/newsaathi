'use client';

import { useParams } from 'next/navigation';
import { vendorData, Vendor } from '@/lib/vendor-data';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import { contactData } from '@/lib/contact-data';
import Link from 'next/link';

function VendorPage() {
  const params = useParams();
  const vendorSlug = params.vendor as string;

  const currentVendor = vendorData.vendors.find(v => v.slug === vendorSlug);

  if (!currentVendor) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navigation />
        <main className="pt-20">
          <section className="py-24 text-center">
            <h1 className="text-4xl font-bold mb-4">Vendor Not Found</h1>
            <p className="text-slate-500">The vendor category you are looking for does not exist.</p>
            <Link href="/" className="mt-8 inline-block">
              <Button>Go Back Home</Button>
            </Link>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navigation />
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 bg-white text-center">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <currentVendor.icon className="w-16 h-16 mx-auto text-primary mb-4" strokeWidth={1.5} />
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
                {currentVendor.details?.title || currentVendor.name}
              </h1>
              <p className="text-lg text-slate-600">
                {currentVendor.details?.description}
              </p>
            </div>
          </div>
        </section>

        {/* Items Grid Section */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentVendor.details?.items.map((item, index) => (
                <div 
                  key={index}
                  className="relative group rounded-2xl overflow-hidden shadow-lg h-[350px] cursor-pointer"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    data-ai-hint={item.imageHint}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-white font-bold text-2xl drop-shadow-md mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300">
                      {item.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
            <div className="container-custom text-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Interested in our {currentVendor.name}?</h2>
                <p className="text-slate-500 mb-8 max-w-xl mx-auto">Let's talk! Contact us today to discuss your event needs and get a personalized quote.</p>
                <a href={`tel:${contactData.phoneNumber}`}>
                    <Button size="lg" className="rounded-full">
                        <Phone className="mr-2 h-5 w-5" />
                        Contact Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </a>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default VendorPage;
