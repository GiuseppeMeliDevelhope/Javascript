
const div=document.querySelector("div");
const pokemon=async()=> {
   try{
        div.innerHTML=""; //in questo modo anche se clicco piu volte search non si stampa di nuovo resta sempre un immagine 
         const namePokemon=document.querySelector("input").value;
         const url= await fetch(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`);
         const json= await url.json();
     
         const p=document.querySelector("p")
         p.innerHTML=`<p> abilita: ${json.abilities.map(x=> x.ability.name).join()} </p>
         <p> esperienza_base: ${json.base_experience} </p>
         <p> name: ${json.name} </p>`;
     
         const img=await fetch (json.forms[0].url);
         const imgJson= await img.json();
     
         const image=document.createElement("img");
         div.appendChild(image);
         image.src= json.sprites.front_default;
       
        }catch (error){
             alert("Cant find pokemon")

     }
            
}

let button= document.querySelector("button");

button.onclick=()=>{
    pokemon();
}