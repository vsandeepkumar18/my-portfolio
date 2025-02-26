import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          {/* img */}
          <div className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top"></div>
          {/* text */}
          <div>
            <h2>About Me</h2>
            <h3>I am Sandeep Kumar, a passionate web developer with expertise in **React.js, Next.js, and Tailwind CSS**.
            Currently pursuing **MCA**, I build highly interactive, modern web applications with a focus on
            performance and user experience.</h3>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView?
                    <CountUp start={0} end={7} duration={3} /> : null
                    }
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView?
                    <CountUp start={0} end={3} duration={3} /> : null
                    } k+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />Completed
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {
                    inView?
                    <CountUp start={0} end={7} duration={3} /> : null
                    }
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />Experience
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
