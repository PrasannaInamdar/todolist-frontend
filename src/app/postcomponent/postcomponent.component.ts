import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  selector: 'app-postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent  {
  
  tasks: any[];
  valuetobeUpdated;
  idOfValuetobeUpdated;
  constructor(private http:Http) {
    http.get('http://localhost:5000/items')
      .subscribe(response=>{
        console.log(response.json());
        this.tasks = response.json();
      })
      }
      onRowClick(event, id){
          console.log(event.target.outerText, id);
          this.valuetobeUpdated = event.target.outerText;
          this.idOfValuetobeUpdated = id;
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
      });
    });
    task.value='';  
  }

  updatePost(post){
    alert(this.valuetobeUpdated);
    let updateMe = {uid:this.idOfValuetobeUpdated, newTask:this.valuetobeUpdated};
    this.http.put('http://127.0.0.1:5000/item/'+post.taskname,JSON.stringify(updateMe))
    .subscribe(response=>{
      console.log(response);
    });
  }

  deletePost(post){
    this.http.delete('http://127.0.0.1:5000/item/'+post.taskname)
    .subscribe(response=>{
      this.http.get('http://127.0.0.1:5000/items').subscribe(response=>{
        this.tasks = response.json();
      });
    });
  }
  

}
