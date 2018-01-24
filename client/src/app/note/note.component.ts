import { Component, OnInit } from '@angular/core';
import { Note } from "../note"
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  note: Note = new Note();
  // notes = [];

  constructor(private _noteService: NoteService) { }

  onSubmit(note) {
    this._noteService.createNote(this.note);
    this.note = new Note();
  }

  // onSubmitt() { // using callback
  //   this._noteService.createNote(this.note, (res) => {
  //   console.log("made it to component")
  // });
  //   this.note = new Note();
  // }

  ngOnInit() {
  }

}
