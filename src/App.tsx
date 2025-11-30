import { ThemeProvider, useTheme } from "@/components/ThemeProvider";
import { useKeyboardShortcuts } from "@/hooks/useKeyboardShortcuts";
import { useToast } from "@/hooks/useToast";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PokemonSearch from "@/components/PokemonSearch";
import AboutMe from "@/components/AboutMe";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Toast from "@/components/Toast";
import SecretButton from "@/components/SecretButton";

function LandingPageContent() {
  const { toggleTheme } = useTheme();
  const { message, isVisible, showToast } = useToast();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useKeyboardShortcuts({
    t: () => {
      toggleTheme();
      showToast("✨ Theme switched");
    },
    h: () => {
      scrollToSection("hero");
      showToast("📍 Jumped to Hero");
    },
    p: () => {
      scrollToSection("pokemon");
      showToast("📍 Jumped to Pokémon Search");
    },
    f: () => {
      scrollToSection("features");
      showToast("📍 Jumped to Features");
    },
  });

  return (
    <>
      <Header />
      <Hero />
      <PokemonSearch />
      <AboutMe />
      <Features />
      <Testimonials />
      <Footer />
      <Toast message={message} isVisible={isVisible} />
      <SecretButton />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LandingPageContent />
    </ThemeProvider>
  );
}

export default App;
