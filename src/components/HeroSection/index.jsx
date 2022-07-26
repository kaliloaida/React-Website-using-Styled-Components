/* eslint-disable import/extensions */
import React, { useState } from 'react'
import {
   HeroContainer,
   HeroBg,
   VideoBg,
   HeroContent,
   HeroH1,
   HeroP,
   HeroBtnWrapper,
   ArrowRight,
   ArrowForward,
} from './HeroElements'
import Video from '../../videos/video.webm'
import { Button } from '../UI/ButtonElement.jsx'

const HeroSection = () => {
   const [hover, setHover] = useState(false)

   const onHover = () => {
      setHover(!hover)
   }

   return (
      <HeroContainer>
         <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type="video/webm" />
         </HeroBg>
         <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
               Sign up for a new accoun today and receive $250 in credit towards
               your next payment
            </HeroP>
            <HeroBtnWrapper>
               <Button
                  to="signup"
                  onMouseEnter={onHover}
                  onMouseLeave={onHover}
                  primary="true"
                  dark="true"
               >
                  Get started {hover ? <ArrowForward /> : <ArrowRight />}
               </Button>
            </HeroBtnWrapper>
         </HeroContent>
      </HeroContainer>
   )
}

export default HeroSection
