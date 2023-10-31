import React, { useEffect, useState } from 'react'
import './Landing.css'
import Navbar from '../../components/navbar/Navbar'
import Ruther01 from '../../components/assets/Ruther01.png'
import Ruther02 from '../../components/assets/Ruther02.png'
import Trailers from '../../components/assets/Trailers.png'
import Ambiance from '../../components/assets/Ambiance.png'
import Banking from '../../components/assets/Banking.png'
import Slack from '../../components/assets/Slack.png'
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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

  const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          setBackToTop(true)
        } else {
          setBackToTop(false)
        }
      })
    }, [])

    const scrollUp = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }

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
      <section>
        {backToTop && <div className='up' onClick={scrollUp} title='Scroll to top'><ArrowUpwardRoundedIcon className='arrow'/></div>}
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
                I design, build, and maintain responsive websites that offer a smooth user experience. I am capable of working with others to create a website. I'm also good at researching solutions online to debug all the errors in my code.
              </p>
              <p className='description'>
                When I'm not coding, I tend to watch movies, anime, and read manga. 
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
        <p className='project_description'>Each project is a unique piece of development. <br/>Designed with a stunning pixel-perfect interactive user experience.<br/>Viewable from small to large screens.</p>
        <div className='project_content'>
          <div className='project_link-con'>
            <div className='project_img website lazy loading'>
              <img className='website_img' src={Trailers} data-src={Trailers} alt="Trailers" title='Website Preview'/>
            </div>
            <p className='project_name title'>Trailers</p>
            <p className='project_description details'>Trailers is a movie app where you can watch trending, popular, top-rated, and upcoming Movie/TV shows.</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>Tailwind CSS</li>
                <li className='tech_use'>TMDB API</li>
                <li className='tech_use'>SwiperJS</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/trailers' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://trailers-alpha.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
          <div className='project_link-con opposite'>
            <div className='project_img website lazy loading'>
              <img className='website_img' src={Ambiance} data-src={Ambiance} alt="Ambiance Interior Design Studio" title='Website Preview'/>
            </div>
            <p className='project_name title'>Ambiance <br/>Interior Design Studio</p>
            <p className='project_description details'>A website that is mobile-friendly and showcases the process of building, planning, and designing an interior.</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>Tailwind CSS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>SwiperJS</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/ambiance-website' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://xd.adobe.com/view/e869d8be-1df1-4c7d-bb71-228cf1b8181a-bd3a/specs/' target='_blank' rel='noreferrer' title='Mock-up Design Link'>
                <NButton displayText='Mock-up' icon={<DeveloperBoardRoundedIcon/>}/>
              </a>
              <a className='project_btn' href='https://ambiance-website.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
          <div className='project_link-con'>
            <div className='project_img website lazy loading'>
              <img className='website_img' src={Slack} data-src={Slack} alt="Slack" title='Website Preview'/>
            </div>
            <p className='project_name title'>Slack App <br/>(Collaboration)</p>
            <p className='project_description details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>CSS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>Slack API</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/rthrx44/slack-app-batch26' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://slack-app-batch26.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
                <NButton displayText='Live Demo' icon={<OpenInNewRoundedIcon/>}/>
              </a>
            </div>
          </div>
          <div className='project_link-con opposite'  >
            <div className='project_img website lazy loading'>
              <img className='website_img' src={Banking} data-src={Banking} alt="Banking/Budget App" title='Website Preview'/>
            </div>
            <p className='project_name title'>Banking/Budget App <br/>(Collaboration)</p>
            <p className='project_description details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Vitae nam, eius suscipit qui error velit! <br/>Repellat repudiandae voluptate fuga est quaerat</p>
            <div className='project_tech ptech'>
              <ul className='tech_use-con'>
                <li className='tech_use'>SASS</li>
                <li className='tech_use'>ReactJS</li>
                <li className='tech_use'>JavaScript</li>
              </ul>
            </div>
            <div className='project_btn-con links'>
              <a className='project_btn' href='https://github.com/hnbmunoz/bank-and-budget' target='_blank' rel='noreferrer' title='Website Github Link'>
                <NButton displayText='Source Code' icon={<GitHubIcon/>}/>
              </a>
              <a className='project_btn' href='https://bank-and-budget.vercel.app/' target='_blank' rel='noreferrer' title='Website Link'>
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
        <a className="btn" href="mailto:ruther.diox04@gmail.com" target="_blank" rel='noreferrer'>
          <HButton/>
        </a>
      </section>
    </main>
    <footer className='footer container section'>
      <div className='footer_social'>
        <div>
          <a className='footer_link' href="https://github.com/rthrx44" target='_blank' rel='noreferrer' title='Github Profile Link'><GitHubIcon sx={{fontSize:28}}/></a>
        </div>
        <div>
          <a className='footer_link' href="https://www.linkedin.com/in/ruther-dio-b3058b248/" target='_blank' rel='noreferrer' title='LinkedIn Profile Link'><LinkedInIcon sx={{fontSize:28}}/></a>
        </div>
      </div>
      <h3 className="footer_title">Copyright © 2023 Ruther R. Dio.</h3>
    </footer>
    </>
  )
}

export default Landing