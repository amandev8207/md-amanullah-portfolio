

/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/Wanderlust Project.png',
    title: 'Full stack Peer-to-peer lodging marketplace platform',
    tags: ['API', 'MVC', 'Development'],
    projectLink: 'https://wanderlust-xd3b.onrender.com/listings'
  },
  {
    imgSrc: '/images/QRexpart.png',
    title: 'QRXpert User Input: Users can input any text or URL to generate a QR code.',
    tags: ['API'],
    projectLink: 'https://qrxpert-2.onrender.com/'
  },
  // {
  //   imgSrc: '/images/project-3.jpg',
  //   title: 'Recipe app',
  //   tags: ['Development', 'API'],
  //   projectLink: ''
  // },
  // {
  //   imgSrc: '/images/project-4.jpg',
  //   title: 'Real state website',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: ''
  // },
  // {
  //   imgSrc: '/images/project-5.jpg',
  //   title: 'eCommerce website',
  //   tags: ['eCommerce', 'Development'],
  //   projectLink: ''
  // },
  // {
  //   imgSrc: '/images/project-6.jpg',
  //   title: 'vCard Personal portfolio',
  //   tags: ['Web-design', 'Development'],
  //   projectLink: ''
  // },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work