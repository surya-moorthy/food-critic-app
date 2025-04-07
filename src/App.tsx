
import './App.css'
import Card from './compoenents/Card'
import Navbar from './compoenents/Navbar'
import Veggie from './compoenents/Veggie'

function App() {


  return (
    <div className='flex justify-center flex-col items-center p-10 bg-amber-100'>
          <div>
             <Navbar/>
          </div>
          <div className="flex justify-center items-center p-4">
              <Card/>  
          </div>
         <div className="py-8">
         <div className='bg-white rounded-lg shadow-2xs p-4'>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Where Every Bite Tells a Story
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              At <strong>Critique & Crave</strong>, we don’t just serve food — we serve art on a plate. Guided by the palate of seasoned food critics, our kitchen crafts exquisite dishes that celebrate flavor, tradition, and creativity. Whether you're a culinary connoisseur or simply in search of a meal to remember, our menu is designed to awaken your senses and leave a lasting impression.
            </p>
            <p className="mt-4 text-gray-700">
              🍷 Thoughtfully curated wines. <br />
              🌿 Locally-sourced ingredients. <br />
              🍰 Desserts worth dreaming about.
            </p>
            <p className="mt-6 text-xl font-semibold text-amber-700">
              Come experience food that speaks louder than words.
             </p> 
          </div>
         </div>
          <div className='flex justify-center p-4 bg-amber-300 items-center'>
                 <Veggie/>
          </div>
    </div>
  )
}

export default App
