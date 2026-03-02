import { Wind, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#/" className="flex items-center gap-2 hover:opacity-80 transition-opacity" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState(null, '', '#/');
        }}>
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Wind className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xl font-semibold text-foreground">Casario</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#services"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Szolgáltatások
          </a>
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Rólunk
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Kapcsolat
          </a>
        </nav>

        <a href="tel:+36300129403">
          <Button variant="hero" size="default" className="gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Árajánlat</span>
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
