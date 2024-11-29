import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Buttons } from './components/Buttons';
import Section from './components/Section';
import { DATA, TECH_STACK, TECH_USED } from './data.js';
import { TechStack } from './components/TechStack.jsx';
import { ExperienceTech } from './components/ExperienceTech.jsx';
import { Experiences } from './components/Experiences.jsx';
import { About } from './components/About.jsx';
import { Home } from './components/Home.jsx';
import { Gallery } from './components/Gallery.jsx';


function App() {
  const [selectedData, setSelectedData] = useState('shiro');

  function handleClick(selectedButton) {
    setSelectedData(selectedButton);
  }

  let tabContent = '';

  if (selectedData) {
    tabContent = (
      <Section
        id={selectedData}
        title={DATA[selectedData].title}
      >
        {
          selectedData === 'shiro' && (
            <Home />
          )
        }
        {
          selectedData === 'about' && (
            <About />
          )
        }
        {
          selectedData === 'experiences' && (
            <div className='experience-container'>
              <Experiences
                expyear='JUN 2023 - Present'
                work='Lead Full Stack Developer'
                company='| National Center for Mental Health'
                jobtitle='Pharmacy Information System (Technical Lead)'
                description='
                  Developed a comprehensive inventory management system for a pharmacy to streamline drug tracking, stock levels, and reorder processes. The system integrates with real-time database updates, enhancing operational efficiency and minimizing stockouts.
                  <br />
                  The system also caters an integrated connection towards Material Management System. Where it stores the data, allowing both the system to communicate with the use of API.
                '
              >
                <ExperienceTech experience={TECH_STACK.experience1} />
                <div className='tech-stack'>
                  {
                    TECH_USED.tech1.map((tech, index) => (
                      <TechStack key={index} tech={tech.techused} />
                    ))
                  }
                </div>
              </Experiences>
              <Experiences
                expyear='OCT 2022 - JUN 2023'
                work='Entry Level Web Developer'
                company='| National Center for Mental Health'
                jobtitle='Material Management System'
                description='
                  Developed and implemented a Material Management System (MMS) for the hospital to streamline inventory tracking, procurement, and material usage processes. Collaborated with the logistics and supply chain team to improve inventory tracking and material procurement.
                '
              >
                <ExperienceTech experience={TECH_STACK.experience3} />
                <div className='tech-stack'>
                  {
                    TECH_USED.tech2.map((tech, index) => (
                      <TechStack key={index} tech={tech.techused} />
                    ))
                  }
                </div>
              </Experiences>
              <Experiences
                expyear='OCT 2022 - JUN 2023'
                work='Entry Level Web Developer'
                company='| National Center for Mental Health'
                jobtitle='Hospital Information System'
                description='
                  Designed and developed a comprehensive Hospital Information System for healthcare providers to securely manage and store patient data, including personal information, medical history, appointments, and prescriptions. The system ensures compliance with data protection regulations while providing an intuitive interface for medical staff.
                '
              >
                <ExperienceTech experience={TECH_STACK.experience2} />
                <div className='tech-stack'>
                  {
                    TECH_USED.tech2.map((tech, index) => (
                      <TechStack key={index} tech={tech.techused} />
                    ))
                  }
                </div>
              </Experiences>
              <Experiences
                expyear='2018 - 2022'
                work='Graphic Designer'
                company='| Freelance'
                jobtitle='Publication Material Creator'
                description='
                  Designed and produced publication materials (e.g., brochures, flyers, posters, and digital assets) for clients using Adobe Photoshop and InDesign, ensuring high-quality visuals aligned with brand guidelines and project objectives.
                '
              >
                <div className='tech-stack'>
                  {
                    TECH_USED.tech3.map((tech, index) => (
                      <TechStack key={index} tech={tech.techused} />
                    ))
                  }
                </div>
              </Experiences>
            </div>
          )
        }
        {
          selectedData === 'gallery' && (
            <Gallery />
          )
        }
      </Section>
    )
  }
  return (
    <>
      <section id="info-btns">
        <Buttons
          isSelected={selectedData === 'shiro'}
          onSelect={() => handleClick('shiro')}
        >
          Shiro
        </Buttons>
        <Buttons
          isSelected={selectedData === 'about'}
          onSelect={() => handleClick('about')}
        >
          About
        </Buttons>
        <Buttons
          isSelected={selectedData === 'experiences'}
          onSelect={() => handleClick('experiences')}
        >
          Experiences
        </Buttons>
        <Buttons
          isSelected={selectedData === 'gallery'}
          onSelect={() => handleClick('gallery')}
        >
          Gallery
        </Buttons>

      </section>

      <div className="container">
        <Header
          name="CRISTINE JOY SAN JUAN"
          job="FULL STACK WEB DEVELOPER"
        />
        {tabContent}
      </div>
      <footer className="footer">
        © 2024 PROJECT SHIRO
      </footer>
    </>
  );
}

export default App;
