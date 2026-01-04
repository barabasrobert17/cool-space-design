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
              2010 óta biztosítunk kényelmes otthonokat és irodákat.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Szolgáltatások</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#services" className="hover:text-background transition-colors">Telepítés</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Karbantartás</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Javítás</a></li>
              <li><a href="#services" className="hover:text-background transition-colors">Termékek</a></li>
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
                +36 
              </li>
              <li className="flex items-center gap-2">
                <a href="mailto:info@.hu" className="hover:text-background transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@.hu
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                1234 Budapest, Klíma utca 12.
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/50">
          <p>© 2026 Casario. Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
