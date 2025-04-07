

export default function Card() {
  return (
    <div className="flex flex-row justify-between gap-4 p-6 bg-white rounded-2xl shadow-md w-3/4">
      <div className="w-3/4 h-64 overflow-hidden rounded-xl">
        <img
          src="assets/veggie.webp"
          alt="chef"
          className="w-full h-full object-cover"
        />
      </div>
      <hr className="border-t border-gray-300" />
      <div className="flex justify-center items-center text-center">
        <h3 className="text-xl font-semibold">
          Enjoy your food with a <span className="underline">pleasure service</span>
        </h3>
      </div>
    </div>
  );
}
