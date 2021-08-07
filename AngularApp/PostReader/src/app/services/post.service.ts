import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PostService {
    constructor() {}

    getPosts() {
        return [
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
}
