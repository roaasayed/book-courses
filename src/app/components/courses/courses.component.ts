import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  months: string[] = [
    '1','2','3','4','5','6','7','8','9','10','11','12'
  ];

  toppings = new FormControl('');


}
