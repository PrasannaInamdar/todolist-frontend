import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
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
      });
      }

      onRowClick(event, id){
          console.log(event.target.outerText, id);
          this.valuetobeUpdated = event.target.outerText;
          this.idOfValuetobeUpdated = id;
      }

  createPost(task : HTMLInputElement){
    let post = {taskname:task.value};    
    this.http.post('http://127.0.0.1:5000/item/'+task.value,JSON.stringify(post))
    .subscribe(response=>{  
     console.log(response);
    });
    task.value='';  
    location.reload();
  }

  updatePost(post){
    alert(this.valuetobeUpdated);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let updateMe = {uid:this.idOfValuetobeUpdated, newTask:this.valuetobeUpdated};
    this.http.put('http://127.0.0.1:5000/item/'+post.taskname,JSON.stringify(updateMe),options)
    .subscribe(response=>{
      console.log(response);
    });
    location.reload();
  }

  deletePost(post){
    this.http.delete('http://127.0.0.1:5000/item/'+post.taskname)
    .subscribe(response=>{
      console.log(response);
    });
    location.reload();
  }
  

}
