import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DataService } from './data-service/data-service';
import { FormsModule } from '@angular/forms';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ColorDirective } from './color.directive';
import { WelcomeMessageDirective } from './welcome-message.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReadProductsComponent,
    CreateProductComponent,
    NavBarComponent,
    EditProductComponent,
    ColorDirective,
    WelcomeMessageDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
