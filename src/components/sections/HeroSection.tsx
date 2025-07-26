"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-background text-foreground relative overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Professional Equipment{" "}
                <span className="text-primary">Services</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive solutions for your equipment needs. From air
                compressor servicing to generator maintenance, we ensure your
                machinery operates at peak performance.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
                <span className="text-chart-1 font-semibold">
                  ✓ 95% Customer Satisfaction
                </span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
                <span className="text-chart-1 font-semibold">
                  ✓ Expert Technicians
                </span>
              </div>
              <div className="bg-card/50 backdrop-blur-sm px-6 py-3 rounded-full border border-border">
                <span className="text-chart-1 font-semibold">
                  ✓ Emergency Repairs
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
                Request Service
              </button>
              <button className="border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all">
                View Equipment
              </button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Industrial Equipment"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl animate-float"
              priority
            />

            {/* Floating stats */}
            <div className="absolute -top-4 -left-4 bg-card text-card-foreground p-4 rounded-xl shadow-lg animate-bounce-slow border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg animate-pulse-slow">
              <div className="text-center">
                <div className="text-2xl font-bold">80%</div>
                <div className="text-sm">Repeat Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-card/30 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary/20 rounded-full animate-float"></div>
    </section>
  );
}
