import { HeroSection } from "@/components/sections/HeroSection"
import { BelowFoldSections } from "@/components/sections/BelowFoldSections"
import { FooterSection } from "@/components/sections/FooterSection"
import { StickyNav } from "@/components/ui/StickyNav"
import { WhatsappFloat } from "@/components/ui/WhatsappFloat"

export default function Home() {
  return (
    <>
      <StickyNav />
      <main>
        <HeroSection />
        <BelowFoldSections />
      </main>
      <FooterSection />
      <WhatsappFloat />
    </>
  )
}
