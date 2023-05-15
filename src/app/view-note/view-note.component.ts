import { Component,  Input } from '@angular/core';
import { note } from '../model/note';
@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css']
})
export class ViewNoteComponent {
  @Input()
  displayNotes?:note[];


  // detelenode(val:number){
  //   this.deletedNote.emit(val);
  // }
}
