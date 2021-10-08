import { BoxesListComponent } from './boxes/list/boxes-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxesDetailComponent } from './boxes/detail/boxes-detail.component';

const routes: Routes = [
  {
    path: 'boxes',
    children: [
      { path: '', component: BoxesListComponent },
      { path: ':id', component: BoxesDetailComponent }
    ]
  },
  { path: '**', component: BoxesListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
