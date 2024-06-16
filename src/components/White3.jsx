import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function White3() {

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".c-1", {
      opacity: 0,
      duration: 1.2,
      ease: "circ.inOut",
      stagger: 1,
      scrollTrigger: {
        trigger: ".c-1",
        // markers: true,
        start: "-10% 50%",
        end: "100% 50%",
      },
    });
    gsap.from(".c-2", {
      opacity: 0,
      duration: 1.2,
      ease: "circ.inOut",
      stagger: 1,
      delay:.4,
      scrollTrigger: {
        trigger: ".c-2",
        // markers: true,
        start: "-10% 50%",
        end: "100% 50%",
      },
    });
  });


  return (
    <div data-scroll className="h-screen bg-[#FCF8EB]">
      <div className=" flex justify-center absolute  translate-y-[40vh] right-0 h-full w-[40%] bg-[#f4e6d0]">
        <div className=" c-1 opacity-70 tracking-wide w-[56%] flex flex-col gap-[7vh] ">
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </p>
        </div>
      </div>
      <div className="c-2 absolute translate-y-[53vh]  left-[10%] ">
        <img
          className=" h-[54vh]"
          src="https://static.wixstatic.com/media/c837a6_47ee7d7472cd43799086a66ef34758ea~mv2.jpg/v1/fill/w_733,h_495,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/shutterstock_1626669631%20copy.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default White3;
