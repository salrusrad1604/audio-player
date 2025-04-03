import { Injectable } from "@angular/core";
import { ApiMockService } from "./api-mock.service";
import { AudioModel } from "../model/audio-model";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AudioServiceService {
  constructor(private apiMockService: ApiMockService) {}

  getAudioList(): Observable<AudioModel[]> {
    return this.apiMockService.getAudioList();
  }

  getAudio(id: number): any {
    return this.apiMockService.getAudio(id).pipe(map(v => `\\assets\\audio-files\\${v}`));
  }
}
