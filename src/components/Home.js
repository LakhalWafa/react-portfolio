import React from 'react';

function Home() {
  return (
    <body id="bg-img">
      <main id="home">
        <h1 className="lg-heading">
          LAKHAL <span className="text-secondary">Wafa</span>
        </h1>
        <h2 className="sm-heading">
          Web Developer, Designer & Community Manager
        </h2>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/wafa-lakhal-242a6512a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-2x" />
          </a>
          <a
            href="https://www.facebook.com/wafa.lakhal.93"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fa-2x" />
          </a>
          <a
            href="https://twitter.com/WafaLakhal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-2x" />
          </a>
          <a
            href="https://www.instagram.com/wafalakhal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa-2x" />
          </a>
          <a
            href="https://github.com/LakhalWafa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-2x" />
          </a>
        </div>
      </main>
    </body>
  );
}

export default Home;
