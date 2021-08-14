import { Injectable } from '@angular/core';
import { Post } from '../models/postModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor(private httpClient: HttpClient) {}

    getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(
            'https://jsonplaceholder.typicode.com/posts?_limit=8'
        );
    }
}
