export default function TopArticle(
  { imgsrc, title, subtitle, trunc_desc, link,date }:
  { imgsrc: string, title: string, subtitle: string, trunc_desc: string, link: string, date: string }
) {
  const imsrc: string = imgsrc ? imgsrc : "https://placehold.co/600x400";
  return (
    <div className="flex flex-col md:flex-row flex-1 w-full mt-4 mb-1">
      <img className="w-full md:w-1/2 h-56 object-cover pr-2" src={imsrc} alt={title} />
      <div className="w-full flex flex-1 flex-col pl-2">
        <h1 className="text-green-800 text-4xl font-semibold">{title}</h1>
        <h2 className="text-green-800 text-2xl mt-2">{subtitle}</h2>
        <p className="mt-auto text-green-800 text-lg">{date.toLocaleString()}</p>
        <a href={`/blog/${link.replace('.md', '')}`} className="text-green-950 hover:font-semibold">Read More</a>
      </div>
    </div>
  );
}
