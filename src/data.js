import htmlImg from "./assets/htmlImg.png";
import cssImg from "./assets/cssImg.png";
import jsImg from "./assets/jsImg.png";
import responsiveImg from "./assets/resWD.png";

export const CORE_CONCEPTS = [
  {
    image: htmlImg,
    title: "HTML",
    description:
      "Hypertext Markup Language - the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    image: cssImg,
    title: "CSS",
    description:
      "Cascading Style Sheets - a style sheet language used for describing the look and formatting of a document written in HTML.",
  },
  {
    image: jsImg,
    title: "JavaScript",
    description:
      "A high-level, interpreted programming language that enables interactive web pages. It is an essential technology for building dynamic, client-side applications.",
  },
  {
    image: responsiveImg,
    title: "Responsive Design",
    description:
      "Designing web pages to provide an optimal viewing and interaction experience across a wide range of devices, from desktop monitors to mobile phones.",
  },
];

export const EXAMPLES = {
  html: {
    title: "HTML",
    description:
      "HTML provides the structure of a webpage, defining elements like headings, paragraphs, links, images, and more.",
    code: `
<!DOCTYPE html>
<html>
<head>
  <title>My Webpage</title>
</head>
<body>
  <h1>Welcome to My Webpage</h1>
  <p>This is a sample HTML content.</p>
</body>
</html>
`,
  },
  css: {
    title: "CSS",
    description:
      "CSS is used for styling and layout. It allows you to control the presentation of HTML elements.",
    code: `
body {
  background-color: #f0f0f0;
  font-family: 'Arial', sans-serif;
  color: #333;
}

h1 {
  color: #008080;
}
`,
  },
  javascript: {
    title: "JavaScript",
    description:
      "JavaScript adds interactivity and dynamic behavior to web pages. It can handle user events, manipulate the DOM, and communicate with servers.",
    code: `
document.getElementById('demo').innerHTML = 'Hello, JavaScript!';
`,
  },
  responsiveDesign: {
    title: "Responsive Design",
    description:
      "Creating web designs that adapt to different screen sizes, ensuring a seamless user experience on desktops, tablets, and mobile devices.",
    code: `
@media only screen and (max-width: 600px) {
  body {
    font-size: 14px;
  }
}
`,
  },
};
