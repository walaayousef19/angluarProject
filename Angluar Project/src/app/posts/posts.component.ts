import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';
import { IPost } from '../Shared class/IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  PostList:IPost[];
  errorMsg: any;

  constructor(private postService:PostService) { }

  ngOnInit(): void {
  
    this.postService.returnAllPosts().subscribe(
      productData=>
      {
        this.PostList=productData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )}

}
