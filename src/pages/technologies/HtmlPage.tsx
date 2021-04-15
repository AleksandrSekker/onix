import React from "react";
import styled from "./scss/ComonentDetail.module.scss";
import { useSelector } from "react-redux";
import { selectCheck } from "../../redux/checkedSlice";
import useLanguages from "../../hooks/useLanguages";

export const HtmlPage = () => {
  const checked = useSelector(selectCheck);
  const html = "HTML";
  const { currentLanguage: htmlText } = useLanguages(
    `Hypertext Markup Language (HTML) is the standard markup language for
  documents designed to be displayed in a web browser. It can be
  assisted by technologies such as Cascading Style Sheets (CSS) and
  scripting languages such as JavaScript. Web browsers receive HTML
  documents from a web server or from local storage and render the
  documents into multimedia web pages. HTML describes the structure of a
  web page semantically and originally included cues for the appearance
  of the document. HTML elements are the building blocks of HTML pages.
  With HTML constructs, images and other objects such as interactive
  forms may be embedded into the rendered page. HTML provides a means to
  create structured documents by denoting structural semantics for text
  such as headings, paragraphs, lists, links, quotes and other items.
  HTML elements are delineated by tags, written using angle brackets.
  Tags such as img and input directly introduce content into the page.
  Other tags such as p surround and provide information about document
  text and may include other tags as sub-elements. Browsers do not
  display the HTML tags, but use them to interpret the content of the
  page. HTML can embed programs written in a scripting language such as
  JavaScript, which affects the behavior and content of web pages.
  Inclusion of CSS defines the look and layout of content. The World
  Wide Web Consortium (W3C), former maintainer of the HTML and current
  maintainer of the CSS standards, has encouraged the use of CSS over
  explicit presentational HTML since 1997.`,
    `Язык гипертекстовой разметки (HTML) - это стандартный язык разметки для
  документы, предназначенные для отображения в веб-браузере. Это может быть
  с помощью таких технологий, как каскадные таблицы стилей (CSS) и
  языки сценариев, такие как JavaScript. Веб-браузеры получают HTML
  документы с веб-сервера или из локального хранилища и отображать
  документы в мультимедийные веб-страницы. HTML описывает структуру
  веб-страница семантически и изначально включала подсказки для внешнего вида
  документа. Элементы HTML - это строительные блоки HTML-страниц.
  С конструкциями HTML, изображениями и другими объектами, такими как интерактивные
  формы могут быть встроены в отображаемую страницу. HTML предоставляет средства для
  создавать структурированные документы, определяя структурную семантику текста
  такие как заголовки, абзацы, списки, ссылки, цитаты и другие элементы.
  Элементы HTML выделяются тегами, записанными с использованием угловых скобок.
  Такие теги, как img и input, напрямую вводят контент на страницу.
  Другие теги, такие как p, окружают и предоставляют информацию о документе.
  текст и может включать другие теги в качестве подэлементов. Браузеры не
  отображать HTML-теги, но использовать их для интерпретации содержимого
  страница. HTML может встраивать программы, написанные на языке сценариев, например
  JavaScript, который влияет на поведение и содержимое веб-страниц.
  Включение CSS определяет внешний вид и макет контента. Мир
  Консорциум Wide Web (W3C), бывший разработчик HTML и нынешний
  поддерживающий стандарты CSS, поощрял использование CSS вместо
  явный презентационный HTML с 1997 года.`,
    `Мова розмітки гіпертексту (HTML) - це стандартна мова розмітки для
  документи, призначені для відображення у веб-браузері. Це може бути
  за допомогою таких технологій, як каскадні таблиці стилів (CSS) та
  мови сценаріїв, такі як JavaScript. Веб-браузери отримують HTML
  документи з веб-сервера або з локального сховища та відображають
  документи на мультимедійні веб-сторінки. HTML описує структуру a
  веб-сторінка семантично та спочатку включала підказки щодо зовнішнього вигляду
  документа. Елементи HTML - це будівельні блоки HTML-сторінок.
  За допомогою HTML-конструкцій, зображень та інших об’єктів, таких як інтерактивні
  форми можуть бути вбудовані у відтворену сторінку. HTML забезпечує засіб
  створювати структуровані документи, позначаючи структурну семантику тексту
  такі як заголовки, абзаци, списки, посилання, цитати та інші пункти.
  Елементи HTML розмежовані тегами, записаними за допомогою кутових дужок.
  Такі теги, як img та input, безпосередньо вводять вміст на сторінку.
  Інші теги, такі як p surround, містять інформацію про документ
  текст і може включати інші теги як піделементи. Браузери ні
  відображати HTML-теги, але використовувати їх для інтерпретації вмісту
  сторінки. HTML може вбудовувати програми, написані мовою сценаріїв, наприклад
  JavaScript, який впливає на поведінку та зміст веб-сторінок.
  Включення CSS визначає вигляд та макет вмісту. Світ
  Wide Web Consortium (W3C), колишній супровідник HTML і поточний
  , що підтримує стандарти CSS, заохочує використання CSS
  явний презентаційний HTML з 1997 року.`
  );
  return (
    <section className={checked ? styled.dark : ""}>
      <div className='container'>
        <h1 className={styled.title}>{html}</h1>
        <p className={styled.content}>{htmlText}</p>
      </div>
    </section>
  );
};
