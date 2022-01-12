import React , {useState,useEffect}from 'react';

const Heroes = () => {
const [heroes , setHeroes] = useState([])
useEffect(() =>{
  fethHeroes()
},[])

  const fethHeroes = async () => {
    const  response = await fetch('/api/hero');
    const data  = await response.json();
    setHeroes(data.hero)
    console.log(data.hero)
  }
  console.log(heroes,'heroes')
  return (
    <div>
      All Heroes 
     {heroes.map((item ,i )=>{
       return (
         <div key={i}>
           <h1>{item.superHero}</h1>
          <h3>{item.realName}</h3>
         </div>
       )
     })}
    </div>
  );
}

export default Heroes;
