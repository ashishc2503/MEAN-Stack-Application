import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  inputValue = '';
  newPost = 'No Data';
  onAddPost(postInput: HTMLTextAreaElement) {
    this.newPost = this.inputValue ;
  }
}
