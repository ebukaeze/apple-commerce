import Header from "../components/Header";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-zinc-200 text-black relative">
      <Header />
      {children}
    </section>
  );
}
