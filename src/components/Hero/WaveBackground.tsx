import React from 'react';

export function WaveBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="rgb(30, 27, 75)"
            fillOpacity="0.3"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="rgb(67, 56, 202)"
            fillOpacity="0.3"
            d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,213.3C672,192,768,160,864,170.7C960,181,1056,235,1152,245.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(67, 56, 202, 0.1) 0%, transparent 50%)',
      }} />
    </div>
  );
}