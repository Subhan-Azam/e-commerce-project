import FetchProducts from "./(components)/fetchProducts/FetchProducts";
// import Hero_section from "./(components)/hero_section/Hero_section";
import Navbar from "./(components)/navbar/Navbar";
// import VideoHeader from "./(components)/videoHeader/VideoHeader";

export default async function Home() {
  return (
    <div className="bg-gray-200">
      <Navbar />
      {/* <Hero_section /> */}
      <FetchProducts />
    </div>
  );
}
