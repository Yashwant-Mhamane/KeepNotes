import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KeepNoteService } from '../keepnote.service';
import { Myinterface } from '../model/canintf';
import { note } from '../model/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements  Myinterface {
  NotesArray: note = {
    id: undefined,
    title: undefined,
    content: undefined
  };
  constructor(private noteservice:KeepNoteService,private rs:Router,private ar:ActivatedRoute){}
  ngOnInit(): void {
    this.ar.paramMap.subscribe(param=>{
     let id=param.get("id") ?? 0
     if(id!=0)
       this.noteservice.getOneNote(id).subscribe(data=>this.NotesArray=data)
    })
   }

   canExit(): boolean {

    if(this.NotesArray.title!=="" || this.NotesArray.content!==""){
     var val = confirm("Do you want to leave this page")
      return val;
    }else{
      return false;
    }
}

  addNewNotes(){
    if(this.NotesArray.title==undefined || this.NotesArray.content==undefined){
         alert("Please Fill both the text boxes")
    }
    else if(this.NotesArray.id!== undefined)  {
      this.noteservice.updateAnNote(this.NotesArray,this.NotesArray.id).subscribe(data=>{
        alert("Notes updated "+data.id);
        this.rs.navigateByUrl("viewnote");
      })
    }
    else {
      this.noteservice.addNotes(this.NotesArray).subscribe(data=>{
      alert("Note added "+data.id);
      this.rs.navigateByUrl("viewnote")
      });
    }
  }

}
