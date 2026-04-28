import { HeroSection } from "@/components/sections/HeroSection"
import { DeferredBelowFoldSections } from "@/components/sections/DeferredBelowFoldSections"
import { FooterSection } from "@/components/sections/FooterSection"
import { StickyNav } from "@/components/ui/StickyNav"
import { WhatsappFloat } from "@/components/ui/WhatsappFloat"

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <HeroSection />
        <DeferredBelowFoldSections />
      </main>
      <FooterSection />
      <WhatsappFloat />
    </>
  )
}
