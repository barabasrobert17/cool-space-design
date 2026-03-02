import { ArrowRight, Snowflake } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-ac.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern nappali klímával"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary/10">
              <Snowflake className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-accent-foreground">
                Professzionális Klíma Szolgáltatások
              </span>
            </div>
          </div>

          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            <span className="text-foreground">Maradjon Hűvös,</span>
            <br />
            <span className="text-gradient">Érezze Jól Magát</span>
          </h1>

          <p className="animate-fade-up-delay-2 text-lg sm:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Szakértő klíma telepítés, karbantartás és javítás.
            Otthonát egész évben kényelmessé tesszük megbízható,
            energiahatékony megoldásokkal.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 items-center">
            <a href="tel:+36300129403">
              <Button variant="hero" size="xl" className="gap-2">
                Időpontfoglalás
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Button variant="heroOutline" size="xl">
                Szolgáltatásaink
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
