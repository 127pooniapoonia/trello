import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../main.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
@Input() boardIndex: any;
dataLog: any = [];
  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

  deleteTask(index:any){
    this.mainService.trelloData[this.boardIndex].cards.splice(index,1);
    this.mainService.saveProgress();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.mainService.trelloData.map((item: any)=> {
        item.cards.sort((a: any, b: any) => 
        new Date(b.created_on).getTime() - new Date(a.created_on).getTime());
      }
      );
    this.mainService.saveProgress();
  }
}
