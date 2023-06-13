import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <h1>My Portfolio</h1>
        <p className="App-description">Welcome to my professional portfolio!</p>
      </header>
      <nav className="App-navigation">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <main className="App-content">
        <section id="about" className="About">
          <h2>About Me</h2>
          <p>
            Hi, I'm khushbu kumari, a frontend developer with a passion for creating user-friendly and visually appealing web applications. I have experience working with React.js, JavaScript, HTML, and CSS.
          </p>
        </section>
        <section id="skills" className="Skills">
          <h2>Skills</h2>
          <ul>
            <li>React.js</li>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Responsive Design</li>
            <li>Python</li>
            <li>SQL</li>
          </ul>
        </section>
        <section id="projects" className="Projects">
          <h2>Projects</h2>
          <div className="Project">
            <h3>Project 1</h3>
            <p>This is a description of my first project. It involved building a responsive website using React.js and CSS.</p>
            <a href="#" className="Project-link">View Project</a>
          </div>
        </section>
        <section id="contact" className="Contact">
          <h2>Contact Me</h2>
          <form className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="App-footer">
        <p>© 2023 My Portfolio. All rights reserved.</p>
      </footer>
      <div className="theme-toggle">
        <button onClick={toggleDarkMode}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
    </div>
  );
}

export default App;
