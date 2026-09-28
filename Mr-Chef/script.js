import { useState } from 'react'
import './App.css'

const menu = [
  { name: "Plat Mr Chef", category: "plats", description: "Un plat généreux avec accompagnements.", price: "3500F", image: "/plat4.jpg" },
  { name: "Burger maison", category: "sandwichs", description: "Sandwich préparé avec soin.", price: "1500F", image: "/plat5.jpg" },
  { name: "Spécialité du chef", category: "plats", description: "Assiette savoureuse de la maison.", price: "4000F", image: "/plat2.jpg" },
  { name: "Douceur pâtissière", category: "patisserie", description: "Gâteaux pour toutes occasions.", price: "1000F", image: "/plat1.jpg" },
];

function App() {
  const [filtre, setFiltre] = useState('all')
  const [menuOpen, setMenuOpen] = useState(false)

  const commanderWhatsApp = (plat) => {
    const message = `Bonjour Mr Chef, je veux commander : ${plat} . Merci !`
    const url = `https://wa.me/22956758370?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  const platsFiltres = filtre === 'all' ? menu : menu.filter(i => i.category === filtre)

  return (
    <>
      <header className="header">
        <a href="#" className="logo">Mr <span>Chef</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#accueil">Accueil</a>
          <a href="#menu">Menu</a>
          <a href="#formations">Formations</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-content">
            <p className="eyebrow">MAISON DES PLATS RAPIDE & SANDWICH</p>
            <h1>We deliver to your Doorstep.</h1>
            <p>Le goût qui vous donne envie de revenir. Plats généreux préparés avec passion.</p>
            <div className="hero-buttons">
              <a href="#menu" className="btn primary">Découvrir le menu</a>
              <button className="btn secondary" onClick={() => commanderWhatsApp('une commande')}>Commander sur WhatsApp</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="/plat2.jpg" alt="Mr Chef" />
          </div>
        </section>

        <section className="section" id="menu">
          <div className="section-title">
            <p className="eyebrow">NOS SPÉCIALITÉS</p>
            <h2>Un plat pour chaque envie</h2>
          </div>
          <div className="filters">
            <button className={filtre==='all'?'filter active':'filter'} onClick={()=>setFiltre('all')}>Tous</button>
            <button className={filtre==='plats'?'filter active':'filter'} onClick={()=>setFiltre('plats')}>Plats</button>
            <button className={filtre==='sandwichs'?'filter active':'filter'} onClick={()=>setFiltre('sandwichs')}>Sandwichs</button>
            <button className={filtre==='patisserie'?'filter active':'filter'} onClick={()=>setFiltre('patisserie')}>Pâtisserie</button>
          </div>
          <div className="cards">
            {platsFiltres.map((item, i) => (
              <article key={i} className="card">
                <img className="card-image" src={item.image} alt={item.name} />
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <span className="price">{item.price}</span>
                  <button className="btn primary" style={{marginTop:'10px', width:'100%'}} onClick={() => commanderWhatsApp(item.name + ' - ' + item.price)}>Commander</button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PARTIE FORMATION DE L'AFFICHE */}
        <section className="section formations" id="formations" style={{background:'#fff7ed'}}>
          <div className="section-title">
            <p className="eyebrow">FORMATIONS</p>
            <h2>Apprendre c'est aujourd'hui, réussir demain !</h2>
          </div>
          <div className="formation-grid">
            <article className="formation-card">
              <h3>👨‍🍳 CHEF EXÉCUTIF</h3>
              <p>Devenez un manager complet et performant en cuisine professionnelle.</p>
            </article>
            <article className="formation-card">
              <h3>🍳 CHEF CUISINIER</h3>
              <p>Maîtrisez l'art culinaire et devenez un expert en cuisine.</p>
            </article>
            <article className="formation-card">
              <h3>💁‍♀️ HÔTESSE</h3>
              <p>Formation en accueil, service, étiquette et relation client.</p>
            </article>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="section-title">
            <p className="eyebrow">NOS SERVICES</p>
            <h2>Plus qu'un restaurant</h2>
          </div>
          <div className="service-grid">
            <article className="service-card"><span>🍽️</span><h3>Gastronomie variée</h3><p>Plats locaux et internationaux préparés avec passion.</p></article>
            <article className="service-card"><span>🍰</span><h3>Pâtisserie</h3><p>Gâteaux, viennoiseries et douceurs pour toutes les occasions.</p></article>
            <article className="service-card"><span>🥫</span><h3>Sauces variées</h3><p>Pour ceux qui n'ont pas le temps de cuisiner, des sauces savoureuses et prêtes à l'emploi.</p></article>
            <article className="service-card"><span>👩‍🏫</span><h3>Vous voulez apprendre nos plats ?</h3><p>Nous vous accompagnons pas à pas pour maîtriser vos recettes préférées comme un pro !</p></article>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">CONTACTEZ-NOUS</p>
            <h2>Nous sommes situés à SÈMÈ PODJI</h2>
            <p>Dans la von de l'ancienne maternité après la mairie.</p>
            <p style={{marginTop:'10px'}}><strong>Apprenants:</strong> 8h à 11h | <strong>Restaurant:</strong> 11h à 24h</p>
          </div>
          <div className="contact-box">
            <a href="tel:0156758370">📞 01 56 75 83 70 (WhatsApp)</a>
            <a href="tel:0153428248">📞 01 53 42 82 48</a>
            <a href="tel:0192624922">📞 01 92 62 49 22</a>
            <button className="btn primary" style={{marginTop:'15px'}} onClick={()=> commanderWhatsApp('Je veux des infos')}>Écrire sur WhatsApp</button>
          </div>
        </section>
      </main>

      <footer><p>© {new Date().getFullYear()} Mr Chef — La qualité, l'hygiène et votre satisfaction sont notre priorité !</p></footer>
    </>
  )
}
export default App
