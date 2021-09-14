import { Component, Input, OnInit } from '@angular/core';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.scss']
})
export class BoardViewComponent implements OnInit {
 @Input() boardIndex : any;
 addTask: any = false;
 card : any = {};
 taskObj :any = {
   title : '',
   description : '',
   created_on : new Date(),
 };
  constructor(public mainService: MainService) { }

  ngOnInit(): void {
  }

  addTaskHandler(){
    this.card = Object.assign({}, this.taskObj);
    this.addTask = !this.addTask;
  }

  appendBoard(){
    if(this.card.title != ''){
    this.card.created_on = new Date();
    this.mainService.trelloData[this.boardIndex].cards.push(this.card);
    this.mainService.saveProgress();
    this.card = {};
    }
  }

  deleteWorkSpace(){
    this.mainService.trelloData.splice(this.boardIndex,1);
    this.mainService.saveProgress();
  }
}
