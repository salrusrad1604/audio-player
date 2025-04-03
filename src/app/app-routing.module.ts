import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainPageComponent } from "./pages/main-page/main-page.component";

enum Pages {
  Main_Pages = "main-pages",
}

const routes: Routes = [
  {
    path: Pages.Main_Pages,
    component: MainPageComponent,
  },
  {
    path: "**",
    redirectTo: Pages.Main_Pages,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
