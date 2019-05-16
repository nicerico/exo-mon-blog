import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIt: number;
  @Input() postCreatedAt: string;

  constructor() { }

  ngOnInit() {
  }

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 1000
    );
  });

  onLoveIt(){
    console.log('jaime');
    this.postLoveIt += 1;
  }

  onDontLoveIt(){
    console.log('jaime pas');
    this.postLoveIt -= 1;
  }

}
