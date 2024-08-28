export default function ArticleListItem(
    { title, subtitle, date, thumb, link }: 
    { title: string, subtitle: string, date: Date, thumb: string, link: string }
) {
    const imsrc: string = thumb ? thumb : "https://placehold.co/600x400";
    return (
        <div>
            <div className="flex flex-col md:flex-row md:space-x-4 py-2">
                <div className="md:w-1/6">
                    <img src={imsrc} alt={title} className="object-contain h-full" />
                </div>
                <div className="md:w-5/6">
                    <h2 className="text-xl font-bold text-neutral-100">{title}</h2>
                    <p className="text-neutral-100">{subtitle}</p>
                    <p className="text-neutral-300">{date.toDateString()}</p>
                    <a href={`/blog/${link.replace('.md', '')}`} className="text-green-400 hover:font-semibold">Read More</a>
                </div>
            </div>
        </div>
    );
}