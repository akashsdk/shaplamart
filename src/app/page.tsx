import Image from "next/image";
import Link from "next/link";
import Index from "./Screen/Index";
import IndexTow from "./Screen/IndexTow";
import BestSelling from "./Screen/BestSelling";
import BestOffer from "./Screen/BestOffer";

export default function Home() {
  return (
    <div>
      <Index />
      <IndexTow />
      <BestSelling />
      <BestOffer />
    </div>
  );
}
