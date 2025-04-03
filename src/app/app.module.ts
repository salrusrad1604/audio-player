import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { MainPageModule } from "./pages/main-page/main-page.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, MainPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
