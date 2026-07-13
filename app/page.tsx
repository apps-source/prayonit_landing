import Header from "@/components/Header";
import MoodExperience from "@/components/MoodExperience";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      <main className="flex flex-1 flex-col">
        <MoodExperience />

        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
