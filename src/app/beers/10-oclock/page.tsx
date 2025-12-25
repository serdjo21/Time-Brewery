import Header from "@/components/Header";
import BeerPage from "@/components/beers/BeerPage";
import { getBeer } from "@/components/beers/beersData";

export default function Beer3() {
  return (
    <>
      <Header />
      <BeerPage beer={getBeer("10-oclock")} />
    </>
  );
}
