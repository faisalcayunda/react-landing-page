import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import { useState } from "react";
import Biograph from "./Biograph";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
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

const Business = () =>  {
  const [showBiograph, setShowBiograph] = useState(false);

  return (

  <div>
    <section id="profile" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Kolaborasi Bisnis Anda, <br className="sm:block hidden" /> Sinergi Kami.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        PT Sapta Sinergi menawarkan solusi outsourcing yang inovatif untuk mendorong kemajuan bisnis Anda. Kami percaya kolaborasi adalah kunci keberhasilan, dan kami berdedikasi untuk menyediakan sumber daya manusia yang berkualitas serta layanan yang efisien untuk memenuhi setiap kebutuhan operasional Anda.
        </p>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
      
    </section>
    <div className="text-center my-10"> {/* Center the link and give it some vertical margin */}
        {!showBiograph && (
          <Button onClick={() => setShowBiograph(true)} styles="mt-10" >
            Lihat Profil Perusahaan
          </Button>
        )}
        
        {showBiograph && (
          <>
            <Biograph />
            <Button onClick={() => setShowBiograph(false)} styles="mt-10" >
            Tutup Profil Perusahaan
          </Button>
          </>
        )}
      </div>

  </div>
  
  
)};

export default Business;