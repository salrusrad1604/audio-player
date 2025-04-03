import { Injectable } from "@angular/core";
import { AudioModel } from "../model/audio-model";
import { Observable, of } from "rxjs";
import { audiloListMock } from "../mock-data/mock";

@Injectable({
  providedIn: "root",
})
export class ApiMockService {
  getAudioList(): Observable<AudioModel[]> {
    return of(audiloListMock);
  }

  getAudio(id: number): Observable<string | undefined> {
    return of(audiloListMock.find(v => v.id === id)?.audioName);
  }
}
