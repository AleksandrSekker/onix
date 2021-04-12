import React from "react";
import style from "./scss/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faNodeJs,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";
import { selectCheck } from "../../redux/checkedSlice";

interface Props {}

export const Home = (props: Props) => {
  AOS.init();
  const checked = useSelector(selectCheck);
  return (
    <div className={checked ? style.dark : ""}>
      <div className={style.flex}>
        <div className={style.flex__column}>
          <div
            className={style.first__container}
            data-aos='fade-right'
            data-aos-duration='1500'>
            <FontAwesomeIcon icon={faHtml5} className={style.html} />

            <p>
              Hypertext Markup Language is the standard markup language for
              documents designed to be displayed in a web browser. It can be
              assisted by technologies such as Cascading Style Sheets and
              scripting languages such as JavaScript.
            </p>
          </div>
          <div
            className={style.first__container}
            data-aos='fade-right'
            data-aos-duration='1500'>
            <FontAwesomeIcon icon={faNodeJs} className={style.node} />
            <p>
              Node.js is an open-source, cross-platform, back-end, JavaScript
              runtime environment that executes JavaScript code outside a web
              browser.
            </p>
          </div>
          <div
            className={style.first__container}
            data-aos='fade-right'
            data-aos-duration='1500'>
            <FontAwesomeIcon icon={faGitAlt} className={style.git} />
            <p>
              Git is a distributed version-control system for tracking changes
              in any set of files, originally designed for coordinating work
              among programmers cooperating on source code during software
              development.
            </p>
          </div>
        </div>
        <div className={style.vertical__line}>
          <div className={`${style.dot} ${style.dot__one}`}></div>
          <div className={`${style.dot} ${style.dot__two}`}></div>
          <div className={`${style.dot} ${style.dot__three}`}></div>
          <div className={`${style.dot} ${style.dot__four}`}></div>
          <div className={`${style.dot} ${style.dot__five}`}></div>
        </div>
        <div className={style.flex__column__two}>
          <div
            className={style.second__сontainer}
            data-aos='fade-left'
            data-aos-duration='1500'>
            <FontAwesomeIcon icon={faCss3Alt} className={style.css} />
            <p>
              Cascading Style Sheets is a style sheet language used for
              describing the presentation of a document written in a markup
              language such as HTML. CSS is a cornerstone technology of the
              World Wide Web, alongside HTML and JavaScript.
            </p>
          </div>
          <div
            className={style.second__сontainer}
            data-aos='fade-left'
            data-aos-duration='1500'>
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
    </div>
  );
};
