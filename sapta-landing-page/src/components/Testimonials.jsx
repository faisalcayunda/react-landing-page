import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Apa Kata Mereka <br className="sm:block hidden" /> Tentang Kami
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
        PT. Sapta Sinergi adalah pilihan terpercaya bagi perusahaan yang membutuhkan layanan outsourcing berkualitas tinggi. Dengan jangkauan layanan yang luas, kami memungkinkan bisnis Anda untuk berkembang dan menjangkau puncak kesuksesan, tidak terbatas oleh batasan geografis.
        </p>
      </div>
    </div>

    {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div> */}
  </section>
);

export default Testimonials;