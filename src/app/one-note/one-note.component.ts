import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KeepNoteService } from '../keepnote.service';
import { note } from '../model/note';

@Component({
  selector: 'app-one-note',
  templateUrl: './one-note.component.html',
  styleUrls: ['./one-note.component.css']
})
export class OneNoteComponent {
  constructor(private noteservice:KeepNoteService,private ar: ActivatedRoute) {}

  myNote:note|undefined;

  ngOnInit(): void {
    this.ar.paramMap.subscribe((params) => {
      let id = params.get('id') ?? 0;
      this.noteservice.getOneNote(id).subscribe(data=>this.myNote=data)
    });
  }
}
