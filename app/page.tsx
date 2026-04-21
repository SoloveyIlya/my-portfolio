import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyMe } from "@/components/why-me";
import { Portfolio } from "@/components/portfolio";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Reviews } from "@/components/reviews";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";
import { LeadMagnet } from "@/components/lead-magnet";
import { JsonLd } from "@/components/json-ld";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <WhyMe />
        <Portfolio />
        <LeadMagnet />
        <Process />
        <Services />
        <LeadMagnet
          title="Не можете определиться, какой тип сайта подойдет?"
          description="Помогу подобрать оптимальное решение под ваши задачи и бюджет"
        />
        <Reviews />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
