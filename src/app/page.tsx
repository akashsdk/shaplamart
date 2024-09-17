import Image from "next/image";
import Link from "next/link";
import Index from "./Screen/Index";
import IndexTow from "./Screen/IndexTow";
import BestSelling from "./Screen/BestSelling";

export default function Home() {
  return (
    <div>
      <Index />
      <IndexTow />
      <BestSelling />
    </div>
  );
}
