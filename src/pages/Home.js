import React from "react";
import { BtnLink } from "../components/Button";
import { Footer } from '../components/Footer';
import { HomeContainer, HeroBlock, AboutBlock, AboutContent, GridUnit} from "../styles/Home";
import Grid from "styled-components-grid";

const Home = () => (
      <div>
        <HomeContainer>
          <HeroBlock>
            <div className='hero_content'>
              <div className='hero_subject'>
                <div className='hero_title_block'>
                  <h1>
                    Keep all your notes in one place and access them from any device,
                    anywhere.
                  </h1>
                </div>
                <BtnLink to="/">Get started for free!</BtnLink>
              </div>
              <div className='hero_image'>
                <img src={require('../img/hero_image.svg')} alt='hero_image'/>
              </div>
            </div>
          </HeroBlock>
          <AboutBlock>
            <AboutContent>
            <h1>About</h1>
            <Grid>
              <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                <div>
                  <div className='grid_image'>
                    <img src={require('../img/about_free.svg')} alt='free' />
                  </div>
                  <p className='grid_title'><b>It's Free!</b></p>
                </div>
                <div>
                  <p className='grid_paragraph'>
                    Create an account for free and have access to unlimited storage.
                  </p>
                </div>
              </GridUnit>
              <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                <div>
                  <div className='grid_image'>
                    <img src={require('../img/about_map.svg')} alt='map' />
                  </div>
                  <p className='grid_title'><b>Access from Anywhere!</b></p>
                </div>
                <div>
                  <p className='grid_paragraph'>
                    Your notes stay up-to-date and can be accessed from any part of the world {'('}internet connection required{')'}.
                  </p>
                </div>
                </GridUnit>
                <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                <div>
                  <div className='grid_image'>
                    <img src={require('../img/about_design.svg')} alt='free' />
                  </div>
                  <p className='grid_title'><b>Powerful Editor!</b></p>
                </div>
                <div>
                  <p className='grid_paragraph'>
                    Use one of the most powerful web text editor available. 
                  </p>
                </div>
              </GridUnit>
              <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                <div>
                  <div className='grid_image'>
                    <img src={require('../img/about_organised.svg')} alt='map' />
                  </div>
                  <p className='grid_title'><b>Organised!</b></p>
                </div>
                <div>
                  <p className='grid_paragraph'>
                    All your notes; organised and kept safe online 24/7.
                  </p>
                </div>
                </GridUnit>
            </Grid>
            </AboutContent>
          </AboutBlock>
        </HomeContainer>
        <Footer/>
      </div>

);

export default Home;
