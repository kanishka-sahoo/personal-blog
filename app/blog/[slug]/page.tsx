import Navbar from "@/components/navbar";
import { getPostContent, getListOfPosts } from "@/helpers/postHelper";
import ReactMarkdown from "react-markdown";

export const generateStaticParams = async () => {
    const posts = getListOfPosts()
    return posts.map(post => { slug: post.slug })
  }

export default function BlogPage({params} : {params: {slug: string}}) {
    const {content, data} = getPostContent(params.slug);

    return (
        <main className="flex min-h-screen flex-col">
        <div className="flex flex-col mx-auto container pt-4 max-w-[900px] p-4">
            <Navbar />
            <h1 className="mt-12 text-green-800 text-6xl font-bold">{data.title}</h1>
            <h2 className="mt-2 text-green-800 text-2xl font-normal">{data.subtitle}</h2>
            <p className="mt-2 text-green-800 text-lg font-normal">{data.date.toDateString()}</p>
            <hr className="mt-4 border-black" />
            <div className="mt-4" />
            <div className="prose lg:prose-lg">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
        </main>
    );
}