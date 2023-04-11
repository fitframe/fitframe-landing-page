import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';

function Features() {

  const [tab, setTab] = useState(1);

  const tabs = useRef(null);

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height = tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto  pb-12 md:pb-16">
            <h1 className="h2 mb-4" style={{'font-family':'Montserrat'}}>Why FitFrame?</h1>
            <p className="text-xl text-gray-600">Ever tried working out by yourself to improve your physical health, but ended up hurting yourself instead?
            <br/> So have we. FitFrame solves this problem by providing you your very own personal fitness trainer on your mobile phones wherever you go.
            <br/> Just open FitFrame and start working out in front of your phone, and our FitAI Trainer will tell you where you're going wrong 
            using augmented reality, powered by our FitCore Technology.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">



            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs}>
              
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
