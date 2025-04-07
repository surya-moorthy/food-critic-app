

export default function Veggie() {
  return (
    <div className="flex flex-row justify-between gap-4 p-6 bg-white rounded-2xl shadow-md w-3/4">
     
      
      <div className="flex justify-center items-center text-center">
      <p className="text-gray-600  leading-relaxed text-xl">
           Dive into the vibrant world of vegetables, hand-picked daily from local farms. Every dish is crafted to preserve freshness, flavor, and nutrition — because you deserve food that’s as wholesome as it is delicious.
      </p>
      </div>
      <hr className="border-t border-neutral-900 " />
      <div className="w-3/4 h-64 overflow-hidden rounded-xl">
        <img
          src="assets/fresh-fruits-and-vegetables.webp"
          alt="chef"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
