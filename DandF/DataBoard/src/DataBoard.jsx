import React, {useState, useEffect} from 'react'

//DataBoard

import img1 from "./img/Crawler.webp"
import img2 from "./img/Goblin_Golem.webp"
import img3 from "./img/Fleetfoot.webp"
import img4 from "./img/Queen_Teresis.webp"
import img5 from "./img/Borgo.webp"

//DataBoard Videos

import crawlervd from "./video/Crawler-Walk.mp4"
import goblingolemvd from "./video/Goblin_Golem_Walk.mp4"
import fleetfootvd from "./video/Fleetfoot_Walk.mp4"
import queenteresisvd from "./video/Queen_Teresis_Walk.mp4"
import borgovd from "./video/Borgo_Walk.mp4"
//Interaction

import PlayB from "./icon/PlayIC.png"
import SearchIC from "./icon/SearchIC.png"
import DetailsB from "./icon/Details.png"

//DataBoard Background

import databoardbg from "./img/DataBoard-BG.png"

//Crawler ATKS

import crawleratk1 from "./video/Crawler ATK1.mp4"
import crawleratk2 from "./video/Crawler ATK2.mp4"
import crawleratk3 from "./video/Crawler ATK3.mp4"

//Goblin_Golem_ATKS

import goblingolematk1 from "./video/Goblin Golem ATK1.mp4"



function DataBoard (){

    /* MoveSet Crawler */

/* const Crawleratks = [

    {
        id:1,
        atk:"Crawler Right Claw ATK",
        atkvd: crawleratk1
        
    },
    {
        id:2,
        atk: "Crawler Right Claw ATK",
        atkvd: crawleratk2
    },
    {
        id:3,
        atk: "Crawler Left Claw ATK",
        atkvd: crawleratk3
    },
    {
        id:4,
        atk: "Crawler Tail ATK"
    },
    {
        id:5,
        atk: "Crawler Head ATK"
    },
    {
        id:6,
        atk: "Crawler Dual Claw Dash ATK"
    },
    {
        id:7,
        atk: "Crawler Dual Starting Right Claw ATK"
    },
    {
        id:8,
        atk: "Crawler Dual Starting Left Claw ATK"
    }
] */


    const slides = [

    {   
        id:1,
        title: "Crawler",
        type: "Boss",
        imgURL: img1,
        videoURL:crawlervd,
        Known_Weak_Points: "Legs",
        Known_Attacks: "Bliding mists and stabbing claws.",
        Location: "Broken Mast",
        atks:[
            {
                id:1,
                atk:"Dash Claw ATK",
                atkvd: crawleratk1
            },
            {   
                id:2,
                atk: "Right Claw ATK",
                atkvd: crawleratk2
            },
            {
                id:3,
                atk: "Left Claw ATK",
                atkvd: crawleratk3
            }
        ]
        
    },
    {
        id:2,
        title: "Goblin Golem",
        type: "Boss",
        imgURL: img2,
        videoURL:goblingolemvd,
        Known_Weak_Points: "Powered Gem Stone",
        Known_Attacks: "Grappling_ throws and jumping attacks",
        Location: "Rengot Village",
        atks:[
            {
                id:4,
                atk:"Right Hand Punch ATK",
                atkvd: goblingolematk1
            },
            /* {   
                id:2,
                atk: "Crawler Right Claw ATK",
                atkvd: crawleratk2
            },
            {
                id:3,
                atk: "Crawler Left Claw ATK",
                atkvd: crawleratk3
            } */
        ]
    },
    /* {
        id:3,
        title: "Fleetfoot",
        type: "Boss",
        imgURL: img3,
        videoURL:fleetfootvd,
        Known_Weak_Points: "Tails",
        Known_Attacks: "Claw Swipers, Deadly Pounces and the ability to summon a pack of wolves.",
        Location: "Teress Plain",
        MoveSet:""
    },
    {
        id:4,
        title: "Queen Teresis",
        type: "Boss",
        imgURL: img4,
        videoURL:queenteresisvd,
        Known_Weak_Points: "Fangs",
        Known_Attacks: "Poisonous Bites and Paralyzing Attacks",
        Location: "Teress Plain",
        MoveSet:""
    },
    {
        id:5,
        title: "Borgo",
        type: "Boss",
        imgURL: img5,
        videoURL:borgovd,
        Known_Weak_Points: "Backpack",
        Known_Attacks: "Charging attacks and club smashes",
        Location: "Rengot Village",
        MoveSet:""
        
    } */

]

const [slide, setSlide] = useState(0)
const [details, setDetails] = useState(false)
const [moveset, setMoveSet] = useState(false)
const [move, setMove] = useState(0)
 /* useEffect (()=>{

      const interval = setInterval(() => {
          setSlide (prev => (prev + 1) % slides.length)
      }, 3000);
      return (() => clearInterval(interval))
  }, []) */

  /* useEffect(()=>{

    const interval = setInterval(() => {

        setMove(prev => (prev + 1) % 2)
    },3000)
    return (() => clearInterval(interval))
  },[]) */


function buttonslide (){
    setSlide(prev =>(prev + 1) % slides.length)
}
function buttonnextatk (){
    setMove(prev => (prev + 1) % 2)
    if(!slides[atks].atkvd) setMove(0)
}
function buttonbackatk(){
    setMove(prev => (prev + 1) % 2)
    if(!slides[atks].atkvd) setMove(0)
}





    return (

        <>
            <section className="w-[100%] h-[100vh] flex flex-col justify-center items-center">
                {/* <div className='w-[100%] flex justify-around items-start bg-[black] border-[2px]'>
                        <input className='p-2 rounded-3xl' type="search" name="" id="" />
                </div> */}
                <main className='w-[100%] h-[60vh] p-1 flex justify-around items-center bg-[#130A01] border border-[black]'>
                    <div className='border-[2px] w-[55%] h-[60vh] flex flex-col justify-around items-center'>
                         {/* <img className="w-[300px]"  src={slides[slide].imgURL} alt="" /> */}
                         <video className='w-[350px]' autoPlay loop src={slides[slide].videoURL}></video>
                         <video className='w-[350px]' autoPlay loop src={slides[move].atks[move].atkvd}></video>
                    </div>

                     <div className='p-1 border-[2px] w-[25%] h-[50vh] flex flex-col justify-around items-center'>
                                                
                        <p className='text-center text-[13px] text-[#9C7934] font-bold'>Name: {slides[slide].title}</p>
                        <p className='text-center text-[13px] text-[#9C7934] font-bold'>Type: {slides[slide].type}</p>
                        <p className='text-center text-[13px] text-[#9C7934] font-bold'>Known Weak Points: {slides[slide].Known_Weak_Points}</p>
                        <p className='text-center text-[13px] text-[#9C7934] font-bold'>Known Attacks: {slides[slide].Known_Attacks}</p>
                        <p className='text-center text-[13px] text-[#9C7934] font-bold'>Location: {slides[slide].Location}</p>
                    </div>
                    <div className='p-1 border-[2px] w-[25%] h-[50vh] flex flex-col justify-around items-center
                    
                    '>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK1: {slides[slide].atks[0].atk}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK2: {slides[slide].atks[1].atk}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK3: {slides[slide].atks[2].atk}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK4: {slides[slide].atk4}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK5: {slides[slide].atk5}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK6: {slides[slide].atk6}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK7: {slides[slide].atk7}</button>
                        <button className='text-center text-[13px] text-[#9C7934] font-bold'>ATK8: {slides[slide].atk8}</button>
                    </div>
                </main>
                <div className='w-[100%] flex justify-around'>
                    <button className="text-[50px] border-[5px] p-3 pr-9 pl-9 mt-2 text-center rounded-2xl border-[black]" onClick={buttonbackatk}>Back</button>
                    <button className="text-[50px] border-[5px] p-3 pr-9 pl-9 mt-2 text-center rounded-2xl border-[black]" onClick={buttonslide}>Click</button>
                    <button className="text-[50px] border-[5px] p-3 pr-9 pl-9 mt-2 text-center rounded-2xl border-[black]" onClick={buttonnextatk}>Next</button>
                </div>
                <div className='w-[100%] flex justify-around'>
                            
                </div>
            </section>
        </>

    )

}

export default DataBoard