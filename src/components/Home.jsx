import React from 'react';
import Navbar from './Navbar';
import './Home.css'
import Footer from './Footer';
import { useTranslation } from 'react-i18next';
import Example from './Banner';
import NewsletterSubscription from './NewsletterSubscription';
import BlogSection from './BlogSection';
import Testimonials from './Testimonial';
import FAQ from './FAQ';
import Cards from './Cards';
function Home() {
  const [t,i18n]=useTranslation();
  return (
   <div>
   <Example/>
    <div  className="rtl"  style={i18n.language=='fr'?{background: 'rgb(2,0,36)',background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,105,121,1) 32%, rgba(0,255,222,1) 100%)' }:{background: 'rgb(2,0,36)', background: 'linear-gradient(-90deg, rgba(2,0,36,1) 0%, rgba(9,105,121,1) 32%, rgba(0,255,222,1) 100%)'} }>

   <Navbar />
   <div id='header' className={`flex flex-wrap flex-row ${i18n.language === 'ar' ? 'flex-row-reverse' : ''}`} style={{ marginTop: "10px" }}>
   <div id='text' className={`w-full md:w-1/2 p-8 ${i18n.language === 'ar' ? 'text-right' : ''}`}>
     <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('ab')}</h1>
     <p className="mb-4 text-white">{t('p2')}</p>

     <select id="lieu" name="lieu" className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white" style={{ height: "70px", width: "180px", border: "none", borderRadius: "20px 0px 0px 20px", outline: "none" }}>
       <option value="Casablanca">{t('Casablanca')}</option>
       <option value="Rabat">{t('Rabat')}</option>
       <option value="Marrakech">{t('Marrakech')}</option>
       <option value="Fès">{t('Fès')}</option>
       <option value="Tanger">{t('Tanger')}</option>
       <option value="Agadir">{t('Agadir')}</option>
       <option value="Meknès">{t('Meknès')}</option>
       <option value="Oujda">{t('Oujda')}</option>
       <option value="Kenitra">{t('Kenitra')}</option>
       <option value="Tétouan">{t('Tétouan')}</option>
       <option value="Salé">{t('Salé')}</option>
       <option value="Nador">{t('Nador')}</option>
       <option value="Mohammédia">{t('Mohammédia')}</option>
       <option value="Beni Mellal">{t('Beni Mellal')}</option>
       <option value="Safi">{t('Safi')}</option>
       <option value="Laâyoune">{t('Laâyoune')}</option>
       <option value="Khouribga">{t('Khouribga')}</option>
       <option value="El Jadida">{t('El Jadida')}</option>
       <option value="Taza">{t('Taza')}</option>
     </select>
     <input type='search' className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white" placeholder={t('SearchPlaceholder')} style={{ height: "70px", width: "350px", border: "none", borderRadius: "0px 20px 20px 0px", outline: "none", marginLeft: "1px" }} />

     <div>
       <div className="flex flex-wrap mb-4">
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('Yoga')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('Pilates')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('PoleDance')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('Stretching')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('Dance')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('ABS')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('Boxing')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mr-2 mb-2 border border-white">{t('Fitness')}</button>
       </div>
       <div id='buttons' className="flex" style={{ marginTop: "130px" }}>
         <button className="bg-transparent text-white px-4 py-2 rounded mb-2 mr-2 border border-white">{t('HRBenefits')}</button>
         <button className="bg-transparent text-white px-4 py-2 rounded mb-2 border border-white">{t('HRBenefits')}</button>
       </div>
     </div>

   </div>
   <div id='img' className="w-full md:w-1/2 ">
     <img src='https://i.postimg.cc/9MJc7DMN/Home-Page-Graphic.png' className="w-full h-full object-cover " alt="Sport" />
   </div>
 </div>

  
 </div>


<Cards/> 


<div id='sportPrefere' className="p-8 relative rounded-lg" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'} style={{marginTop:"100px"}}>
      <h1 className="text-2xl font-bold mb-4">{t('sportPrefere.title')}</h1>
      <p className="mb-4" style={{ width: "32%" }}>{t('sportPrefere.description')}</p>
      <div className="relative rounded-lg overflow-hidden shadow">
        <img src='https://www.caceis.com/fileadmin/_processed_/csm_AdobeStock-361953727-Prostock-studio_fd66644189.jpg' alt="Sport préféré" className="w-full rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded mb-2">{t('sportPrefere.buttonText')}</button>
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
  <select id="lieu" name="lieu" className="border border-gray-300 rounded px-4 py-2 mb-4 text-gray-800 bg-white" style={{height:"70px",width:"180px",border:"none", borderRadius: "20px 0px 0px 20px",outline:"none", borderLeft:"1,5px solid black"}} dir={`${i18n.language == 'ar' ?"rtl" : ''}`}>
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
   
  </select>

  <div className="flex justify-around items-end" style={{marginTop:"80px"}}>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i className="fa-solid fa-location-dot" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Studios</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i className="fa-solid fa-person-walking" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Cours et Entraînements</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i className="fa-solid fa-fire" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Événements</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white"}}>
      <div className="flex items-center justify-center mb-4">
        <i className="fa-solid fa-video" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Vidéos</div>
    </div>
    <div className="box border border-gray-300 shadow-lg rounded-lg p-6 w-64" style={{background:"white",height:"107px"}}>
          <div className="flex items-center justify-center mb-4">
        <i className="fa-solid fa-tv" style={{color: "#4B5563"}}></i>
      </div>
      <div className="text-center text-gray-700">Activités en ligne en direct</div>
    </div>
  </div>
</div>







<BlogSection/>






<div className="py-16 bg-white">
            <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12 lg:px-20">
                <div className="flex justify-center gap-6 md:text-left md:flex lg:items-center lg:gap-16">
                    <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
                        <h1 className="text-4xl text-gray-700 font-bold md:text-5xl" style={{width:"130%"}}>{t('start')}</h1>
                        <p className="text-lg">{t('join')}.</p>
                        <div className="flex flex-row-reverse flex-wrap justify-center gap-4 md:gap-6 md:justify-end">
                            <button type="button" title="Start buying" className="w-full py-3 px-6 text-center rounded-xl transition bg-gray-700 shadow-xl hover:bg-gray-600 active:bg-gray-700 focus:bg-gray-600 sm:w-max">
                                <span className="block text-white font-semibold">
                                {t('startnow')}
                                </span>
                            </button>
                            <button type="button" title="more about" className="w-full order-first py-3 px-6 text-center rounded-xl bg-gray-100 transition hover:bg-gray-200 active:bg-gray-300 focus:bg-gray-200 sm:w-max">
                                <span className="block text-gray-600 font-semibold">
                                {t('learnmore')}
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
                        <div className="col-span-2 row-span-4">
                            <img src="https://testeurs-outdoor.com/new/wp-content/uploads/2023/07/IMG_3890-682x1024.jpeg" className="rounded-full" width="640" height="960" alt="shoes" loading="lazy" />
                        </div>
                        <div className="col-span-2 row-span-2">
                            <img src="https://c.superprof.com/i/a/548532/256922/600/20220811122847/coach-sportif-expert-running-individuel-collectif-prepa-10k-semi-marathon-trail-renforcement-musculaire-suivi.jpg" className="w-full h-full object-cover object-top rounded-xl" width="640" height="640" alt="shoe" loading="lazy" />
                        </div>
                        <div className="col-span-3 row-span-3">
                            <img src="https://image.jimcdn.com/app/cms/image/transf/dimension=417x1024:format=jpg/path/se3e5a365e0d10e6c/image/id66c76824e04812d/version/1607025931/baptiste-massin-votre-coach-sportif-au-puy-en-velay-en-haute-loire.jpg" className="w-full h-full object-cover object-top rounded-xl" width="640" height="427" alt="shoes" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>




        <Testimonials/>


        <FAQ/>







<NewsletterSubscription/>


   
   <Footer/>
   </div>
  );
}

export default Home;
