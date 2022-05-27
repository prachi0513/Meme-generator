
import '../styles/Meme.css'
import React, { useState } from 'react';
// import MemeData from "../MemeData"
export default function Meme() {
  
const [meme , setMemes] = useState({
    topText : "",
    bottomText : "",
    image: "https://i.imgflip.com/1c1uej.jpg" 
})
// console.log(meme)

const [allMemes , setAllMemes] = useState();

React.useEffect(()=>{
    async function getMemes(){
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data);
    }
    getMemes()
},[])



   function getMemes(){
    console.log("get meemes");
    
     let data = allMemes.data.memes;
     let ran = Math.floor(Math.random()*data.length);
     let url = data[ran].url;
     console.log(url)
     setMemes(prev=>{
         return{
             ...prev , image : url
         }
     })
   }


    function handleChange(event){
     const {value , name} = event.target;
     
     setMemes(prev=>{
         return {
             ...prev , [name] : value
         }
     })


     }


     function handleSubmit(event){
       event.preventDefault();
     }
   
    return (
        <main className='meme-box'>

            <form className="Meme-head" onSubmit={handleSubmit}>

                <input 
                type="text" 
                placeholder="Top Text" 
                className="toptext" 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input 
                type="text" 
                placeholder="Bottom Text" 
                className="form--inputs bottomtext" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />

                <button 
                className="form--btn" onClick={getMemes}>Get a new meme image
                </button>

               <div>
               <img   className='meme-img' src={meme.image}/>
               <h2 className='meme-txt top'>{meme.topText}</h2>
               <h2 className='meme-txt bottom'>{meme.bottomText}</h2>
               </div>
               
            </form>



        </main>
    )
}