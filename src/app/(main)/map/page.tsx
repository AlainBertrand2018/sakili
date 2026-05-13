"use client";

import * as React from "react";
import Link from "next/link";
import { Globe, ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";

export default function MapPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 container mx-auto px-4 md:px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <Globe className="h-16 w-16 text-primary/30 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Ecosystem Map</h1>
          <p className="text-xl text-text-secondary mb-12 max-w-2xl mx-auto">
            Explore the African AI ecosystem geographically. Discover organizations by country, region, and capability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/ecosystem/mauritius">
              <Button className="bg-primary text-primary-foreground px-8 h-14 rounded-xl text-lg">
                Explore Mauritius
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/discover">
              <Button variant="outline" className="border-border px-8 h-14 rounded-xl text-lg">
                Browse All
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
