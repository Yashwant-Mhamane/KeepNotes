import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

import { Observable } from 'rxjs';
import { note } from './model/note';

@Injectable({
  providedIn: 'root'
})
export class KeepNoteService {
url:string='http://localhost:3001/notes'
  constructor(private httpClient:HttpClient) { }
  featchdata():Observable<Array<note>>{
    return this.httpClient.get<Array<note>>(this.url);
  }

  addNotes(data:note):Observable<note>{
    return this.httpClient.post<note>(this.url,data)
  }
  getOneNote(id:any):Observable<note>
  {
    return this.httpClient.get<note>(this.url+"/"+id)
  }
  updateAnNote(note1:note,id:any):Observable<note>
  {
    return this.httpClient.put<note>(this.url+"/"+id,note1);
  }
  searchData(data:string):Observable<any>{
    return this.httpClient.get<string>(this.url+"?title="+data);
  }

  deleteData(data:number):Observable<Array<note>>{
    return this.httpClient.delete<Array<note>>(this.url+"/"+data)
  }
}
