import { MatOptionModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { InformationsModule } from './informations/informations.module';
import { SearchingModule } from './searching/searching.module';
import { ShowingModule } from './showing/showing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete'
import { MatSelectModule } from '@angular/material/select'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    InformationsModule,
    SearchingModule,
    ShowingModule,
   BrowserAnimationsModule,
   MatExpansionModule,
   GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
