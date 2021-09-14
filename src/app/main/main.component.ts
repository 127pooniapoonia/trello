import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder
} from '@angular/forms';
import {
  MainService
} from './main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  workspaceName: any = '';
  addWork: any = false;
  submitted: boolean = false
  constructor(public mainService: MainService) {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.workspaceName != '') {
      var count = this.mainService.trelloData.filter((item: any) => {
        return item.title.toLowerCase() == this.workspaceName.toLowerCase();
      });
      if (count.length == 0) {
        this.submitted = false;
        this.mainService.trelloData.push({
          title: this.workspaceName,
          cards: []
        });
        console.log(this.mainService.trelloData);
        this.workspaceName = '';
        this.mainService.saveProgress();
        this.addWork = !this.addWork;
      } else {
        this.submitted = true;
        return;
      }
    } else {
      this.submitted = true;
      return;
    }
  }
}
