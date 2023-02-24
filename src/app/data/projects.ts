export interface Project {
  name: string,
  id: string,
  description: string,
  image: string,
  git: string,
  link: string
};

export const projects: Project[] = [
  {
    name: 'Inventory Management',
    id: 'inventoryManagement',
    description: '',
    image: '',
    git: 'https://github.com/davidyeungcoding/inventory-management',
    link: 'https://inventory-management-dy22.herokuapp.com/'
  }, {
    name: 'Medical Dispatch App',
    id: 'medicalDispatchApp',
    description: 'The concept behind this project was to have a platform for dispatchers to see which doctors are available at a glance and be able to confirm their status via the built in messaging system before sending the patient the doctor\'s contact information. Built with the MEAN stack, Twilio, Socket.IO, TypeScript, jQuery, Bootstrap, HTML and CSS.',
    image: '/assets/images/dispatch_lg.jpg',
    git: 'https://github.com/davidyeungcoding/dispatch-app',
    link: 'https://medical-consultation-dispatch.herokuapp.com/'
  }, {
    name: 'Socials',
    id: 'socials',
    description: 'A social media platform that allows users to connect and share their thoughts and opinions. Users can follow other users, create posts, tag users in their posts, and like or dislike posts from others. Built using the MEAN stack with FilePond, TypeScript, jQuery, Bootstrap, HTML and CSS.',
    image: '/assets/images/socials_lg.jpg',
    git: 'https://github.com/davidyeungcoding/login_app',
    link: 'https://socials-app.herokuapp.com/'
  }, {
    name: 'Memory Match',
    id: 'memoryMatch',
    description: 'This game was built to challenge user\'s ability to track objects while providing some entertainment in the process. Technologies used include Angular as the framework with TypeScript, jQuery, Bootstrap, HTML and CSS.',
    image: '/assets/images/memory_match_lg.jpg',
    git: 'https://github.com/davidyeungcoding/memory_game',
    link: 'https://davidyeungcoding.github.io/memory_game/'
  // }, {
  //   name: 'Cookie Finder',
  //   id: 'cookieFinder',
  //   description: '',
  //   image: '/assets/images/cookie_finder.jpg',
  //   git: 'https://github.com/davidyeungcoding/Cookie_Finder',
  //   link: 'https://cookie-seller-app.herokuapp.com/'
  }, {
    name: 'Loiter',
    id: 'loiter',
    description: 'A group project from my time at a coding bootcamp designed for users to browse and purchase tickets for events while suggesting nearby locations where they can go to hangout. My primary role in the team was to implement the APIs used, HERE and Seatgeek, into the project.',
    image: '/assets/images/loiter_lg.jpg',
    git: 'https://github.com/davidyeungcoding/Loiter',
    link: 'https://americone-dream.github.io/Loiter/'
  }
];
