import Image from 'next/image'


export default {
// --------------- Start Header Details ---------------------
    name: "Anthony",
    headerTagline: [
      "Full Stack Developer,",
      "Content Specialist",
      "and Student",
    ],

    headerParagraph:
    "My professional background is in E-commerce, and have held roles from front facing client services to back-office inventory planning/fulfillment. As an avid believer in continuous learning, I have been lucky enough to have found a path to becoming a developer. ",

    contactEmail: "anthony.mai530@gmail.com",

// --------------- End Header Details ------------------------
    projects: [
    {
      title: "CoinMarketCap-CLI", //Project Title - Add Your Project Title Here
      para:
        "Simple Ruby Gem that scrapes and returns top 100 Cryptocurrencies, market cap, and current price from your CLI.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        <Image src="/images/CLI-Image.jpeg"/>,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/AnthonyM5/CoinMarketCap-CLI",
    },
    {
      title: "Food-Nutrient-App", //Project Title - Add Your Project Title Here
      para:
        "Rails based application that is built on Food Data Central API to search through food database, and sort by nutrient values.  Users can save meals and leave comments", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        <Image src="/images/foodApp.jpeg"/>,
      //Project URL - Add Your Project Url Here
      url: "https://foodnutrient-mvp-build.herokuapp.com/",
    },
    {
      title: "React-Nutrient-App", //Project Title - Add Your Project Title Here
      para:
        "React/Redux based Single Page App that is built on USDA Food Data API.  Prediction tool uses Mobilent to identify your meal from an image, and  users can instantly search foods and sort by nutrient values.  ", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        <Image src="/images/nutrientreact.jpeg"/>,
      //Project URL - Add Your Project Url Here
      url: "https://nutrient-react-front.herokuapp.com/",
    }
    ],

// About Secton --------------
aboutParaOne:
"   Since 2019 I have served as a Content Specialist for AJ Madison where I have been part of a content team that utilizes a custom CMS to build/update product pages, and as part of a larger merchandising team that has generated revenue increase of 50%+ YOY.  We coordinate with large appliance manufacturers to update a large online appliance catalog, provide up to date content assets, and build/update product pages in real time via a custom Content Management System.  In a project management role, I oversee an overseas team to help perform periodic audits of existing product SKUs, and implement new experiences.",

aboutParaTwo:
"   My technical experience in developing a Ruby on Rails application with PostgreSQL has taught me how to define data base models, set up relationships, apply RESTFUL conventions to CRUD routes and practice with APIs.  The deployment phase of the application process taught me to optimize memory usage, and use search queries that limited the number of times requests were made.  My experience developing a React/Redux single page application provided me the opportunity to learn about JavaScript's event delegation, React Routing, and combine this knowledge to utilize Ruby on Rails as an API.",
// aboutParaThree:
//   "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
aboutImage:
  <Image src="images/portrait.jpeg"/>,

//   End About Section ---------------------

// Skills Section ---------------

//   Import Icons from the top and link it here

skills: [
  {
    img: <Image src="/images/html.svg"/>,
    para:
      "Experienced with HTML5 semantics like Sections Outlines, Audio/Video Embedding, Web Forms, and more.",
  },
  {
    img: <Image src="/images/javascript.svg"/>,
    para:
      "Strong familiarty with OOP, CRUD principles, and experienced with ES6 and Javascript APIs like events, history, in conjunction with Fetch API.",
  },
  {
    img: <Image src="/images/ruby.png"/>,
    para:
      "Strong background in Ruby Syntax, OOP principles and CRUD actions in MVC platform.  Experienced with datatypes and troubleshooting with IRB" 
  },
  {
    img: <Image src="/images/React.png"/>,
    para:
      "Experienced with React design patterns, JSX, DOM manipulation and event handlers. Strong familiarity with routing and connecting to Redux state management.",
  },
  {
    img: <Image src="/images/Redux.png"/>,
    para:
      "Experienced with actions-reducers, data-flow via props, state management via reducers/actions, and store",
  },
  {
    img: <Image src="/images/Rails-Logo.svg"/>,
    para:
      "Experienced with Rails as an MVC, and as back-end API.  Strong familiarity with ActiveRecord and associations, postgreSQL and more.",
  },
],

contactSubHeading: "Follow me via my Blog, LinkedIn, or Github",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: <Image src="images/octojekyll.png"/>,
      url: "https://anthonym5.github.io/my-awesome-blog/",
    },
    {
      img: <Image src="/images/linkedin.png"/>,
      url: "https://www.linkedin.com/in/anthonymai5/",
    },
    { img: <Image src="images/github.svg"/>, 
      url: "https://github.com/AnthonyM5" 
    },
    ],

}