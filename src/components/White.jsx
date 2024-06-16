import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function White() {
  gsap.registerPlugin(useGSAP);

  gsap.registerPlugin(ScrollTrigger);
  let tl = gsap.timeline();
  useGSAP(() => {
    gsap.from(".z-1,.z-2", {
      y: 100,
      duration: 2,
      opacity: 0,
      scrollTrigger: {
        trigger: ".z-1,.z-2",
        // markers: true,
        start: "-20% 50%",
        end: "100% 50%",
      },
    });

    gsap.from(".z-3", {
      opacity: 0,
      duration: 1.2,
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".z-1,.z-2",
        // markers: true,
        start: "50% 50%",
        end: "100% 50%",
      },
    });
  });

  return (
    <div data-scroll className="h-screen bg-[#FCF8EB] ">
      <div className="h-screen -translate-y-[11vh] flex justify-evenly">
        <div className=" flex flex-col items-center">
          <img
            className="z-1 h-full"
            src="https://static.wixstatic.com/media/c837a6_d67723961f9b4fcdb31bafe7220e42c6~mv2.jpg/v1/crop/x_897,y_0,w_2665,h_4000/fill/w_613,h_919,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-119494313.jpg"
            alt=""
          />
          <h1 className="z-3  opacity-85 text-[6.5vh] font-medium tracking-tight mt-5">
            Ceremony
          </h1>
          <p className="z-3  mt-5 opacity-85 font-light">
            Saturday, Oct. 21, 4 p.m. St. Mary's Church
          </p>
          <p className="z-3  opacity-85 font-light">
            500 Terry Francine Street, San Francisco
          </p>
        </div>

        <div className=" flex flex-col items-center">
          <img
            className="z-2 h-full"
            src="https://static.wixstatic.com/media/c837a6_e426c5688766440eaa807fabba2622d9~mv2.jpg/v1/fill/w_613,h_919,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/GettyImages-1264870600%20copy.jpg"
            alt=""
          />
          <h1 className="z-3  opacity-85 text-[6.5vh] font-medium tracking-tight mt-5">
            Reception
          </h1>
          <p className="z-3  mt-5 opacity-85 font-light">
            Saturday, Oct. 21, 6 p.m. - 1 a.m. St. Mary's Gardens
          </p>
          <p className=" z-3 opacity-85 font-light">
            500 Terry Francine Street, San Francisco
          </p>
        </div>
      </div>

      <button className=" px-6 py-3 opacity-80 border-black border-[0.1vh] text-[3vh] absolute left-[44%] translate-y-[20vh] hover:opacity-40 tracking-tight font-medium rounded-full ">
        Schedule & RSVP
      </button>
    </div>
  );
}

export default White;
