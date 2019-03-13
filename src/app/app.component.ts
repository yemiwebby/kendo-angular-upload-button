import { Component } from '@angular/core';
import { FileRestrictions } from '@progress/kendo-angular-upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  uploadSaveUrl = "saveUrl";

  uploadRemoveUrl = "removeUrl";

  myRestrictions: FileRestrictions = {
    allowedExtensions: ['.jpg', '.png']
  };
}
