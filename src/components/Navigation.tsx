
"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, ArrowRight, Download } from "lucide-react";
import { contactData } from "@/lib/contact-data";
import { brochureData } from "@/lib/brochure-data";
import { logoData } from "@/lib/logo-data";

export function Navigation() {
    const navLinks = [
        { href: "#events", label: "Events" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#about", label: "About" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100">
            <div className="container-custom flex items-center justify-between h-20">
                <Link href="/" className="flex items-center gap-2">
                    <img src={logoData.url} alt={logoData.alt} className="h-8 w-auto" />
                    <span className="text-xl font-bold text-slate-900">ChaskaEvent</span>
                </Link>
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                            {link.label}
                        </Link>
                    ))}
                </nav>
                <div className="hidden lg:flex items-center gap-4">
                    <a href={brochureData.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="rounded-full">
                           <Download className="mr-2 h-4 w-4" /> Download Brochure
                        </Button>
                    </a>
                    <a href={`tel:${contactData.phoneNumber}`}>
                        <Button className="rounded-full">
                            Call Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </div>

                <Sheet>
                    <SheetTrigger asChild className="lg:hidden">
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-6 p-6">
                            <Link href="/" className="flex items-center gap-2 mb-4">
                                <img src={logoData.url} alt={logoData.alt} className="h-8 w-auto" />
                                <span className="text-xl font-bold text-slate-900">ChaskaEvent</span>
                            </Link>
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-lg font-medium text-slate-700 hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                             <div className="border-t border-slate-200 pt-6 mt-4 flex flex-col gap-4">
                                <a href={brochureData.url} target="_blank" rel="noopener noreferrer">
                                    <Button variant="outline" className="w-full rounded-full">
                                        <Download className="mr-2 h-4 w-4" /> Download Brochure
                                    </Button>
                                </a>
                                <a href={`tel:${contactData.phoneNumber}`}>
                                    <Button className="w-full rounded-full">
                                        Call Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
    
