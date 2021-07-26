import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private ts:TaskService) { }

  ngOnInit(): void {
    this.ts.getTasks().subscribe(val=>this.tasks=val)
  }

  deleteTask(task: Task) {
    this.ts.deleteTask(task).subscribe(()=>this.tasks=this.tasks.filter((t)=>t.id!==task.id))
  }

  toggleReminder(task: Task){
    task.reminder=!task.reminder;
    this.ts.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task){
    this.ts.addTask(task).subscribe(val=>this.tasks.push(val))
  }
}
