import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    I'm Ganesh Sanap, a dedicated DevOps Engineer with a wealth of experience spanning a wide range of DevOps tools and technologies. I bring proficiency in leading-edge CI/CD tools like Jenkins, GitLab CI/CD, and GitHub Actions, coupled with adeptness in version control systems such as Git. My expertise extends to configuration and infrastructure management tools like Ansible and Terraform, enabling me to automate infrastructure provisioning seamlessly. I excel in containerization and orchestration platforms like Docker and Kubernetes, and I'm well-versed in Infrastructure as Code (IaC) tools such as Terraform and AWS CloudFormation. My skills encompass monitoring and logging solutions like Prometheus, Grafana, and ELK Stack, as well as cloud platforms including AWS. With a proactive mindset and a passion for continuous improvement, I'm committed to enhancing the efficiency, reliability, and scalability of software development and delivery processes. I'm eager to leverage my expertise to drive innovation and success within any DevOps team. staying up to date with the latest trends and technologies in the Devops field.
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                    In a constant pursuit of sharing knowledge and fostering growth, I've organized numerous technical workshops, imparting valuable insights on technologies like Python, Android, and Google Cloud to aspiring learners. With a commitment to personal development and a drive for making a positive impact within the tech community.
                </p>
                {/* <br />
                <p data-aos="fade-in" data-aos-duration="500" className='text-xl mt-5 ease-in  fade-in'>
                    I've worked for many projects for my clients as well as my personal projects. I also contributed for the GDSC RKMGEC web page. I have a Instagram page (@codewithbiki) where I create content for those who are just starting with programming and have more that 70k followers. I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
                </p> */}
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="https://drive.google.com/file/d/1l6xZnxxJfAReNyuJx54u8zYzM1KFyP0e/view?usp=sharing" download>Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About
