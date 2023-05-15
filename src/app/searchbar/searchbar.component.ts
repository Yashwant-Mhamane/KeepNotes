import { Component, EventEmitter, Output } from '@angular/core';
import { note } from '../model/note';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  searchedTitle:string =""
  notesArray1:note[]|undefined

 @Output()
 sendToContainer:EventEmitter<any>=new EventEmitter();
 Searchinput(){
  this.sendToContainer.emit(this.searchedTitle);
 }

 Cleardata(){
  this.searchedTitle="";
  this.sendToContainer.emit(this.searchedTitle);
  }


}
