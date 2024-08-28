import Navbar from "@/components/navbar";
import ArticleListItem from "@/components/articles";
import { getListOfPosts } from "@/helpers/postHelper";
import { Post } from "@/helpers/types";

export default function ArticlePage() {
    const posts: Post[] = getListOfPosts();

    return (
      <main className="flex min-h-screen flex-col">
      <div className="flex flex-col mx-auto container pt-4 max-w-[900px] p-4">
        <Navbar />
        <h1 className="mt-12 text-green-300 text-6xl font-bold">All Articles</h1>
        <div className="mt-4 flex flex-col divide-y divide-dashed">
          {posts.map((post) => (
            <ArticleListItem
              key={post.slug}
              title={post.title}
              subtitle={post.subtitle}
              date={post.date}
              thumb={post.thumb}
              link={`${post.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
    );
}