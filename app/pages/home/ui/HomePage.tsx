import { AboutUs, Hero, Popup, Slider } from '@widgets';

export const HomePage = (): JSX.Element => {
 return (
  <>
   <Hero />
   <AboutUs>
    <Slider />
   </AboutUs>
   <Popup />
  </>
 );
};
