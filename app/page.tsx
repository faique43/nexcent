import Clients from "@/components/Clients";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start w-full gap-10">
      <Nav />
      <Hero />
      <Clients />
      <Services />
      <Feature />
    </main>
  );
}
