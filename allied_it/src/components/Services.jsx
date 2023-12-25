import { services } from "../constants";
import styles, { layout } from "../style";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== services.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Services = () => (
    <section >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="flex-1 font-poppins font-regular ss:text-[52px] text-[32px] text-orange ss:leading-[80.8px] leading-[55px]">
          Services We Offer
        </h1>
        <p className="text-white text-[20px]">
          Explore the specialized services provided by Allied IT to streamline your IT move.
        </p>
      </div>
  
      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <FeatureCard key={service.id} {...service} index={index} />
        ))}
      </div>
    </section>
  );
  
  export default Services;