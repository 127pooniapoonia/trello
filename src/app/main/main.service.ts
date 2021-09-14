import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  trelloData : any = [];
  constructor() { 
    if(!localStorage.trelloData){
      this.trelloData = [
        {
          title : 'Products',
          cards: [
            {
              title: 'UAT testing',
              description: 'Ask Engineer to set up testing infra',
              created_on: new Date()

            }
          ]
        }
      ];
      this.saveProgress();
    }
    else{
      this.trelloData = JSON.parse(localStorage.trelloData);
    }
  }

  saveProgress(){
    localStorage.setItem('trelloData', JSON.stringify(this.trelloData));
    this.trelloData = JSON.parse(localStorage.trelloData);
  }
}
