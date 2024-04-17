
import reactimage from '../../assets/homepage/reactimage.webp';
import css from '../../assets/homepage/css.png';
import javascript from '../../assets/homepage/javascript.webp';
import mui from '../../assets/homepage/mui.png';


const AboutUsContent = [
    { title: 'ReactJS', 
    text: `Component-Based Architecture: React emphasizes reusable components 
            for building UI.JSX: JSX blends HTML-like syntax with JavaScript for
            UI development.State and Props: Manage component data with state 
            and pass data via props. Lifecycle & Hooks: Utilize lifecycle 
            methods/hooks for managing component behavior..`
},
    { title: 'Javascript', 
    text: `Syntax & Data Types: Understand JavaScript's syntax and fundamental
            data types like strings, numbers, arrays, and objects.
            Functions & Scope: Know how to define and call functions, handle 
            scope (global vs. local), and use function expressions.
            DOM Manipulation: Interact with the Document Object Model (DOM) 
            to dynamically modify HTML elements and styles.
            Asynchronous Programming: Learn asynchronous concepts like 
            callbacks, promises, and async/await for handling tasks like 
            fetching data or making API calls..`
    },
    { title: 'Material-UI and Sass', 
    text: `I can use Material-UI (MUI) to quickly build responsive and visually 
    appealing React applications following Google's Material Design principles. With Sass, 
    they can enhance their CSS workflow by using variables, mixins, and nesting to write
     more organized and maintainable stylesheets, which can then be compiled into regular
      CSS for use in web projects. Combining MUI for UI components and Sass for 
    styling can lead to efficient development and improved code quality in web applications` 
},
    { title: 'APIs and RESTful Services', 
    text: `APIs and RESTful Services: Understand the basics of APIs and RESTful
    Fetch API and Axios are tools for making HTTP requests in JavaScript. I can
    can use them to fetch data from servers asynchronously, 
    manage loading states, and update component or global state based on 
    the retrieved data.` 
},
  ];
  
  export default AboutUsContent;

  export const skills = 
  ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Material-UI', 'Firebase', 'SASS', 'Redux_toolkit'
];
   


export const ImageContent = [
    {image : reactimage, alt: 'React'},
    {image : css, alt: 'CSS'},
    {image : javascript, alt: 'JavaScript'},
    {image : mui, alt: 'Material-UI'},
   
]