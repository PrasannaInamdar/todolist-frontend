import { PostcomponentComponent } from './../postcomponent/postcomponent.component';
import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-input-nsearch',
  templateUrl: './input-nsearch.component.html',
  styleUrls: ['./input-nsearch.component.css']
})
export class InputNsearchComponent  {

  constructor(private http:Http) { }



}
