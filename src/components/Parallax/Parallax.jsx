import { useEffect, useState } from 'react'
import './Parallax.css';


const useParallaxBanner = 
    setScrollPosition => {
        const handleScroll = () => 
         setScrollPosition(window.pageYOffset);

         useEffect(() => {
             window
                .addEventListener(
                    "scroll",
                    handleScroll,
                    {passive:true}
                );

                return () => 
                    window.removeEventListener(
                        "scroll", handleScroll);
         }, []);
    }

export const Parallax = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useParallaxBanner(setScrollPosition);

  return (
      <>
      <section
        style={{
            backgroundSize:
            `${
                (window.outerHeight - 
                    scrollPosition) / 8
                }%`,
        }}
            className='banner'
        >
            {/* <h2>YOTZIN ALEXANDER CONTRERAS HERRERA</h2> */}
            {/* <button>BIENVENIDO</button> */}

      </section>
      {/* PAGE HERE */}

      </>
  )
}
