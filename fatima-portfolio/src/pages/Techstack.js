import "../App.css";

function Techstack() {
  return (
    <>
      {/* import all img + make width & height 100px */}
      <h2 className="title">My Tech Stack 💻</h2>
      <div className="tech-stack">
        <div className="column"></div>
        <div className="column">
          <div className="javascript">
            <img
              alt="javascript"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="chartJs">
            <img
              alt="chartJs"
              src="https://www.chartjs.org/img/chartjs-logo.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="nodeJs">
            <img
              alt="nodeJs"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className="column">
          <div className="html">
            <img
              alt="html"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="css">
            <img
              alt="css"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="react">
            <img
              alt="react"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className="column">
          <div className="expressJs">
            <img
              alt="expressJs"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="jasmine">
            <img
              alt="jasmine"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jasmine/jasmine-plain.svg"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className="column">
          <div className="postgreSQL">
            <img
              alt="postgreSQL"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="insomnia">
            <img
              alt="insomnia"
              src="https://seeklogo.com/images/I/insomnia-logo-A35E09EB19-seeklogo.com.png"
              width="100px"
              height="100px"
            />
          </div>
          <div className="git">
            <img
              alt="git "
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="prisma">
            <img
              alt="prisma"
              src="https://cdn-1.webcatalog.io/catalog/prisma-data-platform/prisma-data-platform-icon-filled-256.png?v=1675593236933"
              width="100px"
              height="100px"
            />
          </div>
          <div className="chartJs">
            <img
              alt="chartJs"
              src="https://www.chartjs.org/img/chartjs-logo.svg"
              width="100px"
              height="100px"
            />
          </div>
        </div>
        <div className="column">
          <div className="tdd">
            <div>TDD</div>
          </div>
          <div className="oop">
            <div>OOP</div>
          </div>
        </div>
        <div className="column">
          <div className="vscode">
            <img
              alt="vscode"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="npm">
            <img
              alt="npm"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              width="100px"
              height="100px"
            />
          </div>
          <div className="github">
            <img
              alt="github"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              width="100px"
              height="100px"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Techstack;

// Prisma, ChartJs, Insomnia => Need to find icons
