import { TasksService } from './../tasks.service';
import { Component,  } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent  {

tasks;

constructor(service:TasksService){

  this.tasks = service.getTasks();
}

}
