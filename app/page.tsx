import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-green-100">
      <div className="flex flex-col mx-auto container pt-4 max-w-[900px]">
        <Navbar />
      </div>
    </main>
  );
}
