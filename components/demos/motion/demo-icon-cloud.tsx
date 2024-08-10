import { IconCloud } from "@/components/ui/icon-cloud";

export default function IconCloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={ICON_SLUGS} />
    </div>
  );
}

const ICON_SLUGS = [
  "typescript",
  "javascript",
  "java",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "nestjs",
  "clojure",
  "tailwindcss",
  "solidity",
  "go",
  "docker",
  "ethers",
  "ethereum",
  "bitcoin",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
];
