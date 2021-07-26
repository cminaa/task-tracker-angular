import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task = {text:'',day:'',reminder:false}
  faTimes = faTimes;
  @Output() onDeleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder : EventEmitter<Task> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

onDelete(task: Task | undefined){
  this.onDeleteTask.emit(task);
}

onToggle(task: Task | undefined){
  console.log('toggle')
  this.onToggleReminder.emit(task);
}


}
