import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-techs',
  standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './techs.component.html',
    styleUrl: './techs.component.css'
})
export class TechsComponent {

  floatingTech = [
    { name: 'HTML5', image: 'assets/img/html5.svg', link: null },
    { name: 'Angular', image: 'assets/img/angular17.svg', link: 'https://angular.io' },
    { name: 'MySQL', image: 'assets/img/mysql.svg', link: 'https://www.mysql.com/' },
    { name: 'GitHub', image: 'assets/img/github.svg', link: 'https://github.com/' },
    { name: 'JavaScript', image: 'assets/img/js.svg', link: null },
    { name: 'Jira', image: 'assets/img/jira.svg', link: 'https://www.atlassian.com/software/jira' },
    { name: 'Tailwind CSS', image: 'assets/img/tailwindcss.svg', link: 'https://tailwindcss.com/' },
    { name: 'Postman', image: 'assets/img/postman.svg', link: 'https://www.postman.com/' },
    { name: 'Laravel', image: 'assets/img/laravel.svg', link: 'https://laravel.com/' }
  ];

}
