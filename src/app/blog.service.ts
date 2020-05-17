import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public allBlogs = [
    {
      blogId: '1',
      lastModified: '2020-05-16T16:38:26',
      created: '2020-05-16T16:38:26',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: true,
      views: 0,
      bodyHtml: 'this is blog body',
      description: 'this is the blog description',
      title: 'This is blog 1'
    },
    {
      blogId: '2',
      lastModified: '2020-05-16T16:40:23',
      created: '2020-05-16T16:40:23',
      tags: [],
      author: 'Admin',
      category: 'Comedy',
      isPublished: true,
      views: 0,
      bodyHtml: 'this is blog body',
      description: 'this is the blog description',
      title: 'This is blog 2'
    }
  ];

  public currentBlog;

  constructor() {
    console.log('Blog service called');
  }

  public getAllBlogs(): any {
    return this.allBlogs;
  }

  public getSingleBlogInformation(currentBlogId: string): any {
    for (const blog of this.allBlogs) {
      if (blog.blogId === currentBlogId) {
        this.currentBlog = blog;
      }
    }

    return this.currentBlog
  }
}
