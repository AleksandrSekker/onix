import React from "react";
import { useSelector } from "react-redux";
import useLanguages from "../../hooks/useLanguages";
import { selectCheck } from "../../redux/checkedSlice";
import styled from "./scss/ComonentDetail.module.scss";

export const VcsPage = () => {
  const checked = useSelector(selectCheck);
  const vcs = "VCS";
  const { currentLanguage: vcsText } = useLanguages(
    `In software engineering, version control (also known as revision
    control, source control, or source code management) is a class of
    systems responsible for managing changes to computer programs,
    documents, large web sites, or other collections of information.
    Version control is a component of software configuration
    management.[1] Changes are usually identified by a number or letter
    code, termed the 'revision number', 'revision level', or simply
    'revision'. For example, an initial set of files is 'revision 1'. When
    the first change is made, the resulting set is 'revision 2', and so
    on. Each revision is associated with a timestamp and the person making
    the change. Revisions can be compared, restored, and with some types
    of files, merged. The need for a logical way to organize and control
    revisions has existed for almost as long as writing has existed, but
    revision control became much more important, and complicated, when the
    era of computing began. The numbering of book editions and of
    specification revisions are examples that date back to the print-only
    era. Today, the most capable (as well as complex) revision control
    systems are those used in software development, where a team of people
    may concurrently make changes to the same files. Version control
    systems (VCS) are most commonly run as stand-alone applications, but
    revision control is also embedded in various types of software such as
    word processors and spreadsheets, collaborative web docs[2] and in
    various content management systems, e.g., Wikipedia's page history.
    Revision control allows for the ability to revert a document to a
    previous revision, which is critical for allowing editors to track
    each other's edits, correct mistakes, and defend against vandalism and
    spamming in wikis.`,
    `В разработке программного обеспечения контроль версий (также известный как пересмотр
      контроль, управление исходным кодом или управление исходным кодом) - это класс
      системы, отвечающие за управление изменениями в компьютерных программах,
      документы, большие веб-сайты или другие сборники информации.
      Контроль версий - это компонент конфигурации программного обеспечения.
      управление. [1] Изменения обычно обозначаются цифрой или буквой.
      код, называемый "номер редакции", "уровень редакции" или просто
      «пересмотр». Например, начальный набор файлов - «редакция 1». Когда
      первое изменение сделано, результирующим набором будет "версия 2", и поэтому
      на. Каждая ревизия связана с меткой времени и лицом, вносящим
      изменение. Редакции можно сравнивать, восстанавливать и с некоторыми типами
      файлов, объединенных. Потребность в логическом способе организации и контроля
      исправления существуют почти столько же, сколько существует письменность, но
      контроль версий стал намного более важным и сложным, когда
      началась эра вычислительной техники. Нумерация книжных изданий и
      изменения спецификации являются примерами, которые относятся к версии только для печати.
      эпоха. На сегодняшний день самый эффективный (а также сложный) контроль версий
      системы - это те, которые используются при разработке программного обеспечения, где команда людей
      может одновременно вносить изменения в одни и те же файлы. Управление версиями
      системы (VCS) чаще всего запускаются как автономные приложения, но
      контроль версий также встроен в различные типы программного обеспечения, например
      текстовые редакторы и электронные таблицы, совместные веб-документы [2] и в
      различные системы управления контентом, например, история страниц Википедии.
      Контроль версий позволяет вернуть документ в
      предыдущая версия, которая имеет решающее значение для того, чтобы редакторы могли отслеживать
      редактировать друг друга, исправлять ошибки и защищаться от вандализма и
      рассылка спама в вики.`,
    `У програмній інженерії контроль версій (також відомий як перегляд
        управління, управління джерелом або управління вихідним кодом) - це клас
        системи, відповідальні за управління змінами в комп'ютерних програмах,
        документи, великі веб-сайти чи інші колекції інформації.
        Контроль версій є складовою конфігурації програмного забезпечення
        управління. [1] Зміни, як правило, визначаються цифрою або літерою
        код, що називається "номер редакції", "рівень редакції" або просто
        'перегляд'. Наприклад, початковий набір файлів - це "версія 1". Коли
        зроблено першу зміну, отриманий набір - «перегляд 2», і так
        на. Кожна редакція пов’язана з позначкою часу та особою, яка її робить
        зміни. Версії можна порівняти, відновити та з деякими типами
        файлів, об’єднаних. Необхідність логічного способу організації та контролю
        ревізії існували майже стільки ж, скільки існувала писемність, але
        контроль за переглядом став набагато важливішим і складнішим, коли
        почалася ера обчислювальної техніки. Нумерація книжкових видань та
        редакції специфікацій - це приклади, що датуються лише друком
        епохи. На сьогоднішній день найбільш здатний (як і складний) контроль перегляду
        системи - це ті, що використовуються при розробці програмного забезпечення, де працює команда людей
        можуть одночасно вносити зміни в ті самі файли. Контроль версій
        системи (VCS) найчастіше працюють як окремі програми, але
        контроль версій також вбудований у різні типи програмного забезпечення, наприклад
        текстові процесори та електронні таблиці, спільні веб-документи [2] та в
        різні системи управління вмістом, наприклад, історія сторінок Вікіпедії.
        Контроль редагування дозволяє повернути документ у формат
        попередня редакція, що є критично важливим для відстеження редакторів
        редагувати один одного, виправляти помилки та захищати від вандалізму та
        спам у вікі.`
  );
  return (
    <section className={checked ? styled.dark : ""}>
      <div className='container'>
        <h1 className={styled.title}>{vcs}</h1>
        <p className={styled.content}>{vcsText}</p>
      </div>
    </section>
  );
};
