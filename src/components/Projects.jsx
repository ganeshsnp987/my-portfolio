import React,{useEffect} from 'react'
import Sandesh from '../assets/projects/sandeshh.png'
import Gist from '../assets/projects//gist.png'
import Chatbot from '../assets/projects/chatbot.png'
import Ide from '../assets/projects/ide.png'
import ShopEasy from '../assets/projects/shopeasy.png'
import Upscale from '../assets/projects/upscale.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: Sandesh,
      desc: "Sandesh-Chat App",
      demo: "https://sandeshh.netlify.app/",
      code: "https://github.com/dipayansarkar47/Sandesh"
    },
    {
      id: 2,
      src: ShopEasy,
      desc: "Full-Stack ShopKaro",
      demo: "https://shopeasyy.vercel.app/",
      code: "https://github.com/dipayansarkar47/shopeasy"
    },
    {
      id: 3,
      src: Chatbot,
      desc: "AI Chatbot using GPT-4",
      demo: "https://cwbbot.vercel.app/",
      code: "https://github.com/dipayansarkar47/ai-chatbot"
    },
    {
      id: 4,
      src: Ide,
      desc: "Online Code Editor",
      demo: "https://opeditor.vercel.app/",
      code: "https://github.com/dipayansarkar47/online-code-editor"
    },
    {
      id: 5,
      src: Upscale,
      desc: "AI Image Upscaler",
      demo: "https://upscaleai.vercel.app/",
      code: "https://github.com/dipayansarkar47/upscale-ai"
    },
    {
      id: 6,
      src: Gist,
      desc: "Summarize Articles with OpenAI GPT-4",
      demo: "https://gist-ai.vercel.app/",
      code: "https://github.com/dipayansarkar47/Gist.AI-Summarizer"
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
