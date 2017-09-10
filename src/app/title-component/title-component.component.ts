import { Component,  } from '@angular/core';

@Component({
  selector: 'app-title-component',
  template: `
  <div class = "jumbotron">
  <h1>{{title}}</h1>
  <p>To do list using flask RESTapi and Angular 4.</p> 
  </div>
  `,
 
})
export class TitleComponentComponent{

 title = "To Do List";


}
