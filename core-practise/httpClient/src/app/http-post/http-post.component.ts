import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-http-post',
  templateUrl: './http-post.component.html',
  styleUrls: ['./http-post.component.scss']
})
export class HttpPostComponent implements OnInit {
  data5: object;
  data6: object;
  data7: object;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  getData5(): void {
    this.http.post('http://jsonplaceholder.typicode.com/posts',
      JSON.stringify({
        body: 'bar',
        title: 'foo',
        userId: 1
      }),
      {
        observe: 'response',
        headers: new HttpHeaders().set('Authorization', 'my-auth-token'), // 请求头
        params: new HttpParams().set('id', '3'), // URL 参数
        reportProgress: true
      })
      .subscribe(res => {
        console.log('获得的完整响应', res); // 完整相应
        console.log('获得的响应头', res.headers); // 响应头
        console.log('获得的响应体', res.body); // 响应体
        this.data5 = res;
      });
  }

  getData6(): void {
    this.http.post('https://rx-wechat.natapp4.cc/enterprise_WeChat/Notice/selectAllPage_1.do',
      {
        department: 2,
        userId: 'jjj',
        count: 10,
        noticeState: 1,
        pageindex: 1,
        search: '',
        key: 1
      },
      {
        observe: 'response'
      })
      .subscribe(res => {
        console.log('获得的完整响应', res); // 完整相应
        console.log('获得的响应头', res.headers); // 响应头
        console.log('获得的响应体', res.body); // 响应体
        this.data6 = res;
      });
  }
}
