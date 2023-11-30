import { useState } from 'react';
import styles from "../style";
import { companyDetails } from '../constants';

const Biograph = () => {
  
    return (
      <section id='about'  className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
        <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
          <h2 className={`${styles.heading2} mr-12 w-[50%]`}>Sapta Sinergi Sourcindo</h2>
          <h2 className={`${styles.heading2} mr-12 w-[50%]`}>Sapta Sinergi Berkarya</h2>
          <div className="w-full md:mt-0 mt-6 ">
            <p className={`${styles.paragraph} text-left max-w-[470px] ml-12`}>
            <span className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 ">VISI</span> <br className="sm:block hidden" /> Menjadi Mitra Terbaik dalam bisnis
              outsorching untuk klien dan karyawan kami
              sendiri
            </p>
            <p className={`${styles.paragraph} text-left max-w-[470px] ml-12 mt-6`}>
            <span className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1 ">MISI</span> <br className="sm:block hidden" /> Menjadi Mitra Terbaik dalam bisnis
            Memfasilitasi kebutuhan pelanggan dan menjaga kelangsungan bisnis
            </p>
          </div>
        </div>
       
        <p className={`${styles.paragraph} text-left mt-6`}>Perusahaaan holding company yang berdiri di tahun 2023 dengan nama PT Sapta Sineri Sourcindo,  seiring dengan perkembangan nya mulai didirikan anak perusahan yang di beri nama PT Sapta Sinergi Berkarya untuk mewadahi client diluar perbankan , saat ini perusahan kami di beri nama Sapta Sinergi.</p>
      </section>
    );
  }

export default Biograph;
