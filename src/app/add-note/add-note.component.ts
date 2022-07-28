import { Component, OnInit } from '@angular/core';
import { InputArrayService } from '../input-array.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  title: string;
  note: string;
  constructor(public service: InputArrayService) { }

  ngOnInit(): void {

  }

  addPost() {
    this.service.allTitles.push(this.title);
    this.service.allNotes.push(this.note);
    this.title = '';
    this.note = '';
  }
  deleteNote(i: number) {

    this.service.trashTitles.push(this.service.allTitles[i]);
    this.service.trashNotes.push(this.service.allNotes[i]);
    this.service.allTitles.splice(i, 1);
    this.service.allNotes.splice(i, 1);
    console.log(this.service.trashTitles)
  }

}
