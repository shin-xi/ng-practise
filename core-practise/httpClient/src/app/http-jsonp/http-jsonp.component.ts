import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-http-jsonp',
  templateUrl: './http-jsonp.component.html',
  styleUrls: ['./http-jsonp.component.scss']
})
export class HttpJsonpComponent implements OnInit {
  data: object;
  data2: object;
  data3: object;
  data4: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  // getJsonp(): void {
  //   this.http.jsonp('http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=callbackFunction',
  //     'jsoncallback')
  //     .subscribe(res => {
  //       this.data = res;
  //       console.log(res);
  //     });
  // }

  getJsonp(): void {
    this.http.jsonp('http://www.runoob.com/try/ajax/jsonp.php',
      'jsoncallback')
      .subscribe(res => {
        this.data = res;
        console.log(res);
      });
  }

  // getJsonp2(): void {
  //   this.http.jsonp('http://www.runoob.com/try/ajax/jsonp.php?jsoncallback=?',
  //     'jsoncallback')
  //     .subscribe(res => {
  //       this.data2 = res;
  //       console.log(res);
  //     });
  // }

  getJsonp2(): void {
    this.http.jsonp('http://www.runoob.com/try/ajax/jsonp.php',
      'jsoncallback')
      .subscribe(res => {
        this.data2 = res;
        console.log(res);
      });
  }

  getJsonp3(search: any): void {
    this.http.jsonp(`http://www.baidu.com/su?wd=${search.value}`,
      'cb')
      .subscribe(res => {
        this.data3 = res;
        console.log(res);
      });
  }

  getJsonp4(search1: any): void {
    this.http.jsonp(`https://c.y.qq.com/soso/fcgi-bin/client_search_cp?w=${search1.value}`,
      'jsonpCallback')
      .subscribe(res => {
        this.data4 = res;
        console.log(res);
      });
  }
}

