import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages/pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageDetailComponent} from './page-detail/page-detail.component';
import {PageEditorComponent} from './page-editor/page-editor.component';

const routes: Routes = [
  { path: 'pages', component: PagesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/pages', pathMatch: 'full'},
  {path: 'detail/:id', component: PageDetailComponent},
  {path: 'edit/:id', component: PageEditorComponent},
  {path: 'new', component: PageEditorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule {}
