import { Component } from "@angular/core";
import { Observable, of, share, tap } from "rxjs";
import { AudioModel } from "src/app/model/audio-model";
import { AudioServiceService } from "src/app/services/audio-service.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent {
  readonly displayedColumn: string[] = ["ID", "Наименование звука", "Имя файла звукозаписи"];
  readonly columns: string[] = ["id", "name", "audioName"];
  dataSource$: Observable<AudioModel[]> = this.audioServiceService.getAudioList();
  selectAudio$: Observable<null | string> = of(null);

  constructor(private audioServiceService: AudioServiceService) {}

  onClickRow(data: AudioModel): void {
    this.selectAudio$ = this.audioServiceService.getAudio(data.id);
  }
}
