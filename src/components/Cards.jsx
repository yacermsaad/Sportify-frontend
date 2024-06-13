import React from 'react';

const Cards = () => {
  return (
    <div className="antialiased w-full h-full bg-white text-gray-400 font-inter p-10">
      <div className="container px-4 mx-auto">
        <div className="text-center my-10">
          <h1 className="font-bold text-4xl text-black">Ce qui vous attend chez Sportify</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
          {/* Plan 1: Startup */}
 <div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
  <div className="w-full py-5 border-b border-gray-800">
    <h2 className="font-bold text-3xl text-black">Trouve l'activité qui te correspond !</h2>
  </div>
  <div className="px-6 py-4">
    <div className="my-5">
    <i className="fa-solid fa-person-walking" style={{fontSize:"47px",color:"lightgreen"}}></i>
 
      <p className="text-black text-xl mt-4" style={{ letterSpacing: "1px", wordSpacing: "5px" }}>
        Découvre de nouveaux cours, professeur.e.s et studios qui correspondent à tes envies au quotidien
      </p>
    </div>
  </div>
</div>




<div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
<div className="w-full py-5 border-b border-gray-800">
  <h2 className="font-bold text-3xl text-black">Trouve l'activité qui te correspond !</h2>
</div>
<div className="px-6 py-4">
  <div className="my-5">
  <i className="fa-solid fa-person-walking" style={{fontSize:"47px",color:"lightgreen"}}></i>

    <p className="text-black text-xl mt-4" style={{ letterSpacing: "1px", wordSpacing: "5px" }}>
      Découvre de nouveaux cours, professeur.e.s et studios qui correspondent à tes envies au quotidien
    </p>
  </div>
</div>
</div>






<div className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
<div className="w-full py-5 border-b border-gray-800">
  <h2 className="font-bold text-3xl text-black">Trouve l'activité qui te correspond !</h2>
</div>
<div className="px-6 py-4">
  <div className="my-5">
  <i className="fa-solid fa-person-walking" style={{fontSize:"47px",color:"lightgreen"}}></i>

    <p className="text-black text-xl mt-4" style={{ letterSpacing: "1px", wordSpacing: "5px" }}>
      Découvre de nouveaux cours, professeur.e.s et studios qui correspondent à tes envies au quotidien
    </p>
  </div>
</div>
</div>

          
    
        </div>
      </div>
    </div>
  );
};

export default Cards;
