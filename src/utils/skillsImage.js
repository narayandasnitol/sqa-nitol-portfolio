import bootstrap from '../assets/svg/skills/bootstrap.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import csharp from '../assets/svg/skills/csharp.svg'
import css from '../assets/svg/skills/css.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import html from '../assets/svg/skills/html.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import selenium from '../assets/svg/skills/selenium.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'

import figma from '../assets/svg/skills/figma.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import cypress from '../assets/svg/skills/cypress.svg'
import canva from '../assets/svg/skills/canva.svg'
import jira from '../assets/svg/skills/jira.svg'
import automation from '../assets/svg/skills/automation.svg'
import postman from '../assets/svg/skills/postman.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case "cypress":
        return cypress;
      case "jira":
        return jira;
      case "automation":
        return automation;
        case "postman":
          return postman;
      case "html":
        return html;
      case "css":
        return css;
      case "javascript":
        return javascript;
      case "react":
        return react;
      case "bootstrap":
        return bootstrap;
      case "mongodb":
        return mongoDB;
      case "mysql":
        return mysql;
      case "c++":
        return cplusplus;
      case "c#":
        return csharp;
      case "java":
        return java;
      case "php":
        return php;
      case "python":
        return python;
      case "git":
        return git;
      case "graphql":
        return graphql;
      case "materialui":
        return materialui;
      case "selenium":
        return selenium;
      case "wordpress":
        return wordpress;
      case "figma":
        return figma;
      case "microsoft office":
        return microsoftoffice;
      case "canva":
        return canva;
      default:
        break;
    }
}
