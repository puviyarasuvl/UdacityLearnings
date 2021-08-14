import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Post } from '../models/postModel';

@Component({
    selector: 'app-create-post',
    templateUrl: './create-post.component.html',
    styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
    title: string = '';
    body: string = '';

    @Output() createPost: EventEmitter<Post> = new EventEmitter();

    constructor() {}

    ngOnInit(): void {}

    onSubmit(): void {
        const newPost: Post = {
            id: 10,
            title: this.title,
            body: this.body,
            votes: 1,
        };
        this.createPost.emit(newPost);

        this.title = '';
        this.body = '';
    }
}
