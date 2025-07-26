export default function CTASection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Contact us today for a free consultation and discover how we can
            help optimize your equipment performance while reducing operating
            costs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Paul van Rooyen
              </h3>
              <a
                href="tel:0843234595"
                className="text-primary text-lg font-semibold hover:text-primary/80 transition-colors"
              >
                084 323 4595
              </a>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Jason van Rooyen
              </h3>
              <a
                href="tel:0828396910"
                className="text-primary text-lg font-semibold hover:text-primary/80 transition-colors"
              >
                082 839 6910
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg">
              Request Free Quote
            </button>
            <button className="border-2 border-border text-foreground px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all">
              Schedule Service
            </button>
          </div>

          <div className="mt-8 flex justify-center space-x-8">
            <a
              href="mailto:snaprepair@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              snaprepair@gmail.com
            </a>
            <a
              href="mailto:it@snap123.co.za"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              it@snap123.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
