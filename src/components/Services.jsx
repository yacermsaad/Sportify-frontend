import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Services() {
  return (
    <div>
      <Navbar />

      <div id='blogs' className="p-8 relative rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Résultats pour  <span style={{color:'lightgreen'}}>Yoga</span></h1>
        <p className="mb-4" style={{ width: "32%" }}>Recherchez plutôt Yoga.</p>

        <div className="flex mb-4" style={{ gap: "1rem" }}>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Catégorie</option>
              <option value="yoga-studio">Studio de yoga</option>
              <option value="yoga-class">Cours de yoga</option>
              <option value="yoga-retreat">Retraite de yoga</option>
            </select>
          </div>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Détails du prestataire</option>
              <option value="provider1">Prestataire 1</option>
              <option value="provider2">Prestataire 2</option>
              <option value="provider3">Prestataire 3</option>
            </select>
          </div>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Budget</option>
              <option value="budget-low">Bas</option>
              <option value="budget-medium">Moyen</option>
              <option value="budget-high">Élevé</option>
            </select>
          </div>
          <div>
            <select className="rounded-md px-4 py-2 border border-gray-300">
              <option value="">Délais de la réalisation de la commande</option>
              <option value="short-term">Court terme</option>
              <option value="medium-term">Moyen terme</option>
              <option value="long-term">Long terme</option>
            </select>
          </div>
        </div>

        <p>
          <i className="fa-solid fa-language"></i> Certaines informations ont été traduites automatiquement. 
          Afficher la version anglaise
        </p>

        <div className="flex justify-between items-center mb-4" style={{marginTop:"30px"}}>
          <p style={{color:"gray"}}>41 résultats</p>
          <div>
            <span>Triez par :</span>
            <select className="rounded-md px-4 py-2 border border-gray-300 ml-2">
              <option value="relevance">Pertinence</option>
              <option value="best-sellers">Meilleures ventes</option>
              <option value="latest">Dernières nouveautés</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Premier Blog */}
          <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
            <Carousel showArrows={true}>
              <div>
                <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <div>
                <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <div>
                <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
            </Carousel>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-user mr-2"></i>
              <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
            </div>
            <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
            <div className="flex items-center mt-2">
              <i className="fas fa-star text-yellow-500 mr-1"></i>
              <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="ml-2">À partir de 80 $US</span>
            </div>
          </div>
          <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
          <Carousel showArrows={true}>
            <div>
              <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
              <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                <i className="fas fa-heart"></i>
              </span>
            </div>
            <div>
              <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
              <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                <i className="fas fa-heart"></i>
              </span>
            </div>
            <div>
              <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
              <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                <i className="fas fa-heart"></i>
              </span>
            </div>
          </Carousel>
          <div className="flex items-center mb-2">
            <i className="fa-solid fa-user mr-2"></i>
            <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
          </div>
          <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
          <div className="flex items-center mt-2">
            <i className="fas fa-star text-yellow-500 mr-1"></i>
            <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <span className="ml-2">À partir de 80 $US</span>
          </div>
        </div>
        <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
        <Carousel showArrows={true}>
          <div>
            <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
            <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div>
            <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
            <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
              <i className="fas fa-heart"></i>
            </span>
          </div>
          <div>
            <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
            <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
              <i className="fas fa-heart"></i>
            </span>
          </div>
        </Carousel>
        <div className="flex items-center mb-2">
          <i className="fa-solid fa-user mr-2"></i>
          <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
        </div>
        <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
        <div className="flex items-center mt-2">
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <span className="ml-2">À partir de 80 $US</span>
        </div>
      </div>
      <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
      <Carousel showArrows={true}>
        <div>
          <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
          <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
            <i className="fas fa-heart"></i>
          </span>
        </div>
        <div>
          <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
          <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
            <i className="fas fa-heart"></i>
          </span>
        </div>
        <div>
          <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
          <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
            <i className="fas fa-heart"></i>
          </span>
        </div>
      </Carousel>
      <div className="flex items-center mb-2">
        <i className="fa-solid fa-user mr-2"></i>
        <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
      </div>
      <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
      <div className="flex items-center mt-2">
        <i className="fas fa-star text-yellow-500 mr-1"></i>
        <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <span className="ml-2">À partir de 80 $US</span>
      </div>
    </div>
    <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
    <Carousel showArrows={true}>
      <div>
        <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
        <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
          <i className="fas fa-heart"></i>
        </span>
      </div>
      <div>
        <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
        <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
          <i className="fas fa-heart"></i>
        </span>
      </div>
      <div>
        <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
        <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
          <i className="fas fa-heart"></i>
        </span>
      </div>
    </Carousel>
    <div className="flex items-center mb-2">
      <i className="fa-solid fa-user mr-2"></i>
      <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
    </div>
    <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
    <div className="flex items-center mt-2">
      <i className="fas fa-star text-yellow-500 mr-1"></i>
      <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <span className="ml-2">À partir de 80 $US</span>
    </div>
  </div>
  <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
  <Carousel showArrows={true}>
    <div>
      <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
      <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
        <i className="fas fa-heart"></i>
      </span>
    </div>
    <div>
      <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
      <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
        <i className="fas fa-heart"></i>
      </span>
    </div>
    <div>
      <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
      <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
        <i className="fas fa-heart"></i>
      </span>
    </div>
  </Carousel>
  <div className="flex items-center mb-2">
    <i className="fa-solid fa-user mr-2"></i>
    <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
  </div>
  <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
  <div className="flex items-center mt-2">
    <i className="fas fa-star text-yellow-500 mr-1"></i>
    <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    <span className="ml-2">À partir de 80 $US</span>
  </div>
</div>
<div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
<Carousel showArrows={true}>
  <div>
    <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
</Carousel>
<div className="flex items-center mb-2">
  <i className="fa-solid fa-user mr-2"></i>
  <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
</div>
<p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
<div className="flex items-center mt-2">
  <i className="fas fa-star text-yellow-500 mr-1"></i>
  <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <span className="ml-2">À partir de 80 $US</span>
</div>
</div>
<div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
<Carousel showArrows={true}>
  <div>
    <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
</Carousel>
<div className="flex items-center mb-2">
  <i className="fa-solid fa-user mr-2"></i>
  <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
</div>
<p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
<div className="flex items-center mt-2">
  <i className="fas fa-star text-yellow-500 mr-1"></i>
  <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <span className="ml-2">À partir de 80 $US</span>
</div>
</div>
<div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
<Carousel showArrows={true}>
  <div>
    <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
</Carousel>
<div className="flex items-center mb-2">
  <i className="fa-solid fa-user mr-2"></i>
  <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
</div>
<p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
<div className="flex items-center mt-2">
  <i className="fas fa-star text-yellow-500 mr-1"></i>
  <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <span className="ml-2">À partir de 80 $US</span>
</div>
</div>
<div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
<Carousel showArrows={true}>
  <div>
    <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
  <div>
    <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
    <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
      <i className="fas fa-heart"></i>
    </span>
  </div>
</Carousel>
<div className="flex items-center mb-2">
  <i className="fa-solid fa-user mr-2"></i>
  <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
</div>
<p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
<div className="flex items-center mt-2">
  <i className="fas fa-star text-yellow-500 mr-1"></i>
  <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
  <span className="ml-2">À partir de 80 $US</span>
</div>
</div>

          {/* Deuxième Blog */}
          <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
            <Carousel showArrows={true}>
              <div>
                <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <div>
                <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <div>
                <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
            </Carousel>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-calendar-days mr-2"></i>
              <h2 className="text-lg font-bold mb-2">Cours complet ? Pas de problème !</h2>
            </div>
            <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
            <div className="flex items-center mt-2">
              <i className="fas fa-star text-yellow-500 mr-1"></i>
              <span>5,0</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="ml-2">À partir de 80 $US</span>
            </div>
          </div>

          {/* Troisième Blog */}
          <div className="relative rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
            <Carousel showArrows={true}>
              <div>
                <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <div>
                <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
              <div>
                <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
                <span className="absolute top-2 right-2 text-red-500 cursor-pointer">
                  <i className="fas fa-heart"></i>
                </span>
              </div>
            </Carousel>
            <div className="flex items-center mb-2">
              <i className="fa-solid fa-paper-plane mr-2"></i>
              <h2 className="text-lg font-bold mb-2">Restez informé(e)</h2>
            </div>
            <p>Pour vous offrir la meilleure expérience possible, nous travaillons constamment sur de nouvelles fonctionnalités ! Deux à trois nouvelles fonctionnalités sont ajoutées chaque mois. Restez connecté !</p>
            <div className="flex items-center mt-2">
              <i className="fas fa-star text-yellow-500 mr-1"></i>
              <span>5,0</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <span className="ml-2" >À partir de 80 $US</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Services;
