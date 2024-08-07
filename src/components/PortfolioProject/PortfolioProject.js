import carrental from '../../assets/portfolio/carrental.png';
import travelagency from '../../assets/portfolio/travelagency.png';
import visitkelcyra from '../../assets/portfolio/visitkelcyra.png';
import landingpage from '../../assets/portfolio/landingpage.png';
import phoneshop from '../../assets/portfolio/mobileshop.png';
import portfolio from '../../assets/portfolio/portfolio.png';
import realestatephoto from '../../assets/portfolio/realestatephoto.png';




export const projects = [

    {
      title: 'Visit kelcyra ',
      photo: visitkelcyra,
      link: 'https://visitkelcyra.netlify.app/',
      text: `This is a website that promotes the tourism of the Kelcyra region. 
      The website is made with React and Material UI.
      The website is full responsive and is under Construction. It have a navbar menu a landing page 
      and used all material ui component like grid box css element and may other librayr like 
      react-awesome-slider-new react-image-gallery, react-responsive-carousel, react-show-more-text
      The website is hosted on Netlify.`
    },
    {
      title: 'Travel Agency',
      photo: travelagency,
      link: 'https://dynamicsunflower.netlify.app/',
      text: `This is a website that promotes a travel agency.It have a landing page with 8 sections,
      navbar menu, footer, and a contact us form.Login, signup and register form,  with firebase as backend.It have 
      all CRUD operations to create new touristick packages ,modify and save delete them after sign in as admin.
      It have a form for traveler to complete and is validated and error handled.
       The website is made with React and Material UI and used redux toolkit to handle complex 
       state management.Other library are used like, axios to fetch data from firebase, 
       react-collapsed, react-countup etc.`
    },
    {
        title: 'Rent Car App',
        photo: carrental,
        link: 'https://boisterous-fairy-ae0f9a.netlify.app/',
        text: `This is a rent car app that is made with React and Sass for design. The app is full responsive a
         It have a navbar menu a landing page.It have a form to complete with car props to choose for travel.All forms are validated
         .The app is hosted on Netlify.`
      },
      {
        title: 'Landing Page',
        photo: landingpage,
        link: 'https://exquisite-churros-18127b.netlify.app/',
        text: `This is a landing page that is made with React and Material UI.
        This web has been made with mui and used some MUI 
        components to adapt on the Pages. The page is full responsive and is hosted on Netlify.`
      },
      {
        title: 'Portfolio Project',
        photo: portfolio,
        link: 'https://example.com/project2',
        text: `This is a portfolio project that is made with React and Material UI.It have a
         navbar menu a landing page, a contact form, about us page and a footer.
        The website is full responsive and contain other elements like cards, css effects, 
        change web color to dark and represent some of my app
         and is hosted on Netlify.`
      },
      {
        title:'Real Estate App',
        photo: realestatephoto,
        link: 'https://realestatefigma.netlify.app',
        text: `A real estate website is an online platform where users can browse and search for properties 
        such as houses, apartments, land, and commercial spaces. It typically features detailed listings with 
        photos, descriptions, and sometimes virtual tours or videos of the properties. Users can filter their 
        searches based on location, price range, property type, and other criteria. Real estate websites often 
        provide tools for contacting agents or sellers, scheduling viewings, and even applying for mortgages or 
        rentals. They serve as a central hub for both buyers looking for their dream property and sellers 
        aiming to showcase their listings to a wide audience.`
      } ,
      {
        title: 'Simple phoneshop app',
        photo: phoneshop,
        link: 'https://celadon-quokka-3601b4.netlify.app/',
        text: `This website is a simple website with a simple store to by items.
        It has add to card item which is managd with react redux and the state is managed 
        with redux for adding and removing items from card.`
      }
  ];