import rss from '@astrojs/rss';
import { getPublishedPosts } from '../lib/posts';

export async function GET(context: { site?: URL }) {
  const posts = await getPublishedPosts();

  return rss({
    title: 'At the Moment',
    description:
      'A cozy personal library of books, film, series, tech, esports, and whatever belongs on the shelf today.',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/posts/${post.id}/`,
      categories: [post.data.section, ...post.data.tags],
    })),
  });
}
