import { useEffect, useState } from 'react'
import {
  faJava,
  faGitAlt,
  faPython,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Hi, my name is Hassan, a final-year Computer Science student with a strong passion for software development 
          and problem-solving. Over the years, I have honed my technical skills through hands-on experience and 
          a year-long placement at DailyPay, where I contributed to backend development, bug fixes, and feature 
          implementation. My expertise lies in Java, Spring Boot, React, and deployment automation using CI/CD pipelines 
          and tools like Terraform. I take pride in building robust, efficient systems that deliver value to users, 
          and I am always eager to learn and grow in the field of software engineering.
          </p>
          <p align="LEFT">
          Beyond academics and work experience, I have developed a range of personal projects, currently working on a Quran Tester 
          application and a physiotherapy platform tailored to individual recovery processes. These projects reflect 
          my ability to take an idea from concept to execution, combining technical know-how with user-focused design. 
          I also created an A-level revision website and a Django-based blog platform, which taught me the importance 
          of scalable architecture and intuitive interfaces. With a keen interest in system design, I am constantly exploring 
          best practices and debating complex concepts like exception handling to refine my approach.
          </p>
          <p>
          Outside of the tech world, I am a competitive athlete in Brazilian Jiu-Jitsu and wrestling, recently placing 3rd at 
          the Sheffield Pro competition. I also played Division 2 basketball for the Birmingham Bucks, achieving second place 
          in regionals. My leadership experiences, such as raising £8K for a sand dam in Somalia as president of my universitys 
          Somali Society, highlight my dedication, teamwork, and ability to balance multiple responsibilities. Whether it is on the 
          mat, the court, or behind a computer, I strive to meet challenges with determination and a collaborative spirit.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, hard wokring, a sports fanatic, chess enthusiast, and
            tech-obsessed!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faPython} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
