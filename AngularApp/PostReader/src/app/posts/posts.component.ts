import { Component, OnInit } from '@angular/core';
import { Post } from '../models/postModel';
import { PostService } from '../services/post.service';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
    title: string = 'Posts';
    posts: Post[] = [];
    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.postService.getPosts().subscribe((res) => {
            for (let i = 0; i < res.length; i++) {
                res[i].votes = i;
            }
            this.posts = res;
        });
    }

    hideEvent(post: Post): void {
        this.posts = this.posts.filter((p) => p.id !== post.id);
    }

    createPost(post: Post): void {
        this.posts.unshift(post);

        alert('Post added successfully');
    }
}
