
import { BrowserRouter, useLocation } from "react-router-dom";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,

  Routes,
} from "react-router-dom";

import combine from './images/combine.png';
import circle from './images/circle.svg'
import view1 from './images/appview1.png';
import view2 from './images/appview2.png';
import view3 from './images/appview3.png';
import view4 from './images/appview4.png';
import view5 from './images/appview5.png';

import view21 from './images/app2view1.png';
import view22 from './images/app2view2.png';
import view23 from './images/app2view3.png';
import view24 from './images/app2view4.png';
import view25 from './images/app2view5.png';
import view26 from './images/app2view6.png';

import { Redirect } from 'react-router';
import bitme from './images/IMG_5481.PNG';
import './App.css';
import googlecert from './images/googlecert.png';
import cardpic from './images/card.png'
import { useState, useEffect } from "react";
import './More.scss'
import nmilogo from './images/nmilogo.png';
import ham from './images/menu.svg';
import home from './images/home.svg';
import code from './images/code.svg';
import archive from './images/archive.svg';
import github from './images/github.svg';
import linkedin from './images/linkedin.svg';
import mail from './images/mail.svg';
import book from './images/book-open.svg';
import bookmark from  './images/bookmark.svg';
import arrow from './images/arrow-down.svg';
import { Outlet, Link } from "react-router-dom";
import icon from './images/edit-flip-v.svg';
import x from './images/x.svg';
import game from './images/games.svg';
import bot from './images/bot.svg';
import web from './images/website.svg';
import award from './images/awards.svg';
import tan from './images/tanjiro.gif';
import me from './images/me.png';
import dice1 from './images/dice-1.svg';
import dice2 from './images/dice-2.svg';
import dice3 from './images/dice-3.svg';
import codeslash from './images/code-slash.svg'
import chain from './images/link.svg'
import voxblend from './images/ARPVOX.glb';
import { useGLTF , TransformControls } from "@react-three/drei";
import {  Stage, MeshReflectorMaterial } from '@react-three/drei'
import { OrbitControls} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
function Model() {
    const { nodes, materials } = useGLTF(voxblend);
  console.log(materials)
  
    return (
    
        
        <mesh
        geometry={nodes.VoxFileItem0vox.geometry}
        material={materials.palette}
        rotation={[Math.PI / 2, 0, 0]}
      />
     
    );
  }

  function ModelStage() {


    return (
         
  <div id  = "voxmodelCont">
  <Canvas   shadows   camera={{ fov: 45 }}>
        <Suspense fallback={null}>
  
  
            <OrbitControls  minAzimuthAngle = {Math.PI} target = {[0,2.5,0]} enableRotate = {false} enableZoom = {false} />
            <Stage  preset="rembrandt" intensity={  0.4}  shadows={false} environment= "city">
            <Model />
          </Stage>
        </Suspense>
        </Canvas>
  
   </div>
    )
  }
  

const greetings = ["Hello","مرحبا","こんにちは","Привет","Bonjour","मस्ते","안녕하세요","Hola","สวัสดี","你好"];

function Greeting() {

    const [index, setIndex] = useState(0);

    
    useEffect(() => {
        const intervalDelayMilliseconds = greetings.length * 500;
        const interval = setInterval(() => {

            setIndex((prevIndex) =>  {
                return prevIndex + 1 < greetings.length ? prevIndex + 1 : 0;
            }
            )


        },intervalDelayMilliseconds);

        
        return () => clearInterval(interval);
    })



    return (
        <p id = "greetings" >
            {greetings[index]}
        </p>
    );


}

function Header() {
    return (
        <div id = "header">

          


        </div>
    )
}

function Summary () {

    return (
      
        <div id= "sumPage">  
<div id = "summary">

<p id = "pageName">NMI Certificate Journey</p>  



<div id = "sumContainer">

    <div id = "journeyCont">
<p>
Hello, I am Arth Patel. I am a senior Computer Science major at the University of Georgia, currently pursuing the UGA New Media Certificate. Through my journey, 


</p>
<p>
From first learning object-oriented programming to producing
 my first projects, I am eager to express my experiences and  my skillset as I reach the final moments of my certificate journey!

</p>

    </div>

    

</div>


</div>

        </div>
    )

}

function NewMediaIndust(props) {
    return (
        <div id = "industCont">
            <div id = "projectCont">
                <div className = "topicBanner">
        <p>Assessments</p>
        
        </div>
        <div id = "assessmentscont">
            <div>
            <h3>Business Cards</h3>
            <img src= {cardpic}></img>
            <p>I created business cards using Adobe Photoshop. I wanted the card to reflect my background. As a result, I tried to customize it. I used circuits to reflect my interest in Computer Science and the university I attend by using its color scheme. I happened to use these cards at the UGA Career fair in February.
            </p>
            </div>
            <div>
            <h3>Credit Card</h3>
            <p>This assessment was a great learning experience. I became aware of my credit score and how I could improve it and maintain a healthy score. Additionally, I learned of the perks associated with good and bad credit scores.  </p>
            </div>
           <div>
           <h3>Digital Identity</h3>
           <p>I had the chance to browse my online presence. By doing the assessment, I made a mental note to know what I should do about expressing myself online.  </p>
           </div>

            
        
        </div>
        
           
            </div>
      
            </div>
        )
}

function RichMediaProduction(props) {
    return (
       <div className="richMediaCont">

<div className = "topicBanner three">
        <p>Projects</p>
        
        </div>

        <div id = "richMediaProjCont">
     
        <div className = "classproject">
            <h3>NFT Search Query</h3>
            <p>This iOS application interacts with the NFTPort API to allow users added up to 100 NFTs under a particular NFT collection when given a valid contract address, allows users to view specific details about a particular NFT, and allows users to favorite NFTs.</p>
 
                <div className="projInfoCont">
                <p className = "projHeader" >Motivation</p>
               <p> I wanted to take what I've learned about Swift and SwiftUI and create a project that gauges my understanding of them. At the time, NFTs were relatively new to the tech space. There wasn't an iOS application that allowed users to have an experience with NFTs, so I created the NFT Search Query.</p>
                </div>
                   <div className="projInfoCont">
                   <p className = "projHeader">Problems Faced</p>
                   <p>I faced various problems. However by solving each of those problems, I learned in the process. 
                       <ol >
                           <li className="problem">
             
                              <p>  Sharing variables and modifying its value across views. Solved by using the Observable  protocol and @Published property wrapper.</p> 
                                 
                           </li>
                           <li className="problem" >
<p>
Parsing JSON. Solved by using the Codable  protocol and ensuring name and type of variables under the conforming struct matched those of key-values pair in the JSON.
</p>
                              
                           </li>

                       </ol>

                   </p>
                       </div>

                    
              
            <div>
            <img src = {view1}></img>
            <img src = {view2}></img>
            <img src = {view3}></img>
            <img src = {view4}></img>
            <img src = {view5}></img>
            </div>
        </div>

        <div className = "classproject">
            <h3>Pokedex</h3>
            <p>This iOS application interacts with the Pokemon API to allow users to add various pokemon to their view and browse through an extensive list of pokemon.</p>
 
 <div className="projInfoCont">
 <p className = "projHeader" >Motivation</p>
<p> I wanted to hone my knowledge of sharing variables across various views and updating them. I did this by allowing user input and storing those entered values into these variables. Additionally, I wanted to create a responsive application as well. Using the Combine framework, users will see real-time updates about their inputs when typing into the text field. </p>
 </div>
    <div className="projInfoCont">
    <p className = "projHeader" >Problem Faced</p>
    <p>I managed to avoid problems that I faced with the previous project. However, I came across a few.
        <ol >
            <li className="problem">

               <p> I had difficulty understanding how the Combine frame worked and how I could implement it. It was something I'd never used before. Combine consists of using publishers and subscribers. By subscribing to the main thread, I was able to assign new values to published variables under a given condition. Those new values are then used for form validation. Based on what the user inputs in the textfield, the appearance of text below changes- see the fourth image below.</p> 
                  <img id = "combine" src = {combine}></img>
            </li>
           

        </ol>

    </p>
        </div>
            <div>
            <img src = {view21}></img>
            <img src = {view22}></img>
            <img src = {view23}></img>
            <img src = {view24}></img>
            <img src = {view25}></img>
            <img src = {view26}></img>
            </div>
        </div>


        </div>


       </div>
    )
}
function ToggleCourseSlides(props) {


   

    const  getSlideNum = (event) => {
      props.setSlideNum = (event.currentTarget.textContent - 1);
    
        }
     
     
return (






    <div id = "courseSlides">

<label onClick = {getSlideNum} className= "slideCourseButton"><img src = {book}></img><p>1</p></label>
<label onClick = {getSlideNum}  className = "slideCourseButton"><img src = {bookmark}></img><p>2</p></label>
<label onClick = {getSlideNum}    className = "slideCourseButton"><img src = {bookmark}></img><p>3</p></label>
    </div>
   
   
)

}


function Course(props) {

    return (
<div className="course">
<p>{props.title}</p>
<p className = "crn" >{props.crn}</p>

</div>

    )
}
function CourseSum(props) {
    return (
        <div className = "courseSumCont">
        <p>{props.description}</p>
        </div>
    )
}
function CourseHistory () {

    const [active,setActive] = useState(false);

    const toggle = () => {
        setActive(!active);
    }
    
    return (
        <div id = "page" >
           
            <p id = "pageName">Course History</p>  
         
           
<div id = "courses">
<div className={"courseContainer" }>


<ul id = "courseNav">
<li>
<Course title = {"New Media Industries"} crn = {"NMIX 4410"}></Course>
    <CourseSum description = {"New Media Industries is a course that has helped me prepare for the professional environment that lies outside of the university setting. I had the opportunity to gain new insights into how to equip and maintain attractive skillsets as a job-seeking individual from presentations of career professionals. Overmore, I had a chance to network with them. The course also assigned assessments that improved my skill set, technical and soft skills, and awareness of what qualities and general ideas I should consider as an adult outside of college."}></CourseSum>
    <NewMediaIndust></NewMediaIndust>
</li>
<li>
    <Course title = {"Software Development"} crn = {"CSCI 1302"}></Course>
</li>
<li>
<Course title = {"Introduction to Programming"} crn = {"CSCI 1301"}></Course>
    

</li>
<li>
    
    <Course title = {"Rich Media Production"} crn = {"NMIX 4030"}></Course>
    <CourseSum description = {"Rich Media Production is a course that introduced me to iOS application development. Through various lessons and hands-on practices, I honed my knowledge of Swift and its framework SwiftUI. From creating static single-view applications, I can create multi-view iOS applications that share information across multiple views, allow for user input and interaction, and interact with external sources, such as APIs."}></CourseSum>
    <RichMediaProduction></RichMediaProduction>
</li>

</ul>

</div>



</div>



        </div>
    )

}


function ProjContent(props) {

    var index = 1;

   
    var firstSlidesContent = [ {title: "Crypto Trading Bot", text : " (In-progress) ", picsrc: bot, link: "https://github.com/patelarth0311/CryptoTradingBot", linkpic:  codeslash, id: '123'},{title: "Demon Slayer Pac-Man", text: "A personal rendition of Pac-Man inspire by the anime Kimetsu No Yaiba made with JavaFx ", picsrc: tan, link: "https://github.com/patelarth0311/DemonSlayerPacMan", linkpic: codeslash, id: '124'}
    , {title: "Portfolio Website", text: "A portfolio website written in Javascript, using React.",picsrc: me,  link: "https://arthpatel.dev/", linkpic:  chain, id: '125'} ]



    if (props.cardNum !== undefined && props.cardNum != 0) {
        index = props.cardNum - 1
        
    }

   



var secondSlidesContent = [{title:"Motivation", text: "", id: "1"},{title:"Motivation", text: "I wanted this project to serve as a visual checkpoint of the growth in my technical skillset soon after switching to a CS major. Additionally, I wanted to express my creavity as well while having the project encapsulate what I've learned during the semester.",id: "2"},{title:"Motivation", text: "I wanted to create a digital resume that contains a catalog of my projects and my skillsets while wanting to improve my web-developing skills. Using HTML, CSS, Javascript and its library React, I created this portfolio website.",id: "23"}]
    
var thirdSlidesContent = [{title:"Implementation", text: "", id: "120"},{title:"Implementation", text: "The project was coded using the library JavaFx. As a result, I was able to create graphic user interface, allowing user interaction. By using the topics covered in CSCI1302 - from principles of Java to using its libraries,  I was able to craft this project. ",id: "199"},{title:"Implementation", text: "Initially, I used pure HTML and CSS to develop my website. After learning Javascript, I enabled my website to become responsive to user interaction. With React, I revamped the entire construction of the website. Powerful components of react such as callback, useState, and more helped with code conciseness.",id: "149"}]

 var slidesContent = [firstSlidesContent[index],secondSlidesContent[index],thirdSlidesContent[index]]

    
    const slideContent = [slidesContent[props.slideNum]]



    return (
     

 <div   >

      <> 
{slideContent.map(({id, text, picsrc, title, link, linkpic}) => (
<div key = {id} >

{ props.slideNum == 0 ? <div className = "slideContent" >  <p  id = "projTitle">{title} </p>   <img id = "img" src = {picsrc}></img><p id = "info">{text} </p> <a href = {link} target="_blank" rel="noopener noreferrer" ><img id = "codeslash" src = {linkpic}></img></a>  </div> : 
props.slideNum == 1 ? <div> <p  id = "projTitle">{title} </p>   <p id = "info2">{text} </p> </div> :
<div> <p  id = "projTitle">{title} </p>   <img id = "img" src = {picsrc}></img><p id = "info2">{text} </p> </div>  }

</div>
))}
      </>



<ToggleSlides slideNum = {props.slideNum}  setSlideNum = {props.setSlideNum}></ToggleSlides>

     </div>


    );



}

function ToggleSlides(props) {


   

    const  getSlideNum = (event) => {
        
     props.setSlideNum(event.currentTarget.textContent - 1);
    
        }
     
     
return (
    <div id = "toggleCont">

<label onClick = {getSlideNum} className="slideButton"><img src = {dice1}></img><p>1</p></label>
<label onClick = {getSlideNum}  className = "slideButton"><img src = {dice2}></img><p>2</p></label>
<label onClick = {getSlideNum}    className = "slideButton"><img src = {dice3}></img><p>3</p></label>
    </div>
)

}







function Project () {

    const [active,setActive] = useState(false);

    const [flip,setFlip] = useState(false);

    

    const [cardNum,setCardNum] = useState(0);

    const [slideNum,setSlideNum] = useState(0)

  

    function flipCard() {
        setCardNum(0);
        setFlip(!flip);
     
    }

   

  


 
    
     const  toggleCard = (event) => {
       setFlip(false);
                setCardNum(event.currentTarget.textContent);
                setSlideNum(0)
                setActive(false);
       }
    
    


    return (
        <div id = "pageProj" >
<div id = "projectsCont"   >
<div
className={"proj first "}>

<p id = "cardTitle">Projects</p>



<label className="buttonFirst" onClick = {toggleCard } ><img src = {bot}></img><p >1</p></label>
<label className="buttonFirst"  onClick = {toggleCard } ><img src = {game}></img><p >2</p></label>
<label className="buttonFirst"  onClick = {toggleCard }  ><img src = {web}></img><p >3</p></label>



<label id="button2" onClick = {flipCard} >
<img className = {"icon " + (flip ? "flip" : null)} 
    src = {icon}></img></label>


</div>

<div className={"proj " + (cardNum  == 1 ? "showCard" : null)}>


{cardNum == 1 ? <ProjContent  slideNum = {slideNum}  setSlideNum = {setSlideNum} cardNum = {cardNum} setCardNum = {setCardNum}></ProjContent> : null}


</div>




<div className={"proj " + (cardNum  == 2 ? "showCard" : null)}>

    {cardNum == 2 ?<ProjContent slideNum = {slideNum}  setSlideNum = {setSlideNum}  cardNum = {cardNum} setCardNum = {setCardNum} ></ProjContent> : null}


</div>

<div className={"proj " + (cardNum  == 3 ? "showCard" : null)}>

{cardNum == 3 ?<ProjContent  slideNum = {slideNum}  setSlideNum = {setSlideNum}  cardNum = {cardNum} setCardNum = {setCardNum}></ProjContent> : null } 

</div>


</div>
</div>




    )

}



function Footer () {


return (

    <div id = "footer">

        <div id = "navContents">
            <div id = "home">
                <img src = {home}></img>
            <p className='category'>Home</p>
           
            <Link to = "/nmc">NMI Journey </Link>

           
               

            </div>
            <div id = "classHistory">
            <img src = {archive}></img>
            <p className='category'>Course History</p>
            <Link  to = "/nmc/history">CSCI 1301</Link >
                <Link  to = "/nmc/history">CSCI 1302</Link >
                <Link to = "/nmc/history">NMIX 4210</Link>
                <Link  to = "/nmc/history">NMIX 4030</Link >
                

            </div>
            <div id = "projects">
            <img src = {code}></img>
            <p className='category'>Project</p>
            <Link  to = "/nmc/project">DS Pac-Man</Link >
            <Link  to = "/nmc/project">Portfolio Website</Link >
            <Link  to = "/nmc/project">Crypto Wallet</Link >
              
            </div>
        </div> 

        <div id = "more">
        <div id = "connect">
        <a href = "https://github.com/patelarth0311" target="_blank" rel="noopener noreferrer" >  <img src = {github}></img> </a>
        <a href = "https://www.linkedin.com/in/arth-patel-343bb51b3/" target="_blank" rel="noopener noreferrer">   <img src = {linkedin}></img> </a>
            <p className='category'>Connect</p>
        </div>
            <div id = "contact">
            <a href="mailto:patelarth0311@gmail.com"> <img src = {mail}></img></a>
            <p className='category'>Contact</p>
            </div>
        </div>

    </div>
)



}
function Nav() {
    
    const [active,setActive]  = useState(false);

    const toggle = () => {
        setActive(!active);
    }
    return (
        <nav >

<input type="checkbox" href="#" className="nav-open" name="nav-open" id="nav-open"/>
<label onClick={toggle} className = "nav-button" htmlFor = "nav-open">
<img className = "navpics" src = {!active ? ham : x}></img>
</label>


<Link className = {"nav-item " + (active ? "show": "hide")}  to ="/nmc">
<img className = "navpics" src = {home}></img>
</Link>


<Link className = {"nav-item " + (active ? "show": "hide")} to = "/nmc/history">
<img className = "navpics" src = {archive}></img>
</Link >


<Link  className = {"nav-item " + (active ? "show": "hide")} to = "/nmc/project">
<img className = "navpics" src = {code}></img>
</Link >


</nav>
    )
}




function Body() { 

    return (
<div id = "body" >
<Header></Header>
<BrowserRouter>
<Nav></Nav>
<Routes>
<Route exact path = "/nmc" element = {<Summary/>}></Route>
<Route path = "/nmc/history" element = {<CourseHistory/>}></Route>
<Route path = "/nmc/project" element = {<Project/>}></Route>
<Route exact path = "*" element = {<Summary/>}></Route>
</Routes>

<Footer></Footer>
</BrowserRouter>
</div>
    );

    
}




export default Body;