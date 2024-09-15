import Image from "next/image";
import Link from "next/link";
import Index from "./Screen/Index";
import IndexTow from "./Screen/IndexTow";

export default function Home() {
  return (
    <div>
      <Index />
      <IndexTow />
    </div>
  );
}
