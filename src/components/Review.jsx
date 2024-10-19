


/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Wanderlust is a well-executed MERN stack project with a user-friendly interface and smooth functionality. The integration of technologies is seamless, providing a great user experience',
    name: 'airem',
    imgSrc: '/images/people-1.jpg',
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: '/images/people-2.jpg',
    company: 'NexaWave'
  },
  {
    content: 'Wanderlust is a well-executed MERN stack project with a user-friendly interface and smooth functionality. The integration of technologies is seamless, providing a great user experience',
    name: 'airem',
    imgSrc: '/images/people-1.jpg',
    company: 'zerodha'
  },
  {
    content: 'QRExpert, built using HTML, CSS, and JavaScript, offers a visually appealing and highly responsive design. The clean and intuitive user interface ensures a smooth experience, while the efficient JavaScript functionality drives the QR code generation seamlessly. Its front-end performance is both fast and reliable',
    name: 'Md Aquib',
    imgSrc: '/images/aquib copy.jpeg',
    company: 'Apna College'
  },
  {
    content: 'Zerodha Clone, built with React.js, features a sleek and interactive user interface that enhances the trading experience. The application efficiently manages stock data and user portfolios, providing real-time updates and insights. Its modular architecture ensures scalability and maintainability, making it a robust solution for stock trading',
    name: 'Najeebur Rahman',
    imgSrc: '/images/najeeb.jpeg',
    company: 'Blue Hills Academy'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: '/images/people-6.jpg',
    company: 'Skyline Digital'
  }
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          What my colleague say
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review