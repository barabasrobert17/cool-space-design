import { Star } from "lucide-react";

const reviews = [
  {
    name: "Kovács Péter",
    location: "Budapest",
    rating: 5,
    text: "Kiváló szolgáltatás! A telepítés gyors és profi volt. A klíma tökéletesen működik, és nagyon elégedett vagyok az ügyfélszolgálattal is.",
  },
  {
    name: "Nagy Eszter",
    location: "Debrecen",
    rating: 5,
    text: "Már második klímát vásároltam tőlük. Megbízható termékek, pontos szállítás és kedves munkatársak. Csak ajánlani tudom!",
  },
  {
    name: "Tóth András",
    location: "Szeged",
    rating: 5,
    text: "A karbantartási szolgáltatásuk is kiváló. Évente egyszer jönnek, és mindig alapos munkát végeznek. Profi csapat!",
  },
];

const Reviews = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wide uppercase text-sm">
            Vélemények
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Mit Mondanak Rólunk Ügyfeleink
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Több száz elégedett ügyfél bízik bennünk
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
