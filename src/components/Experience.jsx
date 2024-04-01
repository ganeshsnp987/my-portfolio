import React, { useEffect } from 'react'
import Git from '../assets/experience/Git.png'
import docker from '../assets/experience/Docker.png'
import jenkins from '../assets/experience/Jenkins.png'
import kubernetes from '../assets/experience/Kubernetes.png'
import ansible from '../assets/experience/Ansible.png'
import terraform from '../assets/experience/Terraform.png'
import prometheus from '../assets/experience/Prometheus.png'
import grafana from '../assets/experience/Grafana.png'
import python from '../assets/experience/Python.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: Git,
            title: 'Git-Github',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            scr: Docker,
            title: 'Docker',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            scr: Jenkins,
            title: 'Jenkins',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            scr: Kubernetes,
            title: 'Kubernetes',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            scr: Ansible,
            title: 'Ansible',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            scr: Terraform,
            title: 'Terraform',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            scr: Prometheus,
            title: 'Prometheus',
            style: 'shadow-cyan-800'
        },
        {
            id: 8,
            scr: Grafana,
            title: 'Grafana',
            style: 'shadow-yellow-800'
        },
        {
            id: 9,
            scr: Python,
            title: 'Python',
            style: 'shadow-blue-400'
        }
    ]

    return (
        <div name="skills" className='bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full'>
            <div className='max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Skills</p>
                    <p className='py-6'>These are the Devops technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience
