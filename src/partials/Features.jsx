import React, { useState, useRef, useEffect } from 'react';
import Transition from '../utils/Transition';

import FeaturesBg from '../images/features-bg.png';
import FeaturesElement from '../images/features-element.png';
import data from '../images/data.png';
import btype from '../images/type.png';
import guru from '../images/guru.png';

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
            <br/> So have we. FitFrame solves this problem by providing you your very own personal fitness trainer on your mobile phones wherever you go, powered by our revolutionary FitCore Technology.
            </p>
          </div>

          {/* Section content */}
          <div className="border-t-2 gray-300 md:grid md:grid-cols-12 md:gap-6" style={{'margin-top':'10%','padding':'10%'}}>
            
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3" style={{'font-family':'Montserrat'}}>Dive into the fitverse</h3>
                <p className="text-xl text-gray-600">FitFrame has a lot to offer when it comes to helping you be fit and healthy</p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1" style={{'font-family':'Montserrat'}}>It's an everyday thing</div>
                    <div className="text-gray-600">Fitness isn't a one day affair. FitFrame provides you daily workout stats so you can track your progress and be consistent.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1" style={{'font-family':'Montserrat'}}>One size does NOT fit all</div>
                    <div className="text-gray-600">That's why FitFrame provides you with your very own workout plans and targets, based on your body type and fitness goals.</div>
                  </div>
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1" style={{'font-family':'Montserrat'}}>Attention? You have all of it</div>
                    <div className="text-gray-600">FitFrame provides you your very own fitness trainer, FitGuru, powered by AI. Now you can ask your trainer for any help at any time.</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out" ref={tabs} style={{'padding':'10%'}}>
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div class="w-700 h-700 bg-white relative before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-blue-600 before:to-purple-300 before:left-0 before:top-0 before:blur-[40px] rounded-md">
                      <img className="md:max-w-none mx-auto rounded-md" src={data} width="500" height="462" alt="Features bg" />
                    </div>
                  </div>
                </Transition>
                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div class="w-700 h-700 bg-white relative before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-blue-600 before:to-purple-300 before:left-0 before:top-0 before:blur-[40px] rounded-md">
                      <img className="md:max-w-none mx-auto rounded-md" src={btype} width="500" height="462" alt="Features bg" />
                    </div>
                  </div>
                </Transition>
                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <div class="w-700 h-700 bg-white relative before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-blue-600 before:to-purple-300 before:left-0 before:top-0 before:blur-[40px] rounded-md">
                      <img className="md:max-w-none mx-auto rounded-md" src={guru} width="500" height="462" alt="Features bg" />
                    </div>
                  </div>
                </Transition>
              </div>
            </div >

          </div >

        </div >
      </div >
    </section >
  );
}

export default Features;
