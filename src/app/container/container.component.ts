import { Component } from '@angular/core';
import { KeepNoteService } from '../keepnote.service';
import { note } from '../model/note';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  notesArrayIncontainer:note[]|any
  constructor(private h:KeepNoteService){ this.gettheData()}

  gettheData(){
    this.h.featchdata().subscribe(data=>this.notesArrayIncontainer=data);
    console.log(this.notesArrayIncontainer);
  }

  addTheData(inputdata:any){
    this.h.addNotes(inputdata).subscribe(data=>{alert("data is added");this.gettheData();})

  }

  searched(title:string){
    if(title==""){
      this.gettheData()
    }else{
      this.h.searchData(title).subscribe(data=>{this.notesArrayIncontainer=data});
    }
  }

  removeDataFromJson(iddata:number){
    this.h.deleteData(iddata).subscribe(data=>{alert("data is removed");this.gettheData();});

  }
}
