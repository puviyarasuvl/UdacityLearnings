import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HistoryComponent } from './history/history.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        PostsComponent,
        PostItemComponent,
        NavBarComponent,
        HistoryComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, NgbModule, NgbNavModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}