import ArticleListItem from "@/components/articles";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import TopArticle from "@/components/top-article";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex flex-col mx-auto container pt-4 max-w-[900px] p-4">
        <Navbar />
        <h1 className="mt-12 text-green-800 text-6xl font-bold">Top Articles</h1>
        <TopArticle
          imgsrc=""
          title="Title Title Title"
          subtitle="sub sub sub sub sub"
          trunc_desc="desc desc..."
          link="#"
          date="2024-01-01"
        />
        <TopArticle
          imgsrc=""
          title="Title Title Title"
          subtitle="sub sub sub sub sub"
          trunc_desc="desc desc"
          link="#"
          date="2024-01-01"
        />
        <TopArticle
          imgsrc=""
          title="Title Title Title"
          subtitle="sub sub sub sub sub"
          trunc_desc="desc desc"
          link="#"
          date="2024-01-01"
        />
        <a href="/articles" className="text-green-800 text-lg hover:font-semibold">All Articles</a>
      </div>
    </main>
  );
}
