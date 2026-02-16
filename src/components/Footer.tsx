"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-gold font-bold text-lg tracking-wider mb-4">
              LUXE<span className="text-cream font-light">INTERIORS</span>
            </h3>
            <p className="text-cream/40 text-sm leading-relaxed">
              Award-winning interior design & renovation studio in Singapore. Transforming spaces since 2009.
            </p>
          </div>
          <div>
            <h4 className="text-cream text-sm tracking-wider uppercase mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Style Quiz", "AI Quote", "Portfolio", "Services", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} className="block text-cream/40 hover:text-gold text-sm transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-cream text-sm tracking-wider uppercase mb-4">Follow Us</h4>
            <div className="space-y-2">
              {["Instagram", "Facebook", "Pinterest", "YouTube", "TikTok"].map((s) => (
                <a key={s} href="#" className="block text-cream/40 hover:text-gold text-sm transition-colors">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-cream text-sm tracking-wider uppercase mb-4">Accreditations</h4>
            <div className="space-y-2">
              {["HDB Approved", "BCA Licensed", "CaseTrust Accredited", "RCMA Member", "bizSAFE Certified"].map((a) => (
                <div key={a} className="flex items-center gap-2 text-cream/40 text-sm">
                  <span className="text-gold text-xs">✓</span> {a}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">© 2024 Luxe Interiors SG. All rights reserved.</p>
          <a
            href="https://ionicx.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-gold/20 hover:border-gold/40 transition-colors group"
          >
            <span className="text-cream/40 text-xs group-hover:text-cream/60">Powered by</span>
            <span className="text-gold text-sm font-semibold tracking-wider">IonicX AI</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
