import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@codax/ui/components/button";

export function Hero() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">Free tools, no sign-up needed</span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Small tools that <span className="text-primary">actually help</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            A growing collection of free web tools for students, developers, and creators. No
            accounts, no bloat—just open and use.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button size="lg" asChild>
              <a href="#tools">
                Browse tools
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#about">Learn more</a>
            </Button>
          </div>

          {/* Quick stats */}
          <div
            className="flex items-center justify-center gap-8 pt-6 text-sm text-muted-foreground animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Always free</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>No sign-up</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span>Open source friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
