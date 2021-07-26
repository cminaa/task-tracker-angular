import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { TASKS } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const options = { headers: new HttpHeaders({'Content-type':'application/json'}) }

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl='http://localhost:5000/tasks';
  constructor(private http:HttpClient ) { }

  getTasks(): Observable<Task[]>{
    const a= this.http.get<Task[]>(this.apiUrl);
  console.log(a)
  return a
  }

  deleteTask(task:Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task:Task) :  Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url,task,options);
  } 
  
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apiUrl,task,options);
  }
}
