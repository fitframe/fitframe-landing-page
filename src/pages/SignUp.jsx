import React from 'react';
import { Link } from 'react-router-dom';
import Pdf from '../../src/tnc.pdf';

import Header from '../partials/Header';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1" style={{'font-family':'Montserrat'}}>Excited about FitFrame? We're excited for you to join.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form action="https://send.pageclip.co/2LTWqngYTueaZ8S4JEQLON7bT616LLbD/Mailinglist" class="pageclip-form" method="post">
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Name <span className="text-red-600">*</span></label>
                      <input name="name" type="text" className="form-input w-full text-gray-800" placeholder="Enter your name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input name="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button type="submit" class="btn text-white bg-blue-600 hover:bg-blue-700 w-full pageclip-form__submit" style={{'font-family':'Montserrat'}}>Join the future of fitness!</button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center mt-3">
                    By joining the waitlist, you agree to the <a className="underline" href={Pdf}>terms & conditions</a>.
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                  <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignUp;