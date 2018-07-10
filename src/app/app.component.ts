import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCz3PSrMsLq47wEyegRexHbsHlAZzrVum8",
      authDomain: "agenda-henry.firebaseapp.com",
      databaseURL: "https://agenda-henry.firebaseio.com",
      projectId: "agenda-henry",
      storageBucket: "agenda-henry.appspot.com",
      messagingSenderId: "1095523914678"
    };
    firebase.initializeApp(config);
  }
}
