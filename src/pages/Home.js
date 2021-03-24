import React from 'react';
import { BtnLink } from '../styles/Button';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import Testimony from '../components/Testimony';
import { HeroBlock, AboutBlock, GridUnit} from '../styles/Home';
import { LayoutContainer } from '../styles/Layout';
import Grid from 'styled-components-grid';

const Home = () => (
      <div>
        <Navbar />
        <LayoutContainer>
          <HeroBlock>
            <div className='hero_content'>
              <div className='hero_subject'>
                <div className='hero_title_block'>
                  <h1>Making notes has never been easier</h1>
                  <h2>
                    Keep all your notes in one place and access them from any device,
                    anywhere.
                  </h2>
                </div>
                <BtnLink to="/">Get started for free!</BtnLink>
              </div>
              <div className='hero_image'>
                <img src={require('../img/hero_image.svg')} alt='hero_image'/>
              </div>
            </div>
          </HeroBlock>
          <AboutBlock id='about'>
            <div className='about_content'>
              <h1>About</h1>
              <Grid>
                <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                  <div className='grid_header'>
                    <div className='grid_image'>
                      <img src={require('../img/about_free.svg')} alt='free' />
                    </div>
                    <p className='grid_title'>It's Free!</p>
                  </div>
                  <div className='grid_paragraph'>
                    <p>
                      Create notes and have access to unlimited storage.
                    </p>
                  </div>
                </GridUnit>
                <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                  <div className='grid_header'>
                    <div className='grid_image'>
                      <img src={require('../img/about_map.svg')} alt='map' />
                    </div>
                    <p className='grid_title'>Access from Anywhere!</p>
                  </div>
                  <div className='grid_paragraph'>
                    <p>
                      Your notes stay up-to-date and can be accessed from any part of the world {'('}internet connection required{')'}.
                    </p>
                  </div>
                  </GridUnit>
                  <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                  <div className='grid_header'>
                    <div className='grid_image'>
                      <img src={require('../img/about_design.svg')} alt='free' />
                    </div>
                    <p className='grid_title'>Powerful Editor!</p>
                  </div>
                  <div className='grid_paragraph'>
                    <p>
                      Use one of the most powerful web text editor available. 
                    </p>
                  </div>
                </GridUnit>
                <GridUnit size={{desktop: 1 / 2, mobile: 1/1}}>
                  <div className='grid_header'>
                    <div className='grid_image'>
                      <img src={require('../img/about_organised.svg')} alt='map' />
                    </div>
                    <p className='grid_title'>Organised!</p>
                  </div>
                  <div className='grid_paragraph'>
                    <p>
                      All your notes; organised and online 24/7.
                    </p>
                  </div>
                  </GridUnit>
              </Grid>
            </div>
          </AboutBlock>
          <Testimony />
        </LayoutContainer>
        <Footer/>
      </div>

);

export default Home;
