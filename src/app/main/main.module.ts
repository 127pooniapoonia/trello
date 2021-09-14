import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoardViewComponent } from './components/board-view/board-view.component';
import { TaskViewComponent } from './components/task-view/task-view.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [MainComponent, BoardViewComponent, TaskViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MaterialModule,
    RouterModule.forChild([{
      path: '',
      redirectTo: 'main',
      pathMatch: 'full'
    }, {
      path: 'main',
      component: MainComponent
    }
  ])
]
})
export class MainModule { }
