import React from 'react';
import style from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faNodeJs,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Props {}

export const Home = (props: Props) => {
  AOS.init();
  return (
    <>
      <div className={style.flex}>
        <div className={style.flexColumn}>
          <div
            className={style.firstContainer}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faHtml5} className={style.html} />

            <p>
              Hypertext Markup Language is the standard markup language for
              documents designed to be displayed in a web browser. It can be
              assisted by technologies such as Cascading Style Sheets and
              scripting languages such as JavaScript.
            </p>
          </div>
          <div
            className={style.firstContainer}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faNodeJs} className={style.node} />
            <p>
              Node.js is an open-source, cross-platform, back-end, JavaScript
              runtime environment that executes JavaScript code outside a web
              browser.
            </p>
          </div>
          <div
            className={style.firstContainer}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faGitAlt} className={style.git} />
            <p>
              Git is a distributed version-control system for tracking changes
              in any set of files, originally designed for coordinating work
              among programmers cooperating on source code during software
              development. Its goals include speed, data integrity, and support
              for distributed, non-linear workflows.
            </p>
          </div>
        </div>
        <div className={style.verticalLine}>
          <div className={`${style.dot} ${style.dotOne}`}></div>
          <div className={`${style.dot} ${style.dotTwo}`}></div>
          <div className={`${style.dot} ${style.dotThree}`}></div>
          <div className={`${style.dot} ${style.dotFour}`}></div>
          <div className={`${style.dot} ${style.dotFive}`}></div>
        </div>
        <div className={style.flexColumnTwo}>
          <div
            className={style.secondContainer}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faCss3Alt} className={style.css} />
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML. CSS is a cornerstone technology of the
              World Wide Web, alongside HTML and JavaScript.
            </p>
          </div>
          <div
            className={style.secondContainer}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faNpm} className={style.npm} />
            <p>
              npm is a package manager for the JavaScript programming language.
              npm, Inc. is a subsidiary of GitHub, an American multinational
              corporation that provides hosting for software development and
              version control with the usage of Git.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
