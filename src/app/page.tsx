import { SearchSection } from "@/components/search-section";
import { HeroSection } from "@/components/hero-section";
import { FeaturedRepos } from "@/components/featured-repos";
import { StatsSection } from "@/components/stats-section";
import { ContributorsSection } from "@/components/contributors-section";
import { Header } from "@/components/header";
// Optional: import { track } from '@vercel/analytics'; // ✅ for custom events

export default function Home() {
  // Example of a custom analytics event:
  // const handleExploreClick = () => {
  //   track('explore_clicked', { section: 'featured' });
  // };

  return (
    <div className="bg-background min-h-screen">
      <Header />
      {/* Add top padding to account for fixed header */}
      <main className="">
        <HeroSection />
        <SearchSection />
        <div className="container mx-auto px-4 lg:px-6">
          <FeaturedRepos />
        </div>
        <StatsSection />
        <ContributorsSection />
        {/* Footer spacer */}
        <div className="h-20" />
      </main>
    </div>
  );
}
