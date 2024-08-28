import Navbar from "@/components/navbar";
import TopArticle from "@/components/top-article";
import { getListOfPosts } from "@/helpers/postHelper";
import { Post } from "@/helpers/types";
export default function Home() {
  const posts: Post[] = getListOfPosts().slice(0, 3);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col mx-auto container pt-4 max-w-[900px] p-4">
        <Navbar />
        <h1 className="mt-12 text-green-300 text-6xl font-bold">Top Articles</h1>
        {posts.map((post) => (
          <TopArticle
            key={post.slug}
            imgsrc={post.thumb}
            title={post.title}
            subtitle={post.subtitle}
            trunc_desc=""
            link={`${post.slug}`}
            date={post.date}
          />
        ))}
        <a href="/blog" className="text-green-500 text-lg hover:font-semibold">All Articles</a>
      </div>
    </main>
  );
}
