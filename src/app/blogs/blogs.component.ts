import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {

  blogs: Array<any> = [
    {
      name: "Portfolio",
      description: "A personal portfolio website designed to display my development skills and blogs. This highlights my proficiency in Angular, and more.",
      image: "assets/img/portfolio.png",
      github: "https://github.com/thisNiharika",
      view: "#",
      status: false,
      date: "Augest - 2024",
      demo: false,
      personal: true,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Tailwind",
          image: "assets/img/tailwindcss.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "Figma",
          image: "assets/img/figma.svg",
        },
      ]
    },
    {
      name: "UI Play",
      description: "✨ Neumorphism shadows 🎨 Gradient combinations 📦 90+ Box shadow presets 🎬 CSS animations 🖼 Image filters (blur, hue, contrast, brightness) 🔤 Live typography editor 🟦 Border & radius generator Everything updates in real time — and you can copy clean CSS instantly.",
      image: "assets/img/uiplay.png",
      github: "https://github.com/thisNiharika/UIPlay",
      view: "https://thisniharika.github.io/UIPlay/",
      status: true,
      date: "Feb - 2024",
      demo: false,
      personal: true,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
      ]
    },
    {
      name: "100 Days Ui_Camp",
      description: "Unlock comprehensive efficiency and growth potential. Transform your operations today to boost workforce engagement and productivity",
      image: "assets/img/100.png",
      github: "https://github.com/thisNiharika/100daysUiCamp",
      view: "https://thisniharika.github.io/100daysUiCamp/",
      status: false,
      date: "May - 2025",
      demo: false,
      tech: [
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },
      ]
    },
    {
      name: "QR Genrator",
      description: "A real-time, fully customizable QR generator: Live updates (no generate button needed), Full color control (HEX + picker), Drag & drop logo support, Logo preview + remove option, Adjustable logo size and lot more...",
      image: "assets/img/hinez.png",
      github: "https://github.com/thisNiharika/QRGenerator",
      view: "https://qr-generator-xi-snowy.vercel.app/",
      status: false,
      date: "February - 2026",
      demo: false,
      tech: [
        {
          name: "Angular",
          image: "assets/img/angular17.svg",
        },
        {
          name: "Typescript",
          image: "assets/img/typescript.svg",
        },
        {
          name: "HTML",
          image: "assets/img/html5.svg",
        },
        {
          name: "CSS",
          image: "assets/img/css3.svg",
        },

      ]
    },
   
  ]
}
