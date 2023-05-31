import { Component, ViewEncapsulation } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentsComponent {
  public comments = [
    {
      nick: 'Ktoś obcy',
      title: 'Porażka',
      comment: 'lorem ipsum'
    }
  ];

  constructor(private data: DataService) {}

  getAllComments() {
    this.data.getComments().subscribe( data => {
      data.docs.forEach((doc: { data: () => Comment; }) => {
        console.log(doc.data());        
      })
    })
  }

  addComment() {

  }
}
