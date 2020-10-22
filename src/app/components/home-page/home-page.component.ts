import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }
  imageObject: Array<object> = [{
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-103.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-103.png',
    title: '25 Nail-Remover Closure',
    alt: '25 Nail-Remover Closure'
  }, {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-095.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-095.png',
    title: '28 Flip-Top Closure',
    alt: 'Image alt'
  }, {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-047.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-047.png',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-027.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-027.png',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-086.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-086.png',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'http://mantinplast.com/wp-content/uploads/2018/06/2-112.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/06/2-112.png',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-091.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-091.png',
    title: '28/410 Disk-Top Closure',
    alt: 'Image alt'
  }
    , {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-028.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-028.png',
    title: '52-M Spray Aerosol Cap',
    alt: 'Image alt'
  }
    , {
    image: 'http://mantinplast.com/wp-content/uploads/2018/05/2-063.png',
    thumbImage: 'http://mantinplast.com/wp-content/uploads/2018/05/2-063.png',
    title: 'Closure with Insert',
    alt: 'Image alt'
  }
  ];



  ngOnInit(): void {
  }

}
