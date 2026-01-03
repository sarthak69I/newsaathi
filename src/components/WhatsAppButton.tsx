
"use client";

import Link from 'next/link';
import { contactData } from '@/lib/contact-data';

export function WhatsAppButton() {
  return (
    <Link 
      href={`https://wa.me/${contactData.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1022px-WhatsApp.svg.png" 
        alt="WhatsApp"
        className="w-10 h-10"
      />
    </Link>
  );
}

    