import React from "react";
import "./Principal.css";
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithubSquare,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faSass,
  faJs,
  faReact,
  faVuejs,
  faNodeJs,
  faWordpress,
  faPhp,
  faLaravel,
  faGit,
  faNpm,
  faTrello,
  faGulp,
  faGrunt,
} from "@fortawesome/free-brands-svg-icons";

class principal extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="intro">
            <h1>Luis L&oacute;pez</h1>
            <div className="intro__subtitulo">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Front-End Developer")

                    .pauseFor(2500)

                    .start();
                }}
              />
            </div>
            <div className="intro__descripcion">
              <p>
                I’m Luis, a front-end developer crafting engaging digital
                experiences.
              </p>
            </div>
            <button>
              <span>Let’s work together</span>
            </button>
            <div className="intro__iconos">
              <a
                href="https://github.com/Rhplx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="intro__icono"
                  icon={faGithubSquare}
                />
              </a>
              <a
                href="https://github.com/Rhplx"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon className="intro__icono" icon={faLinkedin} />
              </a>
            </div>
          </div>
        </header>
        <section className="data">
          <div className="data__titulo">
            <h1>Who am I?</h1>
            <div className="data__contenedor">
              <div className="data__type">
                <h3>Profile:</h3>
              </div>
              <div className="data__desc">
                <p>
                  I’m a front-end developer focusing in crafting the best
                  digital experiences for web. I love to convert designs into
                  functional, lovable and accessible digital products. With more
                  than 5 years of experience in the industry, I’ve built various
                  products for individuals ranging from simple landing pages to
                  big financial systems using big data.
                </p>
                <p>
                  As a freelancer, I’ve worked with a variety of clients. At the
                  moment, I’m working with EMAD team to create a new financial
                  experience that attract new customers. While I’m primarily a
                  front-end developer I like to get my hands dirty in databases
                  and backend.
                </p>
                <p>
                  If I am not inside a code editor, I typically spend my free
                  time writing, watching films and looking though{" "}
                  <a
                    href="https://www.reddit.com/r/webdev/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    my favorite subreddit.
                  </a>
                </p>
              </div>
              <div className="data__type">
                <h3>Skills:</h3>
              </div>
              <div className="data__desc">
                <h4>Code</h4>
                <div className="logos">
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faCss3Alt} />
                    <p>CSS 3</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faHtml5} />
                    <p>HTML 5</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faJs} />
                    <p>Javascript</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faSass} />
                    <p>Sass</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faReact} />
                    <p>React</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faVuejs} />
                    <p>Vue</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faNodeJs} />
                    <p>NodeJS</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faWordpress} />
                    <p>Wordpress</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faPhp} />
                    <p>PHP</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faLaravel} />
                    <p>Laravel</p>
                  </div>
                </div>
                <h4>Tools</h4>
                <div className="logos">
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faGit} />
                    <p>Git</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faNpm} />
                    <p>NPM</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faTrello} />
                    <p>Trello</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faGulp} />
                    <p>Gulp</p>
                  </div>
                  <div className="icon__cointainer">
                    <FontAwesomeIcon icon={faGrunt} />
                    <p>Grunt</p>
                  </div>
                </div>
              </div>
              <div className="data__type">
                <h3>CV:</h3>
              </div>
              <div className="data__desc data__cv">
                <a
                  className="enlaceResumen"
                  href="https://drive.google.com/open?id=158EDaTub-CusOc-cQ75GiYYnWab8fs8S"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CV.pdf
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="contact">
          <div className="contact__container">
            <h1>Want to talk with me?</h1>
            <h3>
              You can always reach me at <span> rhplx@rhplx.com </span> <br />
              i'm glad to hear from you.
            </h3>
            <div className="contact__end">
              <p>
                Made with
                <span role="img" aria-label="heart">
                  ❤️
                </span>
                and React [{" "}
                <a href="" target="_blank">
                  Source code in GitHub
                </a>{" "}
                ]
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default principal;
