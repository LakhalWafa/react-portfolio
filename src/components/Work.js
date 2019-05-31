import React from 'react';
import Footer from './Footer';
import mwd from '../img/mwd.jpg';
import wedding from '../img/wedding.jpg';
import lyrics from '../img/lyrics.jpg';
import translate from '../img/translate.jpg';
import mw from '../img/mw.jpg';
import foir from '../img/foir.jpg';
import ar from '../img/ar.png';
import um from '../img/um.jpg';
import Carousel from './Carousel';

function Work() {
  return (
    <div>
      <main id="work">
        <h1 class="lg-heading">
          My <span class="text-secondary">Work</span>
        </h1>
        <h2 class="sm-heading">Check out some of my projects.</h2>
        <h2 class="md-heading text-secondary">Web Development</h2>
        <div class="projects">
          <div class="item">
            <img src={mwd} alt="" />
            <a
              href="https://magic-way-design.firebaseapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/LakhalWafa/magic-way-design-website"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <img src={wedding} alt="" />

            <a
              href="https://wedding-planning-f65fd.firebaseapp.com/signin"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fas fa-eye" /> Project
            </a>
            <a
              href="https://github.com/LakhalWafa/wedding-planning-app-"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <img src={lyrics} alt="" />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LakhalWafa/lyric-finder-react"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
          <div class="item">
            <img src={translate} alt="" />

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/LakhalWafa/english-french-translator"
              class="btn-dark"
            >
              <i class="fab fa-github" /> Github
            </a>
          </div>
        </div>
        <h2 class="md-heading text-secondary">Design</h2>
        <Carousel />
        <h2 class="md-heading text-secondary">Community Management</h2>
        <div class="projects">
          <div class="item">
            <img src={mw} alt="" />
            <a
              href="https://www.facebook.com/MagicWayDesign/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fab fa-facebook" /> Project
            </a>
          </div>
          <div class="item">
            <img src={ar} alt="" />
            <a
              href="https://www.facebook.com/Arabi21TV/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fab fa-facebook" /> Project
            </a>
          </div>
          <div class="item">
            <img src={um} alt="" />
            <a
              href="https://www.facebook.com/universmarketng/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fab fa-facebook" /> Project
            </a>
          </div>
          <div class="item">
            <img src={foir} alt="" />
            <a
              href="https://www.facebook.com/foire.inter.du.livre.tn/"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-light"
            >
              <i class="fab fa-facebook" /> Project
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Work;
