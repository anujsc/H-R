import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function White4() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  let tml = gsap.timeline();
  
  useGSAP(({}) => {
    
    gsap.from(".d-1",{
      x:-200,
      opacity:0,
      duration:1.5,
      ease:'back.out',
      scrollTrigger: {
        trigger: ".d-1",
        // markers: true,
        start: "-140% 50%",
        end: "100% 50%",
      },
    })
    gsap.from(".d-2",{
      x:200,
      opacity:0,
      duration:1.5,
      ease:'back.out',
      scrollTrigger: {
        trigger: ".d-2",
        // markers: true,
        start: "-330% 60%",
        end: "100% 50%",
      },
    })

    gsap.from(".d-3",{
      opacity:0,
      duration:1,
      x:-200,
      stagger:true,
      scrollTrigger: {
        trigger: ".d-3",
        // markers: true,
        start: "-500% 70%",
        end: "100% 50%",
      },
    })
    gsap.from(".d-4",{
      opacity:0,
      duration:1,
      x:200,
      stagger:true,
      scrollTrigger: {
        trigger: ".d-4",
        // markers: true,
        start: "-500% 70%",
        end: "100% 50%",
      },
    })
   
    
  });


  return (
    <div data-scroll className="h-screen  bg-[#FCF8EB]">
      <div className=" flex flex-col justify-center items-center translate-y-[40vh] h-[60%] bg-[#e0a973ea]">
        <h1  className="d-1 text-[7vh] font-semibold text-[white]">
          Wedding Colors
        </h1>
        <p className="d-2 w-[30%] mt-4 font-light capitalize   ">
          I'm a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
        <div className=" flex gap-5 mt-6">
          <button className="d-3 px-5 py-5 bg-[#f4e6d0] rounded-full"></button>
          <button className="d-3 px-5 py-5 bg-[#ac5e23] rounded-full"></button>
          <button className="d-4 px-5 py-5 bg-[#f0c7c4] rounded-full"></button>
          <button className="d-4 px-5 py-5 bg-[#697247] rounded-full"></button>
        </div>
      </div>
    </div>
  );
}

export default White4;
