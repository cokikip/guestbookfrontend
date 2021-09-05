import { AddVisitorComponent } from './add-visitor/add-visitor.component';
import { VisitorListComponent } from './visitor-list/visitor-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VisitorComponent } from './visitor/visitor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: VisitorComponent },
  { path: "visitors", component: VisitorListComponent },
  { path: "add-visitor", component: AddVisitorComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
