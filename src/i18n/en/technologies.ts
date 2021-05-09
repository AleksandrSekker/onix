const technologies = {
  css: `Cascading Style Sheets (CSS) is a style sheet language used for
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
  git: `Git (/ɡɪt/)[7] is a distributed version-control system for tracking
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
  html: `Hypertext Markup Language (HTML) is the standard markup language for
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
  node: `Node.js is an open-source, cross-platform, back-end, JavaScript
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
  npm: `A package manager or package-management system is a collection of
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
  vsc: `In software engineering, version control (also known as revision
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
    spamming in wikis.`
};
export default technologies;
