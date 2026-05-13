"use client";

import * as React from "react";
import { ArrowLeft } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { EventCreateForm } from "@/features/events/event-create-form";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex-1 container mx-auto px-4 md:px-6 pt-28 pb-20">
        <button
          onClick={() => router.push("/events")}
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Events
        </button>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Create an Event</h1>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            List your AI event on the SAKILI continental directory and reach innovators across 54 African nations.
          </p>
        </div>
        <EventCreateForm />
      </div>
    </div>
  );
}
