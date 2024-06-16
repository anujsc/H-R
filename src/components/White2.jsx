import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function White2() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".B-1", {
      opacity: 0,
      duration: 1.2,
      ease: "circ.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".B-1",
        // markers: true,
        start: "-50% 50%",
        end: "100% 50%",
      },
    });

    gsap.from(".B-2", {
      opacity: 0,
      duration: 1.2,
      delay: 1,
      ease: "circ.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".B-2",
        // markers: true,
        start: "-50% 50%",
        end: "100% 50%",
      },
    });
  });

  return (
    <div data-scroll className=" h-screen bg-[#FCF8EB]">
      <div className=" B-1 tracking-wider opacity-70 absolute translate-y-[60vh]  left-[15%] ">
        <h1 className=" text-[10vh] leading-[12vh] font-semibold capitalize w-[30%]">
          span Love Story
        </h1>
        <p className="mt-5 w-[40%] text-[3.8vh]">
          We met on a rainy day at a local flea market. As we talked and
          wandered, we found that we didn't want to go our separate ways. Before
          we knew it, the whole day had passed.
        </p>
      </div>

      <div className="absolute  translate-y-[40vh] right-0 flex items-center justify-center  h-full w-[40%] bg-[#f4e6d0]">
        <div className="B-2 h-[60%] w-[60%] ">
          <img
            className=" "
            src="https://static.wixstatic.com/media/c837a6_75dd49fc463a479ea0fedc3e1745479b~mv2.jpg/v1/crop/x_1135,y_0,w_3491,h_3840/fill/w_488,h_536,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_402286108%20copy.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default White2;
