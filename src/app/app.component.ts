import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my first angular 2.0 adventure!';
  dogName:string = 'Rex';
  dogWeight: number;
  imageUrl: string;
  ownerName: string = 'ahmad';
  constructor() {
    var d = new Date();
    var n = d.getHours();
    if (n >= 7 && n <= 20 ) {
      this.imageUrl = 'http://imgsrv.wkdzradio.com/image/wkdz4/UserFiles/Image/Dog%20Day1.jpg';
    }else {
      this.imageUrl = 'https://besthqwallpapers.com/Uploads/22-1-2018/37943/thumb2-4k-moon-dog-night-digital-art.jpg';
    }
  }
}
