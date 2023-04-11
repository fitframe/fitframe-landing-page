import React, { useState, useRef, useEffect } from 'react';
import Modal from '../utils/Modal';
import hero from '../images/hero.png';
import TestimonialImage from '../images/testimonial.jpg';

import HeroImage from '../images/hero-image.png';

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const video = useRef(null);

  useEffect(() => {
    videoModalOpen ? video.current.play() : video.current.pause();
  }, [videoModalOpen]);    

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true" style={{'margin-right':'0'}}>
      
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 bg-hero" >
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out" style={{'font-family':'Montserrat'}}>
              your personal fitness trainer on the go<br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">anytime, anywhere.</span>
            </h1>
            </div>
            <div className="max-w-3xl mx-auto" >
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                FitFrame uses our augmented reality engine powered by artificial intelligence to ensure that you have perfect posture while working out
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-purple-600 w-full mb-4 sm:w-auto sm:mb-0" href="#0">
                    Sign up for early access!
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="justify-right mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <video ref={video} className="absolute w-full h-full" width="1920" height="1080" loop autoPlay controls>
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
