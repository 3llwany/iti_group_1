import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('updateBtn') updateBtn: ElementRef;
  postTitle: string;
  currentIndex: number;
  posts: any = [
    {
      title: 'post 1',
    },
    {
      title: 'post 2',
    },
    {
      title: 'post 3',
    },
  ];

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.updateBtn.nativeElement.style.display = 'none';
  }

  createPost(postTitle) {
    let post = { title: postTitle };
    this.posts.push(post);
    this.postTitle = '';
  }

  delete(index) {
    this.posts.splice(index, 1);
  }

  getPost(post) {
    this.postTitle = post.title;
    this.currentIndex = this.posts.indexOf(post);
    this.updateBtn.nativeElement.style.display = 'block';
  }

  Update() {
    this.posts[this.currentIndex].title = this.postTitle;
    this.updateBtn.nativeElement.style.display = 'none';
    this.postTitle = '';
    this.currentIndex = -1;
  }
}
