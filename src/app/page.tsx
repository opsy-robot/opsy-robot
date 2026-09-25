import { Dock } from "@/components/dock"
import { Hero } from "@/components/sections/hero"
import { Goals } from "@/components/sections/goals"
import { Progress } from "@/components/sections/progress"
import { Software } from "@/components/sections/software"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Dock />
      <main>
        <Hero />
        <Goals />
        <Progress />
        <Software />
      </main>
      <Footer />
    </>
  )
}
