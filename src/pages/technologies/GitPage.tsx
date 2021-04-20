import React from 'react';
import styled from './scss/ComonentDetail.module.scss';
import useLanguages from '../../hooks/useLanguages';
import useDarkThemeContext from '../../hooks/useDarkThemeContext';

const GitPage = () => {
  const { darkTheme } = useDarkThemeContext(styled);
  const git = 'Git';
  const { currentLanguage: gitText } = useLanguages(
    `Git (/ɡɪt/)[7] is a distributed version-control system for tracking
  changes in any set of files, originally designed for coordinating work
  among programmers cooperating on source code during software
  development.[8] Its goals include speed, data integrity, and support
  for distributed, non-linear workflows[clarification
  needed].[9][10][11] Git was created by Linus Torvalds in 2005 for
  development of the Linux kernel, with other kernel developers
  contributing to its initial development.[12] Since 2005, Junio Hamano
  has been the core maintainer. As with most other distributed
  version-control systems, and unlike most client–server systems, every
  Git directory on every computer is a full-fledged repository with
  complete history and full version-tracking abilities, independent of
  network access or a central server.[13] Git is free and open-source
  software distributed under GNU General Public License Version 2.`,
    `Git (/ ɡɪt /) [7] - это распределенная система контроля версий для отслеживания
  изменения в любом наборе файлов, изначально предназначенных для координации работы
  среди программистов, работающих над исходным кодом во время разработки программного обеспечения
  развитие. [8] Его цели включают скорость, целостность данных и поддержку.
  для распределенных нелинейных рабочих процессов [пояснение
  необходимо]. [9] [10] [11] Git был создан Линусом Торвальдсом в 2005 году для
  разработка ядра Linux с другими разработчиками ядра
  способствуя его первоначальному развитию. [12] С 2005 года Хунио Хамано
  был основным сопровождающим. Как и в большинстве других распространенных
  системы контроля версий, и, в отличие от большинства клиент-серверных систем, каждая
  Каталог Git на каждом компьютере представляет собой полноценный репозиторий с
  полная история и возможность полного отслеживания версий, независимо от
  доступ к сети или центральный сервер. [13] Git бесплатный и с открытым исходным кодом
  программное обеспечение, распространяемое под лицензией GNU General Public License версии 2.`,
    `Git (/ ɡɪt /) [7] - це розподілена система контролю версій для відстеження
  зміни в будь-якому наборі файлів, спочатку призначених для координації роботи
  серед програмістів, які співпрацюють над вихідним кодом під час програмного забезпечення
  розвитку. [8] Його цілі включають швидкість, цілісність даних та підтримку
  для розподілених, нелінійних робочих процесів [роз'яснення
  потрібно]. [9] [10] [11] Git був створений Лінусом Торвальдсом в 2005 році для
  розробка ядра Linux разом з іншими розробниками ядра
  сприяючи його початковому розвитку. [12] З 2005 року Хуніо Хамано
  був основним супроводжувачем. Як і у більшості інших розподілених
  системи контролю версій, і на відміну від більшості систем клієнт-сервер, кожен
  Каталог Git на кожному комп'ютері - це повноцінне сховище з
  повна історія та можливості повного відстеження версій, незалежно від
  доступ до мережі або центральний сервер. [13] Git є безкоштовним та відкритим
  програмне забезпечення, що поширюється під загальною публічною ліцензією GNU, версія 2.`,
  );
  return (
    <section className={darkTheme}>
      <div className="container">
        <h1 className={styled.title}>{git}</h1>
        <p className={styled.content}>{gitText}</p>
      </div>
    </section>
  );
};
export default GitPage;
