import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './components/items/items.component';
import { ItemsViewComponent } from './components/items-view/items-view.component';
import { QueriesComponent } from './components/queries/queries.component';
import { UpdateComponent } from './components/update-component/update-component.component';
import { InsertContactComponent } from './components/insert-contact/insert-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'queries', component: QueriesComponent },
  { path: 'items', component: ItemsViewComponent },
  { path: 'updates', component: UpdateComponent },
  { path: 'inserts', component: InsertContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
