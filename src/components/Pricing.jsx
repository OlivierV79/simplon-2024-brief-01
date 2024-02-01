import React from 'react';
import '../design/Features.css';

export default function Features() {
  return (
    <section id="pricing" className="features">
            <h2>Tarifs</h2>
        <div className="feature-container">
            <div className="feature">
                <h3>Premium</h3>
                <p>Une solution idéale pour les sites web amateurs</p>
                <p className="prix_old">100€/mois</p>
                <p className="reduction">90% de promo !</p>
                <p className="prix">10€/mois</p>
                <button>Commander</button>
            </div>
            <div className="feature">
                <h3>Business</h3>
                <p>Augmentez votre niveau avec plus de puissance et des fonctionnalités améliorées</p>
                <p className="prix_old">200€/mois</p>
                <p className="reduction">90% de promo !</p>
                <p className="prix">20€/mois</p>
                <button>Commander</button>
            </div>
            <div className="feature">
                <h3>Cloud Startup</h3>
                <p>Profitez de performances optimisées et de ressources puissantes</p>
                <p className="prix_old">500€/mois</p>
                <p className="reduction">90% de promo !</p>
                <p className="prix">50€/mois</p>
                <button>Commander</button>
            </div>
        </div>

        </section>
    
    
  );
}