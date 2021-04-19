import React from 'react';
import styled from './scss/ComonentDetail.module.scss';
// @ts-ignore
import useLanguages from '../../hooks/useLanguages.ts';
// @ts-ignore
import useDarkThemeContext from '../../hooks/useDarkThemeContext.ts';

const NpmPage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const npm = 'Package manager, npm';
  const { currentLanguage: npmText } = useLanguages(
    `A package manager or package-management system is a collection of
  software tools that automates the process of installing, upgrading,
  configuring, and removing computer programs for a computer's operating
  system in a consistent manner.[1] A package manager deals with
  packages, distributions of software and data in archive files.
  Packages contain metadata, such as the software's name, description of
  its purpose, version number, vendor, checksum (preferably a
  cryptographic hash function), and a list of dependencies necessary for
  the software to run properly. Upon installation, metadata is stored in
  a local package database. Package managers typically maintain a
  database of software dependencies and version information to prevent
  software mismatches and missing prerequisites. They work closely with
  software repositories, binary repository managers, and app stores.
  Package managers are designed to eliminate the need for manual
  installs and updates. This can be particularly useful for large
  enterprises whose operating systems are typically consisting of
  hundreds or even tens of thousands of distinct software packages.[2].
  Npm (originally short for Node Package Manager)[4] is a package
  manager for the JavaScript programming language. npm, Inc. is a
  subsidiary of GitHub, an American multinational corporation that
  provides hosting for software development and version control with the
  usage of Git. It is the default package manager for the JavaScript
  runtime environment Node.js. It consists of a command line client,
  also called npm, and an online database of public and paid-for private
  packages, called the npm registry. The registry is accessed via the
  client, and the available packages can be browsed and searched via the
  npm website. The package manager and the registry are managed by npm,
  Inc.`,
    `Менеджер пакетов или система управления пакетами - это набор
  программные инструменты, автоматизирующие процесс установки, обновления,
  настройка и удаление компьютерных программ для работы на компьютере
  систему согласованным образом. [1] Менеджер пакетов занимается
  пакеты, дистрибутивы программного обеспечения и данные в архивных файлах.
  Пакеты содержат метаданные, такие как название программного обеспечения, описание
  его назначение, номер версии, поставщик, контрольная сумма (желательно
  криптографическая хеш-функция) и список зависимостей, необходимых для
  программное обеспечение для правильной работы. После установки метаданные хранятся в
  локальная база данных пакетов. Менеджеры пакетов обычно поддерживают
  база данных программных зависимостей и информации о версии для предотвращения
  несоответствие программного обеспечения и отсутствие предварительных условий. Они тесно сотрудничают с
  программные репозитории, менеджеры двоичных репозиториев и магазины приложений.
  Менеджеры пакетов разработаны таким образом, чтобы исключить необходимость в ручном
  устанавливает и обновляет. Это может быть особенно полезно для больших
  предприятия, операционные системы которых обычно состоят из
  сотни или даже десятки тысяч различных программных пакетов [2].
  Npm (первоначально сокращение от Node Package Manager) [4] - это пакет
  менеджер для языка программирования JavaScript. npm, Inc. является
  дочерняя компания GitHub, американской транснациональной корпорации, которая
  предоставляет хостинг для разработки программного обеспечения и контроля версий с
  использование Git. Это менеджер пакетов по умолчанию для JavaScript.
  среда выполнения Node.js. Он состоит из клиента командной строки,
  также называемый npm, и онлайн-база данных общедоступных и оплачиваемых частных
  пакеты, называемые реестром npm. Доступ к реестру осуществляется через
  клиент, а доступные пакеты можно просматривать и искать через
  веб-сайт npm. Менеджером пакетов и реестром управляет npm,
  Inc.`,
    `Менеджер пакетів або система управління пакетами - це сукупність
  програмні засоби, що автоматизують процес встановлення, оновлення,
  налаштування та видалення комп’ютерних програм для роботи комп’ютера
  системою послідовно. [1] З цим має справу менеджер пакетів
  пакети, розподіл програмного забезпечення та даних в архівних файлах.
  Пакети містять метадані, такі як назва програмного забезпечення, опис
  його призначення, номер версії, постачальника, контрольну суму (бажано a
  криптографічна хеш-функція) та список залежностей, необхідних для
  програмне забезпечення для належної роботи. Після встановлення метадані зберігаються в
  локальна база даних пакетів. Менеджери пакетів зазвичай підтримують a
  база даних програмних залежностей та інформація про версію для запобігання
  невідповідність програмного забезпечення та відсутні передумови. Вони тісно співпрацюють з
  сховища програмного забезпечення, менеджери бінарних сховищ та магазини програм.
  Менеджери пакетів призначені для усунення потреби в ручному використанні
  встановлює та оновлює. Це може бути особливо корисно для великих
  підприємства, операційні системи яких зазвичай складаються з
  сотні або навіть десятки тисяч різних програмних пакетів. [2].
  Npm (спочатку скорочення від Node Package Manager) [4] - це пакет
  менеджер мови програмування JavaScript. npm, Inc. є
  дочірня компанія GitHub, американської транснаціональної корпорації, яка
  надає хостинг для розробки програмного забезпечення та контролю версій за допомогою
  використання Git. Це менеджер пакунків за замовчуванням для JavaScript
  середовище виконання Node.js. Він складається з клієнта командного рядка,
  також називається npm та онлайн-база даних загальнодоступних та платних приватних
  пакунки, що називається реєстром npm. Доступ до реєстру здійснюється через
  клієнт, а доступні пакети можна переглядати та шукати через
  веб-сайт npm. Менеджером пакетів та реєстром керує npm,
  Inc.`
  );
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{npm}</h1>
        <p className={styled.content}>{npmText}</p>
      </div>
    </section>
  );
};

export default NpmPage;
