import { Component, OnInit } from '@angular/core';
import * as M from '../assets/materialize/js/materialize.min.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'appAng';
  options = {};

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function() {
      const elems = document.querySelectorAll('.carousel');
      const instances = M.Carousel.init(elems, this.options);
    });
  }
}
