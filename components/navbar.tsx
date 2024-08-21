export default function Navbar() {
    return (
        <nav className="flex flex-1 border-b border-green-800 w-full h-auto pb-4">
            <a href="/">
                <h1 className="text-3xl text-green-800 my-auto">Kanishka's Blog</h1>
            </a>
            <a href="/aboutme" className="ml-auto my-auto">
                <h2 className="text-lg text-green-900 hover:font-semibold">About Me</h2>
            </a>
        </nav>
    );
}
