import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {HttpClientModule} from '@angular/common/http';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatDividerModule,
  MatIconModule,
  MatExpansionModule,
  MatListModule
} from '@angular/material';

import {AngularFireModule} from '@angular/fire';

import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireAuthModule} from '@angular/fire/auth';

import {CardComponent} from './card/card.component'

const config = {
  apiKey: "AIzaSyCacivRr5Roa8hmo_hZXMdbETOusMgW3kQ",
  authDomain: "geniuskid.firebaseapp.com",
  databaseURL: "https://geniuskid.firebaseio.com",
  projectId: "project-6312492677028723047",
  storageBucket: "project-6312492677028723047.appspot.com",
  messagingSenderId: "39264223315"
};

@NgModule({
  declarations: [
    AppComponent, CardComponent
  ],
  imports: [
    BrowserModule, AngularFireModule.initializeApp(config),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}