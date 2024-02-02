import cypress from '../assets/svg/projects/cypress.svg'
import selenium from '../assets/svg/projects/selenium.svg'
import duck from '../assets/svg/projects/duck.svg'
import android from '../assets/svg/projects/android.svg'


export const projectsData = [
  {
    id: 1,
    projectName: "Selenium Practice Project",
    projectDesc: "A demo project of selenium for practice only",
    tags: ["JAVA", "TestNG"],
    code: "https://github.com/narayandasnitol/Selenium_Practice_Project",
    demo: "https://github.com/narayandasnitol/Selenium_Practice_Project",
    image: selenium,
  },
  {
    id: 2,
    projectName: "Cypress Automation Practice Project",
    projectDesc: "A demo project of cypress for practice only",
    tags: ["Javascript", "NodeJS"],
    code: "https://github.com/narayandasnitol/Cypress_Automation_Project",
    demo: "https://github.com/narayandasnitol/Cypress_Automation_Project",
    image: cypress,
  },
  {
    id: 3,
    projectName: "Nop Station Cart App Automation",
    projectDesc:
      "This project is basically a selenium project to automate a shopping cart and payment gateway",
    tags: ["JAVA", "TestNG"],
    code: "https://github.com/narayandasnitol/nopstationCart_App_Automation",
    demo: "https://github.com/narayandasnitol/nopstationCart_App_Automation",
    image: selenium,
  },
  {
    id: 4,
    projectName: "Shoot The Duck",
    projectDesc:
      "This is a 2D platform game created with Java. You can run this with Eclipse IDE",
    tags: ["JAVA"],
    code: "https://github.com/narayandasnitol/Shoot-The-Duck",
    demo: "https://www.youtube.com/watch?v=4NKwliPByCk",
    image: duck,
  },
  {
    id: 5,
    projectName: "AUST Class Manager",
    projectDesc: "An Android project using JAVA and Android Studio",
    tags: ["JAVA"],
    code: "https://github.com/narayandasnitol/Aust-Class-Manager",
    demo: "https://drive.google.com/file/d/1ZXgdjizHRYqKFbq_8NbZywCJ_JBhOro6/view?usp=sharing",
    image: android,
  }
];