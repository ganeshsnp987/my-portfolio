import React,{useEffect} from 'react'
import Youtube from '../assets/projects/Youtube.png'
import Netflix from '../assets/projects/Netflix.png'
import Hotstar from '../assets/projects/Hotstar.png'
import Reddit from '../assets/projects/Reddit.png'
import Zomato from '../assets/projects/Zomato.png'
import Amazon from '../assets/projects/Amazon.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Youtube,
      desc: "YouTube Clone App",
      demo: "https://youtube-clone-app-virid.vercel.app/",
      code: "https://github.com/ganeshsnp987/Youtube-clone-app.git"
    },
    {
      id: 2,
      src: Netflix,
      desc: "Netflix Clone App",
      demo: "https://netflix-dev-sec-ops-project.vercel.app/",
      code: "https://github.com/ganeshsnp987/Netflix-DevSecOps-Project.git"
    },
    {
      id: 3,
      src: Hotstar,
      desc: "Hotstar Clone App",
      demo: "https://hotstar-app.vercel.app/",
      code: "https://github.com/ganeshsnp987/Hotstar-App.git"
    },
    {
      id: 4,
      src: Reddit,
      desc: "Reddit Clone App",
      demo: "https://reddit-clone-k8s-ingress.vercel.app/",
      code: "https://github.com/ganeshsnp987/reddit-clone-k8s-ingress.git"
    },
    {
      id: 5,
      src: Amazon,
      desc: "Amazon Clone App",
      demo: "https://amazon-clone-app-five.vercel.app/",
      code: "https://github.com/ganeshsnp987/Amazon-clone-app.git"
    },
    {
      id: 6,
      src: Zomato,
      desc: "Zomato Clone App",
      demo: "https://zomato-clone-app-phi.vercel.app/",
      code: "https://github.com/ganeshsnp987/Zomato-Clone-App.git"
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Explore a selection of my projects </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
