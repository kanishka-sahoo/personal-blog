export default function ArticleListItem(
    { title, subtitle, date, thumb, link }: 
    { title: string, subtitle: string, date: Date, thumb: string, link: string }
) {
    const imsrc: string = thumb ? thumb : "https://placehold.co/600x400";
    return (
        <div>
            <div className="flex flex-col md:flex-row md:space-x-4 py-2">
                <div className="md:w-1/6">
                    <img src={imsrc} alt={title} className="w-full h-auto" />
                </div>
                <div className="md:w-5/6">
                    <h2 className="text-xl font-bold text-green-900">{title}</h2>
                    <p className="text-green-800">{subtitle}</p>
                    <p className="text-green-800">{date.toDateString()}</p>
                    <a href={`/blog/${link.replace('.md', '')}`} className="text-green-900 hover:font-semibold">Read More</a>
                </div>
            </div>
        </div>
    );
}