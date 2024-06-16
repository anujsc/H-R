import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Nav() {
  // const nav = useRef()
  gsap.registerPlugin(useGSAP);
  let tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".text-1 ,.text-2 ", {
      y: -100,
      opacity: 1,
      delay: 2,
      duration: 1.3,
      ease: "power3.out",
    });
  });
  var t2=gsap.timeline();
  useGSAP(()=>{
    t2.to(".nav", {
      right:0,
      duration:1,
      ease:"bounce.in"
    })
  
    t2.from(".nav h1", {
      x:100,
      opacity:0,
      duration:1,
      ease:"bounce",
      stagger:0.3
    })
  })
  t2.pause()

  return (
    <div>
      <div className="nav full font-semibold tracking-tight font-mono leading-[6vh] z-10 px-[7vh] py-[20vh] text-[5vh] flex flex-col absolute bg-white top-0 -right-[60%] h-[115vh] w-[60vh]">
        <button onClick={()=>t2.reverse()}><img className=" w-[3vh] translate-x-[44vh] -translate-y-[14vh] " src="https://img.icons8.com/?size=100&id=23537&format=png&color=000000" alt="" /></button>
          <h1 className="opacity-70 hover:opacity-100 ">Home</h1>
          <hr className=" h-px bg-gray-600 border-0 " />
          <h1 className="opacity-70 hover:opacity-100 ">Details</h1>
          <hr className=" h-px bg-gray-600 border-0 " />
          <h1 className="opacity-70 hover:opacity-100 ">Where</h1>
          <hr className=" h-px bg-gray-600 border-0 " />
          <h1 className="opacity-70 hover:opacity-100 ">Love Story</h1>
          <hr className=" h-px bg-gray-600 border-0 " />
          <h1 className="opacity-70 hover:opacity-100 ">Instructions</h1>
          <hr className=" h-px bg-gray-600 border-0 " />
        </div>
      <div className="text h-[15vh] w-full bg-[#54472288] flex justify-between items-center ">
        <div className="text-1 flex gap-[8vh] text-black opacity-70 drop-shadow-lg text-[6vh] font-semibold tracking-tighter px-[15vh]  ">
          <h1 className=" hover:scale-[1.1]">H & R</h1>
          <div className="flex h-[6vh] hover:scale-[1.1] translate-y-2 -translate-x-6 ">
            <img
              src="https://img.icons8.com/?size=100&id=6888&format=png&color=000000"
              alt=""
            />
            <img
              className=""
              src="https://img.icons8.com/?size=100&id=6875&format=png&color=000000"
              alt=""
            />
          </div>
        </div>

        <div className="text-2 flex gap-3 px-[5vh]  ">
          <button className=" font-medium text-[2.3vh] px-5 opacity-60 hover:opacity-100 py-2 border-black border-2 rounded-3xl">
            RSVP
          </button>
          <button onClick={()=>t2.play()}>
            <svg
              className="hover:opacity-90 opacity-60 h-[4vh]"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
