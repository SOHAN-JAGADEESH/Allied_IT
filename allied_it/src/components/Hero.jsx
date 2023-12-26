import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
             Book a <span className="text-white">Free</span> Consultation
            <span className="text-white"> Now !</span> 
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Move Your <br className="sm:block hidden" />{" "}
            <span className="text-[#F48023]">Business</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          with Confidence.
        </h1>
        <p className={`${styles.paragraph} text-[#F48023] max-w-[470px] mt-4 mb-4`}>
            We are your trusted IT relocation partner for seamless business transitions
        </p>

        <button className="custom-button" onClick={() => console.log('Button clicked!')}>
          Contact Us
        </button>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
        {/* <Spline scene="https://prod.spline.design/Qk3kIHcKSsYJYvsf/scene.splinecode" /> */}

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>



      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;