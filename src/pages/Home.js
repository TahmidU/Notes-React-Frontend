import React from "react";
import { BtnLink } from "../components/Button";
import { HomeContentBlock, HeroBlock, HeroTitleBlock, AboutBlock, GridUnit, GridParagraph} from "../styles/Home";
import Grid from "styled-components-grid";

const Home = () => (

    <HomeContentBlock>
      <HeroBlock>
        <HeroTitleBlock>
          <h1>
            Keep all your notes in one place and access them from any device,
            anywhere.
          </h1>
        </HeroTitleBlock>
        <BtnLink to="/">Get started for free!</BtnLink>
      </HeroBlock>
      <AboutBlock>
        <h1>About</h1>
        <Grid>
          <GridUnit size={1 / 2}>
            <div>
              <img width='48' height='48' src={require('../img/about_free.svg')} alt='free' />
              <p><b>It's Free!</b></p>
            </div>
            <div>
              <GridParagraph>
                Create an account for free and have access to unlimited storage.
              </GridParagraph>
            </div>
          </GridUnit>
          <GridUnit size={1 / 2}>
            <div>
              <img width='48' height='48' src={require('../img/about_map.svg')} alt='map' />
              <p><b>Access from Anywhere!</b></p>
            </div>
            <div>
              <GridParagraph>
                Your notes stay up-to-date and can be accessed from any part of the world {'('}internet connection required{')'}.
              </GridParagraph>
            </div>
            </GridUnit>
        </Grid>
      </AboutBlock>
    </HomeContentBlock>

);

export default Home;
