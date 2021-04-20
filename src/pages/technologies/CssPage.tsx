import React from 'react';
import styled from './scss/ComonentDetail.module.scss';
import useLanguages from '../../hooks/useLanguages';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const CssPage = () => {
  const css = 'CSS';
  const { currentLanguage: cssText } = useLanguages(
    `Cascading Style Sheets (CSS) is a style sheet language used for
  describing the presentation of a document written in a markup language
  such as HTML.[1] CSS is a cornerstone technology of the World Wide
  Web, alongside HTML and JavaScript.[2] CSS is designed to enable the
  separation of presentation and content, including layout, colors, and
  fonts.[3] This separation can improve content accessibility, provide
  more flexibility and control in the specification of presentation
  characteristics, enable multiple web pages to share formatting by
  specifying the relevant CSS in a separate .css file which reduces
  complexity and repetition in the structural content as well as
  enabling the .css file to be cached to improve the page load speed
  between the pages that share the file and its formatting. Separation
  of formatting and content also makes it feasible to present the same
  markup page in different styles for different rendering methods, such
  as on-screen, in print, by voice (via speech-based browser or screen
  reader), and on Braille-based tactile devices. CSS also has rules for
  alternate formatting if the content is accessed on a mobile device.[4]
  The name cascading comes from the specified priority scheme to
  determine which style rule applies if more than one rule matches a
  particular element. This cascading priority scheme is predictable. The
  CSS specifications are maintained by the World Wide Web Consortium
  (W3C). Internet media type (MIME type) text/css is registered for use
  with CSS by RFC 2318 (March 1998). The W3C operates a free CSS
  validation service for CSS documents.[5] In addition to HTML, other
  markup languages support the use of CSS including XHTML, plain XML,
  SVG, and XUL.`,
    `Каскадные таблицы стилей (CSS) - это язык таблиц стилей, используемый для
  описание представления документа, написанного на языке разметки
  например HTML. [1] CSS - это краеугольная технология во всем мире
  Интернет, наряду с HTML и JavaScript. [2] CSS предназначен для включения
  разделение презентации и контента, включая макет, цвета и
  шрифты. [3] Такое разделение может улучшить доступность контента, обеспечить
  больше гибкости и контроля в спецификации презентации
  характеристики, позволяют нескольким веб-страницам совместно использовать форматирование,
  указание соответствующего CSS в отдельном файле .css, что уменьшает
  сложность и повторяемость структурного содержания, а также
  включение кэширования файла .css для повышения скорости загрузки страницы
  между страницами, которые совместно используют файл, и его форматированием. Разделение
  форматирования и содержания также позволяет представить одинаковые
  страницу разметки в разных стилях для разных методов рендеринга, например
  как на экране, в печати, голосом (через речевой браузер или экран
  ридер) и на тактильных устройствах на основе Брайля. В CSS также есть правила для
  альтернативное форматирование, если доступ к контенту осуществляется на мобильном устройстве. [4]
  Каскадирование имен происходит от указанной схемы приоритета к
  определить, какое правило стиля применяется, если более одного правила соответствует одному
  конкретный элемент. Эта каскадная схема приоритетов предсказуема. В
  Спецификации CSS поддерживаются Консорциумом World Wide Web.
  (W3C). Тип интернет-носителя (тип MIME) text / css зарегистрирован для использования
  с CSS по RFC 2318 (март 1998 г.). W3C использует бесплатный CSS
  служба проверки документов CSS. [5] Помимо HTML, другие
  языки разметки поддерживают использование CSS, включая XHTML, простой XML,
  SVG и XUL.`,
    `Каскадні таблиці стилів (CSS) - це мова таблиць стилів, що використовується для
  опис викладу документа, написаного мовою розмітки
  таких як HTML. [1] CSS - це наріжна технологія світового масштабу
  Інтернет, поряд з HTML та JavaScript. [2] CSS призначений для включення
  розділення презентації та змісту, включаючи макет, кольори та
  шрифти. [3] Це розділення може покращити доступність вмісту, забезпечити
  більша гнучкість та контроль у специфікації презентації
  характеристики, дозволити декільком веб-сторінкам спільно використовувати форматування
  зазначення відповідного CSS в окремому файлі .css, який зменшує
  складність і повторюваність структурного змісту, а також
  включення кешованого файлу .css для покращення швидкості завантаження сторінки
  між сторінками, що ділять файл, та його форматуванням. Розлука
  форматування та змісту також робить можливим представити те саме
  сторінка розмітки в різних стилях для різних методів візуалізації, наприклад
  як на екрані, у друці, голосом (за допомогою мовного браузера або екрана
  читач), а також на тактильних пристроях на основі Брайля. CSS також має правила для
  альтернативне форматування, якщо доступ до вмісту здійснюється на мобільному пристрої. [4]
  Каскадне ім'я походить від зазначеної пріоритетної схеми до
  визначити, яке правило стилю застосовується, якщо більше ніж одне правило відповідає a
  певний елемент. Ця схема каскадного пріоритету передбачувана.
  Специфікації CSS підтримуються Консорціумом World Wide Web
  (W3C). Інтернет-носій (тип MIME) text / css зареєстрований для використання
  з CSS за RFC 2318 (березень 1998). W3C працює з безкоштовним CSS
  служба перевірки документів CSS. [5] Крім HTML, інші
  мови розмітки підтримують використання CSS, включаючи XHTML, звичайний XML,
  SVG та XUL.`,
  );
  const { darkTheme } = useDarkThemeContext(styled);
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{css}</h1>
        <p className={styled.content}>{cssText}</p>
      </div>
    </section>
  );
};
export default CssPage;
