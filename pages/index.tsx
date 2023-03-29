import Header from "@/components/Header"
import HeroBanner from "@/components/Home/HeroBanner";
import Footer from "@/components/Footer";
import Diets from "@/components/Home/Diets";

export default function Index(): JSX.Element {

  return (
    <>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <Diets></Diets>
      <Footer></Footer>
    </>
  )
}
