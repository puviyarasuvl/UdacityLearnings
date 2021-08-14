import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../models/postModel';

@Component({
    selector: 'app-post-item',
    templateUrl: './post-item.component.html',
    styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent implements OnInit {
    @Input() post: Post;
    @Output() hideEvent: EventEmitter<Post> = new EventEmitter();

    constructor() {
        this.post = {
            id: 0,
            title: '',
            body: '',
            votes: 0,
        };
    }

    ngOnInit(): void {}

    upvote(post: Post): void {
        post.votes += 1;
    }

    downvote(post: Post): void {
        post.votes -= 1;
    }

    hide(post: Post): void {
        this.hideEvent.emit(post);
    }
}
