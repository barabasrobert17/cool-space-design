import { Wind, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Wind className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">Casario</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Az Ön megbízható partnere minden klímával kapcsolatos igényében.
              2025 óta biztosítunk kényelmes otthonokat és irodákat.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Szolgáltatások</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-background transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Telepítés</a></li>
              <li><a href="#services" className="hover:text-background transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Karbantartás</a></li>
              <li><a href="#services" className="hover:text-background transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Javítás</a></li>
              <li><a href="#services" className="hover:text-background transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}>Termékek</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Cégünk</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Rólunk</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Csapatunk</a></li>

            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kapcsolat</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +36 30 012 9403
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:robertbarabas17@gmail.com" className="hover:text-background transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  robertbarabas17@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                1234 Budapest, Klíma utca 12.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 justify-center md:justify-start">
          <span className="text-sm font-medium text-background/70">Kövess minket:</span>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-background/70 hover:text-background transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7H8.5v-2.9h2V9.2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z" />
            </svg>
          </a>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>© 2026 Casario. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
