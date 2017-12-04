import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/retry';

@Component({
  selector: 'app-http-get',
  templateUrl: './http-get.component.html',
  styleUrls: ['./http-get.component.scss']
})
export class HttpGetComponent implements OnInit {
  data1: object;
  data2: object;
  data3: object;
  data4: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getData1(): void {
    this.http.get('../assets/test.json')
      .subscribe((res) => {
        console.log('默认获得响应体', res); // 默认响应体
        this.data1 = res['results']; // 打印字段result
      });
  }

  getData2(): void {
    this.http.get('../assets/test.json', { observe: 'response' })
      .subscribe((res) => {
        console.log('获得的完整响应', res); // 完整相应
        console.log('获得的响应头', res.headers); // 响应头
        console.log('获得的响应体', res.body); // 响应体
        this.data2 = res.body['results']; // 打印字段result
      });
  }

  getData3(): void {
    this.http.get('../assets/test.json1')
      .retry(3) // 尝试错误次数
      .subscribe(
        (res) => {
          console.log('默认获得响应体', res); // 默认响应体
          this.data3 = res['results']; // 打印字段result
        },
        (err: HttpErrorResponse) => {
          console.log('完整错误响应:', err); // 完整的错误响应
          console.log(err.statusText);
        });
  }

  getData4(): void {
    this.http.get('../assets/test.txt', { responseType: 'text' })
      .subscribe(res => {
        console.log(res);
        this.data4 = res;
      });
  }
}
