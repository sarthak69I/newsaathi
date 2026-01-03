
"use client";

import { motion } from "framer-motion";
import { vendorData } from "@/lib/vendor-data";
import Link from "next/link";

export function VendorSelection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container-custom text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4 italic">
          {vendorData.title}
        </h2>
        <p className="text-slate-500 italic">
          {vendorData.subtitle}
        </p>
      </div>

      <div data-testid="grid-vendors" className="container-custom grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12">
        {vendorData.vendors.map((vendor, index) => (
          <Link key={vendor.slug} href={`/vendors/${vendor.slug}`} className="block group">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-center cursor-pointer text-center"
            >
              <div className="relative w-24 h-24 mb-4">
                {/* Main Circle */}
                <div className="absolute inset-0 bg-[#1e40af] rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <vendor.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                {/* Accent Circle Slice */}
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-[#3b82f6]/40 rounded-full -z-10" />
              </div>
              <span className="text-sm font-bold text-[#1e40af] leading-tight max-w-[140px]">
                {vendor.name}
              </span>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
