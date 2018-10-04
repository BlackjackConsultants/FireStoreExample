import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";

import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { ItemsComponent } from './components/items/items.component';

import { ItemService } from './services/item.service';
import { ContactService } from './services/contact.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ItemsViewComponent } from './components/items-view/items-view.component';
import { QueriesComponent } from './components/queries/queries.component';
import { UpdateComponent } from './components/update-component/update-component.component';
import { InsertContactComponent } from './components/insert-contact/insert-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent,
    ItemsViewComponent,
    QueriesComponent,
    UpdateComponent,
    InsertContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule, AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [ItemService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
