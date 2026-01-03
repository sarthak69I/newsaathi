
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { socialData } from '@/lib/social-data';
import { logoData } from '@/lib/logo-data';

export function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#events', label: 'Events' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand and Subscribe */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <img src={logoData.url} alt={logoData.alt} className="h-8 w-auto filter invert" />
              <span className="text-2xl font-bold text-white">ChaskaEvent</span>
            </Link>
            <p className="text-slate-400">Join our newsletter to get the latest updates on events and promotions.</p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-700 text-white focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3">
            <div>
              <h4 className="font-semibold text-white mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 tracking-wide">Follow Us</h4>
              <p className="text-slate-400 mb-4">Stay connected on social media.</p>
              <div className="flex gap-4">
                {socialData.map((social, i) => (
                  <a key={i} href={social.href} className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} ChaskaEvent. All Rights Reserved. Built with ❤️.</p>
        </div>
      </div>
    </footer>
  );
}
    
