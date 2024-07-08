import CategoriesSlider from "./(components)/categoriesSlider/categoriesSlider";
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
      <div className="mx-auto max-w-screen-sm text-center">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold">
          Best Collections
        </h2>
        <p className="font-light text-gray-700 sm:text-xl mb-14">
          Discover our curated collection: a blend of quality, style, and
          innovation that defines excellence in every piece.
        </p>
        <CategoriesSlider />
      </div>
    </div>
  );
}
