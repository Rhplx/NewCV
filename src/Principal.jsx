import React from "react";
import "./Principal.css";
import GitHubIcon from "./media/github.svg";
import LinkedIcon from "./media/linkedin.svg";
import Typewriter from "typewriter-effect";

class principal extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="intro">
            <h1>Luis L&oacute;pez</h1>
            <div className="intro__subtitulo">
              <Typewriter
                onInit={typewriter => {
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
            <div className="intro_iconos">
              <img
                src={GitHubIcon}
                className="intro__icono"
                alt="GitHub Icon"
              />
              <img
                src={LinkedIcon}
                className="intro__icono"
                alt="Linked Icon"
              />
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
                  big financial systems using big data. As a freelancer, I’ve
                  worked with a variety of clients. At the moment, I’m working
                  with EMAD team to create a new financial experience that
                  attract new customers. While I’m primarily a front-end
                  developer I like to get my hands dirty
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default principal;
