import { NgModule } from "@angular/core";

import { MainPageComponent } from "./main-page.component";
import { TableComponent } from "./components/table/table.component";
import { AudioPlayerComponent } from "./components/audio-player/audio-player.component";
import { MatTableModule } from "@angular/material/table";
import { AsyncPipe, CommonModule } from "@angular/common";

@NgModule({
  declarations: [MainPageComponent, TableComponent, AudioPlayerComponent],
  imports: [MatTableModule, AsyncPipe, CommonModule],
  providers: [],
})
export class MainPageModule {}
