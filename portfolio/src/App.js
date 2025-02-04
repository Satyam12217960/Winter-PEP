import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="container">
  <h1>Satyam Raj</h1>
  <div className="contact-info">
    <p>
      Email:{" "}
      <a href="mailto:satyamraj86978@gmail.com">satyamraj86978@gmail.com</a>
    </p>
    <p>
      LinkedIn:{" "}
      <a href="https://linkedin.com/-satyamraj/" target="_blank">
        linkedin.com/-satyamraj/
      </a>
    </p>
    <p>
      GitHub:{" "}
      <a href="https://github.com/Satyam12217960" target="_blank">
        github.com/Satyam12217960
      </a>
    </p>
    <p>Phone: +91-9931765158</p>
  </div>
  <div className="section">
    <h2>Skills</h2>
    <ul>
      <li>C++, JavaScript, R</li>
      <li>NodeJS, React, HTML, CSS</li>
      <li>MySQL, MongoDB, Tableau, Git, GitHub, Ubuntu, Excel</li>
      <li>OOP, DSA, DAA</li>
      <li>Problem-Solving, Teamwork, Project Management, Adaptability</li>
    </ul>
  </div>
  <div className="section">
    <h2>Internship Experience</h2>
    <p>
      <strong>
        Optmyzr - PPC Management Software Company (Jan 2025 - Present)
      </strong>
    </p>
    <ul>
      <li>
        Integrated Google Ads and Bing Ads APIs into Optmyzr’s backend using
        .NET.
      </li>
      <li>Revamped UI components in React, enhancing UX for 10,000+ users.</li>
      <li>Optimized API request handling, reducing response time by 30%.</li>
    </ul>
  </div>
  <div className="section">
    <h2>Projects &amp; Training</h2>
    <p>
      <strong>Sales Forecasting for E-commerce (Nov 2024)</strong>
    </p>
    <ul>
      <li>
        Developed a time-series model using ARIMA, improving predictability by
        71.2%.
      </li>
      <li>Conducted EDA and built an interactive Tableau dashboard.</li>
    </ul>
    <p>
      <strong>Flappy Bird Clone in C++ (2023 - 2024)</strong>
    </p>
    <ul>
      <li>
        Implemented custom physics and optimized performance to achieve 60 FPS.
      </li>
    </ul>
  </div>
  <div className="section">
    <h2>Education</h2>
    <p>
      <strong>Lovely Professional University</strong> - B.Tech CSE (2022 -
      Present)
    </p>
    <p>
      <strong>Levana Public School, Bihar</strong> - Intermediate (2020 - 2022)
    </p>
  </div>
</div>

  );
}

export default App;
