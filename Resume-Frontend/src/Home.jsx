import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {


  return (
    <div className="homepage">
      <div className="home">
        <h1>Create Your Professional Resume with Ease</h1>
        <p>
          Build a standout resume that opens doors to opportunities. Our intuitive resume builder empowers you to effortlessly craft a personalized and professional resume that showcases your unique skills, experience, and achievements.
        </p>
        <button>
          <Link to="/register">
            <span>Get Started <ArrowRightIcon /></span>
          </Link>
        </button>
      </div>
      <div className="images"></div>
    </div>
  );
}

export default Home;
