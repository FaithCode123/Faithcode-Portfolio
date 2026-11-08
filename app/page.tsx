export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">

      {/* ===== NAVBAR ===== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-zinc-800">
        <div className="max-w-[1000px] mx-auto px-5 h-[64px] flex items-center justify-between">
          <a href="#" className="font-extrabold text-lg">
            Faith<span className="text-[#e9407a]">Code</span>
          </a>
          <nav className="hidden md:flex gap-7 text-sm text-zinc-300">
            <a href="#apropos" className="hover:text-white">À propos</a>
            <a href="#competences" className="hover:text-white">Compétences</a>
            <a href="#projets" className="hover:text-white">Projets</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="bg-[#e9407a] text-sm font-bold px-4 py-2 rounded-full">
            Travaillons ensemble
          </a>
        </div>
      </header>

      {/* ===== HERO AVEC TA PHOTO ===== */}
      <main className="max-w-[1000px] mx-auto px-5 pt-32 pb-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <span className="inline-block bg-[#e9407a]/15 border border-[#e9407a] text-[#ff7aa8] px-4 py-2 rounded-full text-[13px] font-semibold">
              ● Disponible pour missions - Bénin 🇧🇯
            </span>

            <h1 className="text-[42px] md:text-[68px] leading-[1.05] font-extrabold tracking-tight mt-6">
              Je transforme les problèmes
              <br />
              du Bénin en <span className="text-[#e9407a]">sites et applications web.</span>
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-[650px] mt-6">
              Enseignant le jour. Développeur de produits la nuit.
              Créateur de <strong className="text-white">DEVIS229</strong> - le générateur
              de DEVIS pro qui aide les jeunes béninois artisans en 2 minutes.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#projets" className="bg-[#e9407a] hover:bg-[#d12e68] px-7 py-3.5 rounded-[10px] font-bold">
                Voir CV229.ai en live →
              </a>
              <a href="https://github.com/FaithCode123" target="_blank" className="bg-white text-black px-7 py-3.5 rounded-[10px] font-bold">
                Voir mon GitHub
              </a>
            </div>
          </div>

          
          <div className="w-[260px] h-[260px] md:w-[300px] md:h-[300px] rounded-2xl aspect-[4/5] object-contain overflow-hidden border-4 border-[#e9407a] shrink-0">
            <img src="/photo3.png" alt="Faith Code" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-14 mt-14 pt-8 border-t border-zinc-800">
          <div><h3 className="text-3xl font-extrabold">+10</h3><p className="text-zinc-500 text-sm">Projets livrés</p></div>
          <div><h3 className="text-3xl font-extrabold">3</h3><p className="text-zinc-500 text-sm">Produits en production</p></div>
          <div><h3 className="text-3xl font-extrabold">100%</h3><p className="text-zinc-500 text-sm">Projets terminés</p></div>
        </div>
      </main>

      {/* ===== À PROPOS ===== */}
      <section id="apropos" className="max-w-[900px] mx-auto px-5 py-16">
        <h2 className="text-3xl font-extrabold">À propos de moi</h2>
        <p className="text-zinc-400 leading-relaxed mt-4 text-lg">
          Passionné par le développement web, je transforme les maquettes en produits
          qui résolvent de vrais problèmes. Mon dernier produit <strong className="text-white">DEVIS229</strong> aide
          les jeunes béninois artisan à créer un devis pro en 2 minutes. Je maîtrise le cycle complet
          du frontend, de l&apos;idée au déploiement continu sur Vercel.
        </p>
        <p className="text-zinc-400 leading-relaxed mt-4">
          Ma force ? Je suis enseignant. J&apos;explique simplement, je suis rigoureux,
          et je livre toujours ce que je promets.
        </p>
      </section>

      {/* ===== COMPÉTENCES ===== */}
<section id="competences" className="max-w-[900px] mx-auto px-5 py-16">
  <h2 className="text-3xl font-extrabold">Mes Compétences Techniques</h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">Next.js 15</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">TypeScript</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">Tailwind CSS</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">React</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">JavaScript</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">HTML5 / CSS3</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">Git, GitHub &<br />Vercel</div>
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center font-bold transition hover:border-pink-500 hover:-translate-y-1 hover:shadow-lg">Responsive<br />Design</div>
  </div>
</section>

      {/* ===== PROJETS - VERSION RECTANGLES ===== */}
      <section id="projets" className="max-w-[1000px] mx-auto px-5 py-16">
        <h2 className="text-3xl font-extrabold">Mes Projets Récents</h2>
        <p className="text-zinc-400 mt-2">Clique sur un projet pour le tester en live.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          {/* --- DEVIS229 --- */}
<div className="bg-zinc-900 border-2 border-[#e9407a] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300">
  <div className="h-[220px] relative overflow-hidden bg-gradient-to-br from-[#e9407a] via-[#1b2a4e] to-black flex flex-col items-center justify-center p-6 text-center">
    <img src="/devis229.png" alt="Devis229" className="absolute inset-0 w-full h-full object-cover object-top" />
    <span className="absolute top-3 left-3 bg-[#e9407a] text-[11px] font-extrabold px-3 py-1 rounded-full z-10">🔥 PROJET À LA UNE</span>
  </div>
  <div className="p-6">
    <h3 className="font-bold text-xl">DEVIS229 - Générateur de DEVIS Pro</h3>
    <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
      Application web pour les artisans au Bénin (maçons, menuisiers, électriciens). Ils faisaient leurs devis sur Word. C'était long et sans suivi de paiement. En 2 minutes, ils créent un devis PDF avec leur bannière, leur total, leur avance et leur reste à payer.
    </p>
    <div className="flex flex-wrap gap-2 mt-4">
      <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">Next.js 15</span>
      <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">TypeScript</span>
      <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">Tailwind</span>
      <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">jsPDF</span>
    </div>
    <div className="flex gap-3 mt-5">
      <a href="https://devis229-two.vercel.app" target="_blank" className="flex-1 text-center bg-[#e9407a] px-4 py-3 rounded-[10px] font-bold text-sm">Voir le Live 🚀</a>
      <a href="https://github.com/FaithCode123/devis229" target="_blank" className="flex-1 text-center bg-white text-black px-4 py-3 rounded-[10px] font-bold text-sm">Code GitHub</a>
    </div>
  </div>
</div>

          {/* --- CV229 --- */}
          <div className="bg-zinc-900 border-2 border-[#e9407a] rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300">
            <div className="h-[220px] relative overflow-hidden bg-gradient-to-br from-[#e9407a] via-[#1b2a4e] to-black flex flex-col items-center justify-center p-6 text-center">
              <img src="/cv229.png" alt="CV229.ai" className="absolute inset-0 w-full h-full object-cover object-top" />
              <span className="absolute top-3 left-3 bg-white text-black text-[11px] font-extrabold px-3 py-1 rounded-full z-10">⭐ PRODUIT LE PLUS UTILISÉ</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl">CV229.ai - Générateur de CV Pro</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Photo ronde, validation 18 champs, sauvegarde auto, Export PDF natif, Lettre de motivation auto + Partage WhatsApp.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">Next.js 15</span>
                <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">TypeScript</span>
                <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">Tailwind</span>
              </div>
              <div className="flex gap-3 mt-5">
                <a href="https://cv229.vercel.app" target="_blank" className="flex-1 text-center bg-[#e9407a] px-4 py-3 rounded-[10px] font-bold text-sm">Voir le Live 🚀</a>
                <a href="https://github.com/FaithCode123/cv229" target="_blank" className="flex-1 text-center bg-white text-black px-4 py-3 rounded-[10px] font-bold text-sm">Code GitHub</a>
              </div>
            </div>
          </div>

          {/* --- MR CHEF --- */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300">
            <div className="h-[220px] relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-600 to-black flex flex-col items-center justify-center p-6 text-center">
              <img src="/mrchef.png" alt="Mr Chef" className="absolute inset-0 w-full h-full object-cover object-top" />
              <span className="absolute top-3 left-3 bg-white text-black text-[11px] font-extrabold px-3 py-1 rounded-full z-10">LIVE SUR VERCEL</span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl">Mr Chef - Restaurant Moderne</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Site de commande en ligne complet avec panier, menu dynamique et design responsive.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">React</span>
                <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">Vite</span>
                <span className="text-xs bg-zinc-800 px-2.5 py-1 rounded-full">Vercel</span>
              </div>
              <div className="flex gap-3 mt-5">
                <a href="https://mon-chef-react.vercel.app/" target="_blank" className="flex-1 text-center bg-white text-black px-4 py-3 rounded-[10px] font-bold text-sm">Voir le Live 🚀</a>
                <a href="https://github.com/FaithCode123/mon-chef-react" target="_blank" className="flex-1 text-center bg-zinc-800 px-4 py-3 rounded-[10px] font-bold text-sm">Code GitHub</a>
              </div>
            </div>
          </div>
        </div>

        {/* --- ANCIENS PROJETS HTML/JS - NOMS EXACTS --- */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6">
          <h3 className="font-bold text-lg">📚 Mes premiers projets - HTML / JS</h3>
          <p className="text-zinc-400 text-sm mt-1 mb-5">
            C&apos;est là que j&apos;ai appris JavaScript. Code disponible sur GitHub.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { emoji: "✅", title: "FaithTasks", color: "from-blue-500 to-blue-700" },
              { emoji: "🧮", title: "Calculatrice", color: "from-green-500 to-green-700" },
              { emoji: "⌨️", title: "AzerType", color: "from-purple-500 to-purple-700" },
              { emoji: "🎲", title: "Ludo Game", color: "from-red-500 to-red-700" },
              { emoji: "📝", title: "To-Do-List", color: "from-yellow-500 to-orange-600" },
              { emoji: "📓", title: "Gestionnaire de notes", color: "from-teal-500 to-teal-700" },
              { emoji: "📸", title: "Robbie Lens", color: "from-pink-500 to-pink-700" },
            ].map((p) => (
              <div key={p.title} className={`bg-gradient-to-br ${p.color} rounded-xl p-4 text-center hover:scale-105 transition`}>
                <span className="text-3xl">{p.emoji}</span>
                <p className="font-bold text-sm mt-2">{p.title}</p>
                <p className="text-[11px] opacity-80">HTML • CSS • JS</p>
              </div>
            ))}
            <a href="https://github.com/FaithCode123/portfolio-faithcode" target="_blank" className="bg-white text-black rounded-xl p-4 text-center hover:scale-105 transition flex flex-col items-center justify-center">
              <span className="text-3xl">💻</span>
              <p className="font-bold text-sm mt-2">Voir le code</p>
              <p className="text-[11px] opacity-70">Sur GitHub →</p>
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
<section id="contact" className="max-w-[900px] mx-auto px-5 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-extrabold">Travaillons ensemble</h2>
  <p className="text-zinc-400 mt-4">Vous avez un projet web ? Une opportunité ? Parlons-en.</p>

  <div className="flex flex-wrap justify-center gap-3 mt-8">
    {/* WhatsApp */}
    <a href="https://wa.me/22996448338?text=Bonjour%20!%20Je%20viens%20de%20visiter%20votre%20portfolio." target="_blank" className="flex items-center gap-2 bg-[#25D366] text-black px-5 py-3.5 rounded-full font-bold">
      <img src="/logo_whatsapp_fond_transparent.png" alt="WhatsApp" className="w-6 h-6 object-contain" />
      WhatsApp
    </a>

    {/* ComeUp */}
    <a href="https://comeup.com/fr/service/561047/creer-votre-portfolio-developpeur-moderne-responsive-comme-faitcode123" target="_blank" className="flex items-center gap-2 bg-white text-black px-5 py-3.5 rounded-full font-bold">
      <img src="/logo-comeup.png" alt="ComeUp" className="w-6 h-6 object-contain" />
      ComeUp
    </a>

    {/* GitHub */}
    <a href="https://github.com/FaithCode123" target="_blank" className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-5 py-3.5 rounded-full font-bold">
      <img src="/logo-github.png" alt="GitHub" className="w-6 h-6 object-contain bg-white rounded-full" />
      GitHub
    </a>

    {/* Email */}
    <a href="mailto:chedrackgnambode5@gmail.com" className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-5 py-3.5 rounded-full font-bold">
      <img src="/logo-email.png" alt="Email" className="w-6 h-6 object-contain" />
      Email
    </a>

    
  </div>
</section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <p>© 2026 Faith Code. Développé avec Next.js, React & Vercel. | Sèmè-Podji 🇧🇯</p>
        <p className="mt-2">
          <a href="https://cv229.vercel.app" target="_blank" className="text-[#e9407a] font-bold mx-2">CV229.ai</a> |
          <a href="https://github.com/FaithCode123" target="_blank" className="mx-2">GitHub</a> |
          <a href="https://faithcode-portfolio.vercel.app/" target="_blank" className="mx-2">Vercel</a>
        </p>
      </footer>
    </div>
  );
}