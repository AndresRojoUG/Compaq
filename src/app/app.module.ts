import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { AspelComponent } from './components/aspel/aspel.component';
import { AdnBComponent } from './components/adn-b/adn-b.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AspelComponent,
    AdnBComponent
  ],
  imports: [
    NgsRevealModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    PdfViewerModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    SlickCarouselModule
   
    
   
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
