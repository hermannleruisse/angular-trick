import { Component, OnInit, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DecimalPipe]
})

export class AppComponent implements OnInit{
  showFiller = true;
  constructor(){

  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

}
