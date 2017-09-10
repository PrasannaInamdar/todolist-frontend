import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent  {
  
  tasks: any[];

  constructor(private http:Http) {
    http.get('http://localhost:5000/items')
      .subscribe(response=>{
        console.log(response.json());
        this.tasks = response.json();
      })
      }

      editBtnClicked(){
        alert();
   }

  createPost(task : HTMLInputElement){
  
    let post = {taskname:task.value};
    
    this.http.post('http://127.0.0.1:5000/item/'+task.value,JSON.stringify(post))
    .subscribe(response=>{  
      this.http.get('http://localhost:5000/items').subscribe(response=>{
        this.tasks = response.json();
      })
    });
    task.value='';
    
  }

}
