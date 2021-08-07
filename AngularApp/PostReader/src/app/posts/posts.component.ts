import { Component, OnInit } from '@angular/core';
import { Post } from '../models/postModel';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
    title: string = 'Posts';
    posts: Post[] = [];
    constructor() {}

    ngOnInit(): void {
        this.posts = [
            {
                id: 1,
                title: 'First post',
                content:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                votes: 20,
            },
            {
                id: 2,
                title: '2nd post',
                content:
                    'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
                votes: 30,
            },
            {
                id: 3,
                title: '3rd post',
                content:
                    'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
                votes: 40,
            },
        ];
    }

    hideEvent(post: Post): void {
        this.posts = this.posts.filter((p) => p.id !== post.id);
    }
}
