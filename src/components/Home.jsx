import React from "react";
import Nav from "./Nav";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Link } from "react-router-dom";

function Home() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".t-1 H1", {
      x: -200,
      duration: 1.2,
      delay: 3,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });

    tl.from(".t-2", {
      opacity: 0,
      duration: 1,
      x: 200,
    });
  });

  
  

  

  return (
    <>
      <Nav />

      <div
        className=" h-screen bg-[url(https://images.unsplash.com/photo-1597861405049-0b011428568f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center w-full"
      >
        
        <div
          className="t-1  hover:scale-[1.1] opacity-65 hover:opacity-100 absolute left-[10%] top-[30%] text-[15vh] leading-[13vh] text-center font-bold tracking-tighter "
        >
          <h1 className="text-white  ">SWATHI</h1>
          <h1 className="text-black ">& HARI</h1>
        </div>

        <div className="t-2 absolute left-[54%] top-[37%] text-[2.6vh] capitalize tracking-tighter font-semibold flex justify-evenly items-center h-[15vh] w-[35%] rounded-full bg-[#d8bd7141] ">
          <div className=" opacity-60 hover:opacity-100 hover:scale-[1.05]">
            <p>Friday to Sunday,</p>
            <p>Oct. 20-22, 2035</p>
          </div>

          <div className=" -translate-x-1 absolute opacity-60 rotate-90 ">
            _________
          </div>

          <div className=" opacity-60 hover:opacity-100 hover:scale-[1.05]">
            <p>500 Terry Francine St.</p>
            <p>San Francisco</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
