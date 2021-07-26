import { Injectable } from '@angular/core';
import { Observable , of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAdd: boolean = false;
  private subject: any = new Subject<any>();

  constructor() { }

  toggleAddTask(): void{
    this.showAdd = !this.showAdd;
    this.subject.next(this.showAdd); 
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }
}
