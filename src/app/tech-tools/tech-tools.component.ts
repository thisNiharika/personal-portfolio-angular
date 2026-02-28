import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-tools',
  standalone: true,
  imports: [],
  templateUrl: './tech-tools.component.html',
  styleUrl: './tech-tools.component.css'
})
export class TechToolsComponent {

  tools: string = `I actively use a diverse set of cutting-edge technologies and tools in my daily work. From
                modern frameworks and
                languages to powerful platforms, my toolkit ensures high-quality and efficient development. 🚀 🌟`
  items: Array<any> = [
    {
      name: "Linux",
      description: "Linux is an open-source operating system widely used for servers, development environments, and enterprise systems.",
      link: "https://www.kernel.org/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    },
    {
      name: "Angular",
      description: "Angular is a powerful frontend framework for building scalable, enterprise-grade web applications.",
      link: "https://angular.io/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
    },
    {
      name: "HTML5",
      description: "HTML5 is the standard markup language for building modern web applications.",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS3",
      description: "CSS3 is used to style and design responsive, visually engaging web interfaces.",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "Bootstrap",
      description: "Bootstrap is a popular CSS framework for building responsive and mobile-first websites.",
      link: "https://getbootstrap.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
      name: "TypeScript",
      description: "TypeScript enhances JavaScript with static typing for scalable application development.",
      link: "https://www.typescriptlang.org/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    {
      name: "JavaScript",
      description: "JavaScript enables interactive and dynamic behavior in modern web applications.",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "Next.js",
      description: "Next.js is a React framework for production-ready web applications with SSR and static generation.",
      link: "https://nextjs.org/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
    },
    {
      name: "Vue.js",
      description: "Vue.js is a progressive JavaScript framework for building user interfaces.",
      link: "https://vuejs.org/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
    },
    {
      name: "Node.js",
      description: "Node.js allows JavaScript to run on the server side for scalable backend development.",
      link: "https://nodejs.org/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "PHP",
      description: "PHP is a widely-used server-side scripting language for web development.",
      link: "https://www.php.net/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      name: "Laravel",
      description: "Laravel is a PHP framework designed for elegant and scalable web applications.",
      link: "https://laravel.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
    },
    {
      name: "MySQL",
      description: "MySQL is a relational database management system used in web applications.",
      link: "https://www.mysql.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "Azure",
      description: "Microsoft Azure provides cloud computing services for building and managing applications.",
      link: "https://azure.microsoft.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
    },
    {
      name: "WordPress",
      description: "WordPress is a leading CMS platform for building dynamic websites and blogs.",
      link: "https://wordpress.org/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
    },
    {
      name: "GitHub",
      description: "GitHub is a version control and collaboration platform for developers.",
      link: "https://github.com/thisNiharika",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "GitLab",
      description: "GitLab is a DevOps platform for source code management and CI/CD.",
      link: "https://gitlab.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
    },
    {
      name: "Jira",
      description: "Jira is a project management and issue-tracking tool widely used in agile teams.",
      link: "https://www.atlassian.com/software/jira",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg"
    },
    {
      name: "Figma",
      description: "Figma is a collaborative interface design tool for UI/UX development.",
      link: "https://www.figma.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      name: "VS Code",
      description: "Visual Studio Code is a lightweight yet powerful source-code editor.",
      link: "https://code.visualstudio.com/",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    }
  ];
}
