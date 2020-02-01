import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatSelectModule,
  MatDividerModule,
  MatExpansionModule,
  MatRadioModule,
  MatRippleModule,
  MatGridListModule,
  MatBottomSheetModule,
  MatBottomSheetRef,
  MatSnackBarModule
} from '@angular/material';

import { CustomMaterialModule } from './components/ui-custom-material/custom-material.module';
import { ConfirmDialogComponent } from './components/ui-confirm-dialog/confirm-dialog.component';

import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcFormFieldModule,
  MdcTextFieldModule
} from '@angular-mdc/web';

import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { AddNewItemBottomSheet } from './components/ui-addnewitem-bottom-sheet/addnewitem-bottom-sheet.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { CategorynamebyidPipe } from './pipes/categorynamebyid.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConfirmDialogComponent,
    AddNewItemBottomSheet,
    SuggestionsComponent,
    CategorynamebyidPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatInputModule,
    CustomMaterialModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcTextFieldModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,
    NgMatSearchBarModule,
    MatRadioModule,
    MatGridListModule,
    MatBottomSheetModule,
    MatSnackBarModule
  ],
  providers: [],
  entryComponents: [ConfirmDialogComponent, AddNewItemBottomSheet],
  bootstrap: [AppComponent]
})
export class AppModule { }
