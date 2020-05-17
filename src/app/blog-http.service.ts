import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { Observable } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogHttpService {
  private EDWISOR_API_KEY = 'N2Y3ZGQ3YjhiZjg4MjE4YjhiNzdhZmI3YTJjZmE0ZWJkNWQxZjcyODc5OTEyMzY5NmZjNTgyMmVhYjNjYzg2ZTAzOWY2MDE0NWM3YzU2MzI3YzlkMDI2MTljOTM3YzlhMzhmNmUxYWNhZDFmYjhlZjQxZjg4NmIyMmVkZTBhZGExNw==';

  private BASE_URL = 'https://blogapp.edwisor.com/api/v1/blogs';

  constructor(private _http: HttpClient) { }

  private handleError(err: HttpErrorResponse) {
    console.log('Http Calls Error');
    console.log(err.message);
    return throwError(err.message);
  }

  public getAllBlogs(): any {
    const response = this._http.get(`${this.BASE_URL}/all?authToken=${this.EDWISOR_API_KEY}`);
    return response;
  }

  public getSingleBlogInformation(currentBlogId: string): any {
    const response = this._http.get(`${this.BASE_URL}/view/${currentBlogId}?authToken=${this.EDWISOR_API_KEY}`);
    return response;
  }

  public createBlog(blogData): any {
    const response = this._http.post(`${this.BASE_URL}/create?authToken=${this.EDWISOR_API_KEY}`, blogData);
    return response;
  }

  public deleteBlog(blogId): any {
    const response = this._http.post(`${this.BASE_URL}/${blogId}/delete?authToken=${this.EDWISOR_API_KEY}`, {});
    return response;
  }

  public editBlog(blogId, blogData): any {
    const response = this._http.put(`${this.BASE_URL}/${blogId}/edit?authToken=${this.EDWISOR_API_KEY}`, blogData);
    return response;
  }
}
