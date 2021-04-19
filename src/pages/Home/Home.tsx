import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faNodeJs,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import style from './scss/Home.module.scss';
// @ts-ignore
import useDarkThemeContext from '../../hooks/useDarkThemeContext.ts';
// @ts-ignore
import useLanguages from '../../hooks/useLanguages.ts';

const Home = () => {
  const { currentLanguage: html } = useLanguages(
    `Hypertext Markup Language is the standard markup language for
    documents designed to be displayed in a web browser. It can be
    assisted by technologies such as Cascading Style Sheets and
    scripting languages such as JavaScript.`,
    `Язык разметки гипертекста - стандартный язык разметки для
    документы, предназначенные для отображения в веб-браузере. Это может быть
    с помощью таких технологий, как каскадные таблицы стилей и
    языки сценариев, такие как JavaScript.`,
    `Мова розмітки гіпертексту є стандартною мовою розмітки для
    документи, призначені для відображення у веб-браузері. Це може бути
    за допомогою таких технологій, як каскадні таблиці стилів та
    мови сценаріїв, такі як JavaScript.`,
  );
  const { currentLanguage: node } = useLanguages(
    `Node.js is an open-source, cross-platform, back-end, JavaScript
  runtime environment that executes JavaScript code outside a web
  browser.`,
    `Node.js - это кроссплатформенный сервер с открытым исходным кодом, JavaScript.
  среда выполнения, которая выполняет код JavaScript вне сети
  браузер.`,
    `Node.js - це JavaScript із відкритим вихідним кодом, міжплатформеним, бек-ендом
  середовище виконання, яке виконує код JavaScript поза Інтернетом
  браузер.`,
  );
  const { currentLanguage: git } = useLanguages(
    `Git is a distributed version-control system for tracking changes
  in any set of files, originally designed for coordinating work
  among programmers cooperating on source code during software
  development.`,
    'Git - это распределенная система контроля версий для отслеживания изменений в любом наборе файлов,' 
    + 'изначально предназначенная для координации работы программистов,' 
    + 'работающих над исходным кодом во время разработки программного обеспечения.',
    'Git - це розподілена система контролю версій для відстеження змін у будь-якому наборі файлів,' 
    + 'спочатку призначена для координації роботи між програмістами,' 
    + 'які співпрацюють над вихідним кодом під час розробки програмного забезпечення.',
  );
  const { currentLanguage: css } = useLanguages(
    `Cascading Style Sheets is a style sheet language used for
  describing the presentation of a document written in a markup
  language such as HTML. CSS is a cornerstone technology of the
  World Wide Web, alongside HTML and JavaScript.`,
    `Каскадные таблицы стилей - это язык таблиц стилей, используемый для
  описание представления документа, написанного в разметке
  язык, такой как HTML. CSS - это краеугольная технология
  Всемирная паутина, наряду с HTML и JavaScript.`,
    `Каскадні таблиці стилів - це мова таблиць стилів, яка використовується
  опис викладу документа, написаного з розміткою
  такою мовою, як HTML. CSS є наріжним каменем технології
  Всесвітня павутина, поряд із HTML та JavaScript.`,
  );
  const { currentLanguage: npm } = useLanguages(
    `npm is a package manager for the JavaScript programming language.
  npm, Inc. is a subsidiary of GitHub, an American multinational
  corporation that provides hosting for software development and
  version control with the usage of Git.`,
    `npm - это менеджер пакетов для языка программирования JavaScript.
  npm, Inc. является дочерней компанией GitHub, американской транснациональной корпорации.
  корпорация, предоставляющая хостинг для разработки программного обеспечения и
  контроль версий с использованием Git.`,
    `npm - це менеджер пакетів для мови програмування JavaScript.
  npm, Inc. є дочірньою компанією GitHub, американської багатонаціональної компанії
  корпорація, яка надає хостинг для розробки програмного забезпечення та
  контроль версій із використанням Git.`,
  );
  AOS.init();
  const { darkTheme } = useDarkThemeContext(style);
  return (
    <div className={darkTheme}>
      <div className={style.flex}>
        <div className={style.flex__column}>
          <div
            className={style.first__container}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faHtml5} className={style.html} />
            <p>{html}</p>
          </div>
          <div
            className={style.first__container}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faNodeJs} className={style.node} />
            <p>{node}</p>
          </div>
          <div
            className={style.first__container}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faGitAlt} className={style.git} />
            <p>{git}</p>
          </div>
        </div>
        <div className={style.vertical__line}>
          <div className={`${style.dot} ${style.dot__one}`} />
          <div className={`${style.dot} ${style.dot__two}`} />
          <div className={`${style.dot} ${style.dot__three}`} />
          <div className={`${style.dot} ${style.dot__four}`} />
          <div className={`${style.dot} ${style.dot__five}`} />
        </div>
        <div className={style.flex__column__two}>
          <div
            className={style.second__сontainer}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faCss3Alt} className={style.css} />
            <p>{css}</p>
          </div>
          <div
            className={style.second__сontainer}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <FontAwesomeIcon icon={faNpm} className={style.npm} />
            <p>{npm}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
