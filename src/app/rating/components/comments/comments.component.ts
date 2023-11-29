import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Comment } from '../../../models/Comment.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CommentsComponent implements OnInit {
  public comments: Comment[] = [];
  public sub: any;
  public hospitalParams: any;
  public comment: Comment = {
    title: '',
    nick: '',
    hospital: '',
    comment: '',
    departament: '',
  };

  constructor(private data: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params: any) => {
      this.hospitalParams = params;
      this.getAllComments();
   });
    console.log(this.comments)
  }


  getAllComments() {
    this.data.getComments().subscribe( data => {
      data.docs.forEach((doc: { data: () => Comment; }) => {
        let data = doc.data();
        if (this.hospitalParams.hospital === data.hospital) {
          this.comments.push(data) 
        }
      })
    })
  }

  addComment() {
    this.comment.hospital = this.hospitalParams.hospital;
    this.data.addComment(this.comment);
    this.comments.push(this.comment)
    this.comment = {};
  }
}
