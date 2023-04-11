import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">    

        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">©2023, FitFrame Technologies Ltd.</div>
          <br/>
          <div className="text-sm text-gray-600 mr-4">FitAI Trainer and FitCore Technology are all trademarks of FitFrame Technologies</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
