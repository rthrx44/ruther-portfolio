import React from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import Ruther01 from '../../components/assets/Ruther01.png'
import Ruther02 from '../../components/assets/Ruther02.png'
import { HButton } from '../../components/buttons/Buttons'
import { Logo, Screenshot } from '../../components/utils/Index'


function Landing({skillIcon, covape}) {
  return (
    <div>
      <Navbar/>
      <section className='hero_banner container'>
        <img className='hero_img' src={Ruther01} alt="Ruther Dio Profile" />
        <h2 className="hero_subtitle">Hi, I'm Ruther 👋</h2>
        <h1 className="hero_title">
          FRONT-END <br />
          WEB DEVELOPER.
        </h1>
        <p className="hero_description">
          Specialized in building stunning pixel-perfect interactive websites.
        </p>
        <a href="#contact"><HButton/></a>
      </section>
      <section id='about' className='about container section'>
        <div className='about_content'>
          <div className="about_me">
            <div className='description-con desc'>
              <h3 className='about_title'>About Me</h3>
              <p className='description'>
                Hi again! I'm Ruther Dio, a <strong>Front-end Web Developer</strong> based in <b>Bulacan, Philippines.</b>
              </p>
              <p className='description'>
                As an aspiring junior front-end web developer, I have an impressive set of skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and other technologies. <br/>I design, build, and maintain responsive websites that offer a smooth user experience.
              </p>
              <p className='description'>
              I am capable of working with others to create a website. <br/>What I do whenever I'm not coding, I tend to watch movies or anime and read manga.
              </p>
            </div>
          </div>
          <div className='about_img-con img'>
            <img className='about_img' src={Ruther02} alt="Ruther Dio Profile" />
          </div>
        </div>
      </section>
      <section className='skills container section'>
        <h4 className='about_title'>Technologies</h4>
        <div className='tech'>
          {skillIcon.map((logo, index) => {
            return <Logo logo={logo} key={index}/>
          })}
        </div>
      </section>
      <section id='projects' className='featured container section'>
        <h5 className='featured_text'>Featured Project</h5>
        <h4 className='about_title'>Covape-19 Garage</h4>
        <p className='description'>
        Is a vape shop website focusing on buying vape products, <br/>such as electronic vape, disposable vape, and vape juice.
        </p>
        <p className='description'>
        A fully functional and responsive website for vapeshop. <br/>Includes a Landing page, Sign In / Sign up, Dashboard, Product Information, and Cart.
        </p>
        <h5>Tech Stach Use</h5>
        <p className='description'>
          - HTML<br/>
          - CSS<br/>
          - JavaScript<br/>
          - React<br/>
          - SwiperJS<br/>

        </p>
        <div className='screenshot-con'>
          {covape.map((img, index) => {
            return <Screenshot images={img} key={index}/>
          })}
        </div>
      </section>
      <section className='projects container section'>
          Projects
      </section>
    </div>
  )
}

export default Landing