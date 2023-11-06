import Header from "../components/Header";

export default function ClientLayout({
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
