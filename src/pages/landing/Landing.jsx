import React, { useEffect } from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import Ruther01 from '../../components/assets/Ruther01.png'
import Ruther02 from '../../components/assets/Ruther02.png'
import Covape_Landing from '../../components/assets/Covape_Landing.jpeg'
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { HButton, NButton } from '../../components/buttons/Buttons'
import { Logo, Screenshot } from '../../components/utils/Index'



function Landing({skillIcon, covape}) {
  useEffect(() => {
    const images = document.querySelectorAll(".lazy");

    function preloadImage (img) {
      const src = img.getAttribute('data-src');
      if (!src) {
        return
      }
      img.src = src
    }

    const observer = new IntersectionObserver((entries, observer) => {
      console.log("entries", entries);
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return
        } else {
          preloadImage(entry.target);
          observer.unobserve(entry.target);
          entry.target.classList.remove('loading')
          entry.target.classList.add('loaded')
        }
      });
    });

    images.forEach(image => (observer.observe(image)))
  }, []);

  return (
    <>
    <main>
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
                As an aspiring front-end web developer, I have an impressive set of skills in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and other technologies. <br/>I design, build, and maintain responsive websites that offer a smooth user experience.
              </p>
              <p className='description'>
              I am capable of working with others to create a website. <br/>What I do whenever I'm not coding, I tend to watch movies or anime and read manga.
              </p>
            </div>
          </div>
          <div className='about_img-con img'>
            <img className='about_img lazy loading' src={Ruther02} data-src={Ruther02} alt="Ruther Dio Profile" />
          </div>
        </div>
      </section>
      <section className='skills container section'>
        <h3 className='about_title'>Technologies</h3>
        <div className='tech'>
          {skillIcon.map((logo, index) => {
            return <Logo logo={logo} key={index}/>
          })}
        </div>
      </section>
      <section id='projects' className='featured container section'>
        <div className='featured_content'>
          <div className='featured-con'>
            <h5 className='featured_text'>Featured Project</h5>
            <div className='featured_title-con'>
              <h4 className='about_title'>COVAPE-19 GARAGE</h4>
              <a className='featured_icon' target='_blank' href='https://covape-19-garage-rthrx44.vercel.app/' rel='noreferrer' title='Website Link'><OpenInNewRoundedIcon/></a>
            </div>
            <p className='description'>
            Is a vape shop website focusing on buying vape products, <br/>such as electronic vape, disposable vape, and vape juice.
            </p>
            <p className='description'>
            A functional and responsive website. <br/>Includes a Landing page, Sign In / Sign up, Dashboard, <br/>Product Information, and Cart.
            </p>
          </div>
          <div className='featured-tech'>
            <h5 className='subtitle'>Tech Tools Use</h5>
            <div className='use_tech-con'>
              <div className='use_tech'>
                <h5>HTML</h5>
              </div>
              <div className='use_tech'>
                <h5>CSS</h5>
              </div>
              <div className='use_tech'>
                <h5>JavaScript</h5>
              </div>
              <div className='use_tech'>
                <h5>React</h5>
              </div>
              <div className='use_tech'>
                <h5>SwiperJS</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='screenshot-con'>
          {covape.map((img, index) => {
            return <Screenshot images={img} key={index}/>
          })}
        </div>
      </section>
      <section className='projects container section'>
        <h3 className='project_title'>Projects</h3>
        <p className='project_description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
        <div className='project_content'>
          <div className='project_link-con'>
            <div className='project_img website'>
              <img className='website_img lazy loading' src={Covape_Landing} data-src={Covape_Landing} alt="Covape-19 Garage" title='Website Preview'/>
            </div>
            <p className='project_name title'>Covape-19 Garage</p>
            <p className='project_description details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>CSS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>SwiperJS</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/covape-19-garage' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://covape-19-garage-rthrx44.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
          <div className='project_link-con opposite'>
            <div className='project_img website'>
              <img className='website_img lazy loading' src={Covape_Landing} data-src={Covape_Landing} alt="Covape-19 Garage" title='Website Preview'/>
            </div>
            <p className='project_name title'>Covape-19 Garage</p>
            <p className='project_description details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>CSS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>SwiperJS</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/covape-19-garage' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://covape-19-garage-rthrx44.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
          <div className='project_link-con'>
            <div className='project_img website'>
              <img className='website_img lazy loading' src={Covape_Landing} data-src={Covape_Landing} alt="Covape-19 Garage" title='Website Preview'/>
            </div>
            <p className='project_name title'>Covape-19 Garage</p>
            <p className='project_description details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>CSS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>SwiperJS</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/covape-19-garage' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://covape-19-garage-rthrx44.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
          <div className='project_link-con opposite'>
            <div className='project_img website'>
              <img className='website_img lazy loading' src={Covape_Landing} data-src={Covape_Landing} alt="Covape-19 Garage" title='Website Preview'/>
            </div>
            <p className='project_name title'>Covape-19 Garage</p>
            <p className='project_description details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>CSS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>SwiperJS</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/covape-19-garage' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://covape-19-garage-rthrx44.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact container section">
        <h3 className="contact_title">Get In Contact</h3>
        <p className="contact_description">
          Whether you are starting a project, have business inquiries or just want to say hi, 
          my inbox is always open so feel free to reach out and I will get back to you as soon as possible.
        </p>
        <a className="btn" href="#contact" target="_blank" rel='noreferrer'>
          <HButton/>
        </a>
      </section>
    </main>
    <footer className='footer container section'>
      <h3 className="footer_title">Copyright © 2023 Ruther R. Dio.</h3>
    </footer>
    </>
  )
}

export default Landing