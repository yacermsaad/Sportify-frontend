import React from 'react';
import Navbar from './Navbar';
import './Home.css'
import Footer from './Footer';
function Home() {
  return (
   <div>
   <div style={{ background: 'rgb(2,0,36)', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,105,121,1) 32%, rgba(0,255,222,1) 100%)' }}>
   <Navbar />
   <div id='header' className="flex flex-wrap" style={{marginTop:"10Opx"}}>
     <div id='text' className="w-full md:w-1/2 p-8">
       <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">Réserve ton yoga et tes activités sportives, c'est parti !</h1>
       <p className="mb-4 text-white">Reste flexible et réserve tes activités au moment et de la manière qui te conviennent le mieux</p>
       <select id="lieu" name="lieu" className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white" style={{height:"70px",width:"180px",border:"none", borderRadius: "20px 0px 0px 20px",outline:"none"}}>
         <option value="Casablanca">Casablanca</option>
         <option value="Rabat">Rabat</option>
         <option value="Marrakech">Marrakech</option>
         <option value="Fès">Fès</option>
         <option value="Tanger">Tanger</option>
         <option value="Agadir">Agadir</option>
         <option value="Meknès">Meknès</option>
         <option value="Oujda">Oujda</option>
         <option value="Kenitra">Kenitra</option>
         <option value="Tétouan">Tétouan</option>
         <option value="Salé">Salé</option>
         <option value="Nador">Nador</option>
         <option value="Mohammédia">Mohammédia</option>
         <option value="Beni Mellal">Beni Mellal</option>
         <option value="Safi">Safi</option>
         <option value="Laâyoune">Laâyoune</option>
         <option value="Khouribga">Khouribga</option>
         <option value="El Jadida">El Jadida</option>
         <option value="Taza">Taza</option>
       </select>
       <input type='search' className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white" placeholder="Rechercher un sport ou le nom d'un studio/centre" style={{height:"70px",width:"350px",border:"none", borderRadius: "0px 20px 20px 0px",outline:"none",marginLeft:"1px"}} />
       <div>
         <div className="flex flex-wrap mb-4">
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Yoga</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Pilates</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Pole Dance</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Étirements</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Danse</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Cuisses-Abdos-Fessiers</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Boxe</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">Fitness</button>
         </div>
         <div id='buttons' className="flex" style={{marginTop:"130px"}}>
           <button className="bg-transparent text-white px-4 py-2 rounded mb-2 mr-2 border border-white">Tu travailles en Ressources Humaines ? Découvre les avantages d'Eversports Corporate.</button>
           <button className="bg-transparent text-white px-4 py-2 rounded mb-2 border border-white">Tu travailles en Ressources Humaines ? Découvre les avantages d'Eversports Corporate.</button>
         </div>
       </div>
     </div>
     <div id='img' className="w-full md:w-1/2">
       <img src='https://www.eversports.fr/static/media/hero.2f3d543c.webp' className="w-full h-full object-cover" alt="Sport" />
     </div>
   </div>

  
 </div>


 <div id='section' style={{ marginTop: "50px" }}>
 <h1 className="text-center text-2xl font-bold mb-8">Ce qui vous attend chez Eversports</h1>
 <div className="flex justify-between p-8" style={{borderRadius:"10px"}}>
 <div className="w-1/3 p-4 relative" style={{ background: "#F1FAFC",  borderRadius: "10px", fontSize: "16px", marginRight: "20px", height: "290px" , mozBorderRadius: "10px" ,webkitBorderRadius: "10px" }}>
 <div className="icon-placeholder" style={{ position: "absolute", top: "0", right: "0", width: "100px", height: "100px", border: "10px solid white", display: "flex", justifyContent: "center", alignItems: "center",marginTop:"-20px",marginLeft:"70px",borderRadius:"8px"}}>
   <i class="fa-solid fa-person-walking" style={{ color: "#000", fontSize: "34px",borderRadius:"10px" }}></i>
 </div>
 {/* Placeholder for the icon */}
 <h2 className="text-lg font-bold mb-2" style={{ fontSize: "26px" }}>Trouve l'activité qui te correspond !</h2>
 <p className="text-sm" style={{ marginTop: "30px" }}>Découvre de nouveaux cours, professeur.e.s et studios qui correspondent à tes envies au quotidien</p>
</div>

<div className="w-1/3 p-4 relative" style={{ background: "#F1FAFC",  borderRadius: "10px", fontSize: "16px", marginRight: "20px", height: "290px" , mozBorderRadius: "10px" ,webkitBorderRadius: "10px" }}>
 <div className="icon-placeholder" style={{ position: "absolute", top: "0", right: "0", width: "100px", height: "100px", border: "10px solid white", display: "flex", justifyContent: "center", alignItems: "center",marginTop:"-20px",marginLeft:"70px",borderRadius:"8px"}}>
   <i class="fa-solid fa-person-walking" style={{ color: "#000", fontSize: "34px",borderRadius:"10px" }}></i>
 </div>
 {/* Placeholder for the icon */}
 <h2 className="text-lg font-bold mb-2" style={{ fontSize: "26px" }}>Trouve l'activité qui te correspond !</h2>
 <p className="text-sm" style={{ marginTop: "30px" }}>Découvre de nouveaux cours, professeur.e.s et studios qui correspondent à tes envies au quotidien</p>
</div>
<div className="w-1/3 p-4 relative" style={{ background: "#F1FAFC",  borderRadius: "10px", fontSize: "16px", marginRight: "20px", height: "290px" , mozBorderRadius: "10px" ,webkitBorderRadius: "10px" }}>
 <div className="icon-placeholder" style={{ position: "absolute", top: "0", right: "0", width: "100px", height: "100px", border: "10px solid white", display: "flex", justifyContent: "center", alignItems: "center",marginTop:"-20px",marginLeft:"70px",borderRadius:"8px"}}>
   <i class="fa-solid fa-person-walking" style={{ color: "#000", fontSize: "34px",borderRadius:"10px" }}></i>
 </div>
 {/* Placeholder for the icon */}
 <h2 className="text-lg font-bold mb-2" style={{ fontSize: "26px" }}>Trouve l'activité qui te correspond !</h2>
 <p className="text-sm" style={{ marginTop: "30px" }}>Découvre de nouveaux cours, professeur.e.s et studios qui correspondent à tes envies au quotidien</p>
</div>

   {/* Repeat the same structure for the other two sections */}
   {/* Example for the second section */}
   
   {/* Example for the third section */}
 
 </div>
</div>



<div id='sportPrefere' className="p-8 relative rounded-lg">
  <h1 className="text-2xl font-bold mb-4">Votre sport préféré dans votre ville</h1>
  <p className="mb-4" style={{ width: "32%" }}>Découvrez toutes les offres de yoga et de sports près de chez vous et trouvez le studio ou la salle qui vous correspond.</p>
  <div className="relative rounded-lg overflow-hidden shadow">
    <img src='https://www.caceis.com/fileadmin/_processed_/csm_AdobeStock-361953727-Prostock-studio_fd66644189.jpg' alt="Sport préféré" className="w-full rounded-lg" />
    <div className="absolute inset-0 flex items-center justify-center">
      <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded mb-2">Voir la carte</button>
    </div>
  </div>
</div>





<div id='ResteMotivé' className="p-8 relative rounded-lg">
  <h1 className="text-2xl font-bold mb-4">Reste motivé, que ce soit pour les cours en ligne ou les cours au studio.</h1>
  <p className="mb-4" style={{ width: "32%" }}>Quel que soit ton choix, tu trouveras chez nous l'offre qui te convient.</p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {/* Paris */}
    <div className="bg-gray-200 rounded-md p-4" style={{background:"#F1FAFC"}}>
      <h2 className="text-lg font-bold mb-2">Sports populaires à Paris</h2>
      <div className="flex flex-wrap">
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2" style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button> 
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button> 
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        {/* Add more sports tags */}
      </div>
    </div>

    {/* Marseille */}
    <div className="bg-gray-200 rounded-md p-4" style={{background:"#F1FAFC"}}>
      <h2 className="text-lg font-bold mb-2">Sports populaires à Marseille</h2>
      <div className="flex flex-wrap" >
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        {/* Add more sports tags */}
      </div>
    </div>

    {/* Lyon */}
    <div className="bg-gray-200 rounded-md p-4" style={{background:"#F1FAFC"}}>
      <h2 className="text-lg font-bold mb-2">Sports populaires à Lyon</h2>
      <div className="flex flex-wrap">
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button> 
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button> 
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        {/* Add more sports tags */}
      </div>
    </div>

    {/* Toulouse */}
    <div className="bg-gray-200 rounded-md p-4" style={{background:"#F1FAFC"}}>
      <h2 className="text-lg font-bold mb-2">Sports populaires à Toulouse</h2>
      <div className="flex flex-wrap">
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>    
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>    
        <button className="border border-black text-black px-4 py-2 rounded mr-2 mb-2"style={{background: "white",border:"1px solid lightgray"}}>Yoga</button>
        
        {/* Add more sports tags */}
      </div>
    </div>
  </div>
</div>


<div id='tuVeuxEssayer' className="p-8 relative rounded-lg" style={{marginTop:"30px", background: "#F3F4F6", height: "600px"}}>
<div className="flex justify-between items-center mb-8">
<div>
  <h1 className="text-2xl font-bold mb-4">Tu veux essayer quelque chose de nouveau ?</h1>
  <p className="mb-4" style={{ width: "62%" }}>Appelle ton acolyte sportif et découvrez les offres d'essai du moment à proximité.</p>
</div>

<div id='imgs'>
<img src='https://www.eversports.fr/static/media/women-stock-photo.a657a2cc.webp' style={{width:"200px"}}/>
<img src='https://www.eversports.fr/static/media/men-stock-photo.67dc1674.webp' style={{width:"200px"}}/>
</div>
</div>



  <label>Consulte les offres à </label>
  <select id="lieu" name="lieu" className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white" style={{height:"70px",width:"180px",border:"none", borderRadius: "20px 0px 0px 20px",outline:"none", borderLeft:"1,5px solid black"}}>
    <option value="Casablanca">Casablanca</option>
    <option value="Rabat">Rabat</option>
    <option value="Marrakech">Marrakech</option>
    <option value="Fès">Fès</option>
    <option value="Tanger">Tanger</option>
    <option value="Agadir">Agadir</option>
    <option value="Meknès">Meknès</option>
    <option value="Oujda">Oujda</option>
    <option value="Kenitra">Kenitra</option>
    <option value="Tétouan">Tétouan</option>
    <option value="Salé">Salé</option>
    <option value="Nador">Nador</option>
    <option value="Mohammédia">Mohammédia</option>
    <option value="Beni Mellal">Beni Mellal</option>
    <option value="Safi">Safi</option>
    <option value="Laâyoune">Laâyoune</option>
    <option value="Khouribga">Khouribga</option>
    <option value="El Jadida">El Jadida</option>
    <option value="Taza">Taza</option>
  </select>
  
  <select
    id="lieu"
    name="lieu"
    className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white"
    style={{
      height: "70px",
      width: "180px",
      border: "none",
      borderRadius: "0px 20px 20px 0px",
      outline: "none",
      
    }}
  >
  
    <option value="yoga">Yoga</option>
    <option value="swimming">Swimming</option>
    <option value="running">Running</option>
    <option value="cycling">Cycling</option>
    <option value="football">Football</option>
    <option value="basketball">Basketball</option>
    <option value="tennis">Tennis</option>
    <option value="golf">Golf</option>
    <option value="volleyball">Volleyball</option>
    <option value="surfing">Surfing</option>
    <option value="skateboarding">Skateboarding</option>
    <option value="hiking">Hiking</option>
    <option value="rock climbing">Rock Climbing</option>
    <option value="skiing">Skiing</option>
    <option value="snowboarding">Snowboarding</option>
    <option value="karate">Karate</option>
    <option value="judo">Judo</option>
    <option value="boxing">Boxing</option>
  </select>

  <div className="flex justify-around items-end" style={{marginTop:"80px"}}>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i class="fa-solid fa-location-dot" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Studios</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i class="fa-solid fa-person-walking" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Cours et Entraînements</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i class="fa-solid fa-fire" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Événements</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i class="fa-solid fa-video" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Vidéos</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white",height:"107px"}}>
          <div className="flex items-center justify-center mb-4">
        <i class="fa-solid fa-tv" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Activités en ligne en direct</div>
    </div>
  </div>
</div>




<div id='blogs' className="p-8 relative rounded-lg">
  <h1 className="text-2xl font-bold mb-4">Comment rester motivé ?</h1>
  <p className="mb-4" style={{ width: "32%" }}>Ces deux fonctionnalités te permettent de rester motivé et actif, même lors des journées difficiles.</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Premier Blog */}
    <div className="rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
      <img src="https://www.eversports.fr/static/media/friends-feed.cbff43d1.webp" alt="Connecte-toi avec tes amis" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
      <div className="flex items-center mb-4">
        <i className="fa-solid fa-user mr-2"></i>
        <h2 className="text-lg font-bold mb-2">Connecte-toi avec tes amis</h2>
      </div>
      <p>Sur Eversports, tu peux non seulement ajouter des amis, mais vous pouvez aussi vous inviter à faire des activités ensemble. De plus, tu peux voir quelles activités tes amis ont réservées et les rejoindre directement.</p>
    </div>
    
    {/* Deuxième Blog */}
    <div className="rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
      <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Cours complet ? Pas de problème !" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
      <div className="flex items-center mb-4">
        <i className="fa-solid fa-calendar-days mr-2"></i>
        <h2 className="text-lg font-bold mb-2">Cours complet ? Pas de problème !</h2>
      </div>
      <p>Inscris-toi sur liste d'attente pour le cours, l'atelier ou l'événement auquel tu souhaites participer et sois immédiatement averti(e) dès qu'une place se libère.</p>
    </div>
    
    {/* Troisième Blog */}
    <div className="rounded-md p-4" style={{border:"1px solid LIGHTGRAY"}}>
      <img src="https://www.eversports.fr/static/media/schedule.c222088a.webp" alt="Restez informé(e)" className="mb-4 rounded-lg shadow-lg" style={{width: "100%", height: "auto",border:"1px solid lightgray"}} />
      <div className="flex items-center mb-4">
        <i className="fa-solid fa-paper-plane mr-2"></i>
        <h2 className="text-lg font-bold mb-2">Restez informé(e)</h2>
      </div>
      <p>Pour vous offrir la meilleure expérience possible, nous travaillons constamment sur de nouvelles fonctionnalités ! Deux à trois nouvelles fonctionnalités sont ajoutées chaque mois. Restez connecté !</p>
    </div>
  </div>
</div>





<div id='reviews' className="p-8 relative rounded-lg" style={{ marginTop: "30px", background: "#F3F4F6" }}>
  <h1 className="text-2xl font-bold mb-4 text-center">Qu'en pense la communauté ?</h1>
  <p className="mb-4 text-center" style={{ width: "100%", margin: "0 auto" }}>Les utilisateurs d'Eversports font part de leur expérience avec l'application et le site Internet.</p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {/* Premier Review */}
    <div className="bg-white rounded border border-gray-200 p-4 relative flex flex-col items-center">
      <img src="https://www.eversports.fr/static/media/testimonial-claudia-nl.7e4ce178.webp" alt="Reviewer" className="rounded-full w-16 h-16 mb-4" />
      <i className="fa-solid fa-quote-right text-gray-400 mt-2 mb-4 text-3xl"></i>
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Claudia</h2>
        <p className="text-sm text-gray-600 mb-2">Pays-Bas</p>
        <p className="text-sm">Navigation rapide et facile pour trouver une salle de sport ou un cours de yoga près de chez moi, ce qui fait gagner beaucoup de temps !</p>
      </div>
    </div>

    {/* Deuxième Review */}
    <div className="bg-white rounded border border-gray-200 p-4 relative flex flex-col items-center">
      <img src="https://www.eversports.fr/static/media/testimonial-claudia-nl.7e4ce178.webp" alt="Reviewer" className="rounded-full w-16 h-16 mb-4" />
      <i className="fa-solid fa-quote-right text-gray-400 mt-2 mb-4 text-3xl"></i>
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Alexis</h2>
        <p className="text-sm text-gray-600 mb-2">Autriche</p>
        <p className="text-sm">J'adore utiliser Eversports pour réserver des terrains de padel et partager le match avec mes amis !</p>
      </div>
    </div>

    {/* Troisième Review */}
    <div className="bg-white rounded border border-gray-200 p-4 relative flex flex-col items-center">
      <img src="https://www.eversports.fr/static/media/testimonial-claudia-nl.7e4ce178.webp" alt="Reviewer" className="rounded-full w-16 h-16 mb-4" />
      <i className="fa-solid fa-quote-right text-gray-400 mt-2 mb-4 text-3xl"></i>
      <div className="text-center">
        <h2 className="text-lg font-bold mb-2">Camille</h2>
        <p className="text-sm text-gray-600 mb-2">Pays-Bas</p>
        <p className="text-sm">J'ai eu l'occasion de participer à des sports aériens et à des danses latines grâce à cette application. Cela m'a donné beaucoup de flexibilité et de liberté.</p>
      </div>
    </div>
  </div>
</div>



<div id="download-app" className="py-12 flex flex-col md:flex-row items-center justify-between" style={{ marginLeft: "50px" }}>
  <div className="container mx-auto px-4">
    <div className="max-w-md text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-6 md:mb-8" style={{ fontSize: "40px" }}>Téléchargez notre application</h2>
      <p className="text-gray-700 mb-8">Télécharge notre application Eversports et garde une trace de tes réservations, amis, studios, cours et professeurs préférés.</p>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-x-4 md:space-y-0">
        <a href="link_to_app_store" className="flex items-center bg-white py-2 px-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-200" style={{ background: "black" }}>
          <img src="img/logoApple.png" alt="App Store" className="w-10 mr-2" />
          <span className="text-gray-800 font-medium" style={{ color: "white" }}>App Store</span>
        </a>
        <a href="link_to_google_play" className="flex items-center bg-white py-2 px-6 rounded-lg shadow-md transition duration-300 hover:bg-gray-200" style={{ border: "1px solid black" }}>
          <img src="img/GooglePlay.png" alt="Google Play" className="w-10 mr-2" />
          <span className="text-gray-800 font-medium">Google Play</span>
        </a>
      </div>
    </div>
  </div>
  <div className="hidden md:block w-full md:w-1/2">
    <img src="https://www.eversports.fr/static/media/download-apps-phone.cce3f794.webp" alt="Application Image" className="mx-auto md:ml-0" style={{ width: "280px" }} />
  </div>
</div>







   
   <Footer/>
   </div>
  );
}

export default Home;
