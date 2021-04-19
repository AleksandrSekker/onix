import React from 'react';
import styled from './scss/ComonentDetail.module.scss';
// @ts-ignore
import useDarkThemeContext from '../../hooks/useDarkThemeContext.ts';
// @ts-ignore
import useLanguages from '../../hooks/useLanguages.ts';

const NodePage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const node = 'Node.js';
  const { currentLanguage: nodeText } = useLanguages(
    `Node.js is an open-source, cross-platform, back-end, JavaScript
  runtime environment that executes JavaScript code outside a web
  browser. Node.js lets developers use JavaScript to write command line
  tools and for server-side scripting—running scripts server-side to
  produce dynamic web page content before the page is sent to the user's
  web browser. Consequently, Node.js represents a 'JavaScript
  everywhere' paradigm,[6] unifying web-application development around a
  single programming language, rather than different languages for
  server-side and client-side scripts. Though .js is the standard
  filename extension for JavaScript code, the name 'Node.js' doesn't
  refer to a particular file in this context and is merely the name of
  the product. Node.js has an event-driven architecture capable of
  asynchronous I/O. These design choices aim to optimize throughput and
  scalability in web applications with many input/output operations, as
  well as for real-time Web applications (e.g., real-time communication
  programs and browser games).[7] The Node.js distributed development
  project was previously governed by the Node.js Foundation,[8] and has
  now merged with the JS Foundation to form the OpenJS Foundation, which
  is facilitated by the Linux Foundation's Collaborative Projects
  program.[9] Corporate users of Node.js software include GoDaddy,[10]
  Groupon,[11] IBM,[12] LinkedIn,[13][14] Microsoft,[15][16]
  Netflix,[17] PayPal,[18][19] Rakuten, SAP,[20] Voxer,[21] Walmart,[22]
  Yahoo!,[23] and Amazon Web Services.[24]`,
    `Node.js - это кроссплатформенный сервер с открытым исходным кодом, JavaScript.
  среда выполнения, которая выполняет код JavaScript вне сети
  браузер. Node.js позволяет разработчикам использовать JavaScript для написания командной строки
  инструменты и для сценариев на стороне сервера - выполнение сценариев на стороне сервера для
  создавать динамическое содержимое веб-страницы до того, как страница будет отправлена   пользователю
  веб-браузер. Следовательно, Node.js представляет собой 'JavaScript
  повсюду », [6] объединяющая разработку веб-приложений вокруг
  единый язык программирования, а не разные языки для
  серверные и клиентские скрипты. Хотя .js - это стандарт
  расширение имени файла для кода JavaScript, имя "Node.js" не
  относится к конкретному файлу в этом контексте и является просто именем
  продукт. Node.js имеет управляемую событиями архитектуру, способную
  асинхронный ввод-вывод. Эти варианты дизайна направлены на оптимизацию пропускной способности и
  масштабируемость в веб-приложениях с множеством операций ввода / вывода, как
  а также для веб-приложений в реальном времени (например, связь в реальном времени
  программы и браузерные игры). [7] Распределенная разработка на Node.js
  проект ранее управлялся Node.js Foundation, [8] и имеет
  теперь объединен с JS Foundation, чтобы сформировать OpenJS Foundation, который
  поддерживается совместными проектами Linux Foundation
  программа. [9] Корпоративные пользователи программного обеспечения Node.js включают GoDaddy, [10]
  Groupon, [11] IBM, [12] LinkedIn, [13] [14] Microsoft, [15] [16]
  Netflix, [17] PayPal, [18] [19] Rakuten, SAP, [20] Voxer, [21] Walmart, [22]
  Yahoo !, [23] и Amazon Web Services. [24]`,
    `Node.js - це JavaScript із відкритим вихідним кодом, міжплатформеним, бек-ендом
  середовище виконання, яке виконує код JavaScript поза Інтернетом
  браузер. Node.js дозволяє розробникам використовувати JavaScript для написання командного рядка
  інструменти та для сценаріїв на стороні сервера - запуск скриптів на стороні сервера до
  створювати динамічний вміст веб-сторінки до того, як сторінка буде відправлена   користувачеві
  веб-браузер. Отже, Node.js представляє "JavaScript
  скрізь 'парадигма [6], що об'єднує розробку веб-додатків навколо a
  одна мова програмування, а не різні мови для
  сценарії на стороні сервера та клієнта. Хоча .js є стандартом
  розширення імені файлу для коду JavaScript, ім'я 'Node.js' - ні
  посилаються на конкретний файл у цьому контексті, і це просто ім'я
  продукт. Node.js має архітектуру, керовану подіями
  асинхронний ввід / вивід. Ці варіанти дизайну спрямовані на оптимізацію пропускної здатності та
  масштабованість у веб-додатках з багатьма операціями введення / виводу, як
  а також для веб-додатків у режимі реального часу (наприклад, спілкування в реальному часі
  програми та браузерні ігри). [7] Розподілена розробка Node.js
  Раніше проект керувався Фондом Node.js [8] і має
  в даний час об'єднано з Фондом JS, щоб сформувати Фонд OpenJS, який
  сприяють спільні проекти Фонду Linux
  програма. [9] Корпоративні користувачі програмного забезпечення Node.js включають GoDaddy, [10]
  Groupon, [11] IBM, [12] LinkedIn, [13] [14] Microsoft, [15] [16]
  Netflix, [17] PayPal, [18] [19] Rakuten, SAP, [20] Voxer, [21] Walmart, [22]
  Yahoo!, [23] та Amazon Web Services. [24]`,
  );
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{node}</h1>
        <p className={styled.content}>{nodeText}</p>
      </div>
    </section>
  );
};
export default NodePage;
