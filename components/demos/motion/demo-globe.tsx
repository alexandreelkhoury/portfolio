import { clx } from "@/lib/utils/clx/clx-merge";
import { STYLES } from "@/components/ui/_shared";
import { Globe } from "@/components/ui/globe";

export default function GlobeDemo() {
  const Container = clx.div(STYLES.DEMO_CARD, "max-w-[32rem] px-40 pb-40 pt-8 md:pb-60");
  const Title = clx.span(
    "pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10",
  );
  const RadialGradient = clx.div(
    "pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]",
  );

  return (
    <Container>
      <h1>Available Anywhere</h1>
      <Globe />
      <RadialGradient />
    </Container>
  );
}
