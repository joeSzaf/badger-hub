import { AboutPersonType } from '../types/aboutPerson';
import { BlogPostType } from '../types/blogPost';

export const aboutPesronFactory = (
  overrides?: Partial<AboutPersonType>
): AboutPersonType => ({
  copy: 'This is a cool person who works at Bager Hub. Here is some details about them.',
  pictureURL: 'picture_url',
  title: 'Developer',
  name: 'Cool Badger',
  ...overrides,
});

export const blogPostFactory = (
  overrides?: Partial<BlogPostType>
): BlogPostType => ({
  body: 'This is a cool blog post about something cool that Badger Hub is doing or has done.',
  author: 'Cool Badger',
  id: 0,
  title: 'A Nice Thing',
  urlTitle: 'cool-blog-post',
  ...overrides,
});
