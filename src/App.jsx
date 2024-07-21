import omlet from './assets/images/image-omelette.jpeg' ;
import './App.css'

function App() {

  return (
    <>
      <div className='bg-stone-100 grid grid-cols-1 place-items-center'>
            <div className='block min-[370px]:hidden'>
              <img src= {omlet} alt="Omlet pic" className='rounded-lg'/>
            </div>
        <div className='bg-white max-w-4xl md:my-24 md:p-10 p-6 md:rounded-3xl'>
            <div className='hidden min-[370px]:block'>
              <img src= {omlet} alt="Omlet pic" className='rounded-lg'/>
            </div>
            <div className='mt-9'>
              <h1 className='font-young font-bold text-5xl'>Simple Omelette Recipe</h1>
              <p className='font-outfit font-normal my-5'> An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats</p>
            </div>
            <div className='bg-rose-50 p-5 rounded-lg'>
              <h2 className='text-rose-800 font-outfit font-semibold text-xl'>Preparation time</h2>
              <ul className='list-disc list-inside font-outfit mt-2 pl-2 text-rose-800 space-y-3'>
                <li><span className='text-black font-medium'>Total:</span> <span className='text-black font-light'>Approximately 10 minutes</span></li>
                <li><span className='text-black font-medium'>Preparation:</span> <span className='text-black font-light'>5 minutes</span> </li>
                <li><span className='text-black font-medium'>Cooking:</span> <span className='text-black font-light'>5 minutes</span></li>
              </ul>
            </div>
            <div className='my-7 pb-7 border-b-2'>
              <h2 className='text-brown-800 font-young text-3xl font-semibold'>Ingredients</h2>
              <ul className='list-disc list-inside mt-4 font-outfit pl-2 text-brown-800 space-y-2'>
                <li><span className='text-black'>2-3 large eggs</span></li>
                <li><span className='text-black'>Salt, to taste</span></li>
                <li><span className='text-black'>Pepper, to taste</span></li>
                <li><span className='text-black'> className='text-black'1 tablespoon of butter or oil</span></li>
                <li><span className='text-black'>Optional fillings: cheese, diced vegetables, cooked meats, herbs</span></li>
              </ul>
            </div>
            <div className='border-b-2 pb-7'>
              <h2 className='text-brown-800 font-young text-3xl font-semibold'>Instructions</h2>
              <ol className='list-decimal list-outside mt-5 font-outfit space-y-5 ml-5 text-brown-800'>
                <li><div className='ml-4 text-black'><span className='font-semibold'>Beat the eggs:</span> In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</div></li>
                <li><div className='ml-4 text-black'><span className='font-semibold'>Heat the pan:</span> Place a non-stick frying pan over medium heat and add butter or oil.</div></li>
                <li><div className='ml-4 text-black'><span className='font-semibold'>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</div></li>
                <li><div className='ml-4 text-black'><span className='font-semibold'>Add fillings (optional):</span> When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</div></li>
                <li><div className='ml-4 text-black'><span className='font-semibold'>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.</div> </li>
                <li><div className='ml-4 text-black'><span className='font-semibold'>Enjoy:</span> Serve hot, with additional salt and pepper if needed.</div></li>
              </ol>
            </div>
            <div className='my-7'>
              <h2 className='text-brown-800 font-young text-3xl font-semibold'>Nutrition</h2>
              <p className='font-outfit mt-5'>The table below shows nutritional values per serving without the additional fillings.</p>
              <div className='mt-6 '>
                  <div className='flex justify-around border-b-2 py-3 font-outfit'>
                    <span>Calories</span>
                    <span className='text-brown-800 font-bold '>277kcal</span>
                  </div>
                  <div className='flex justify-around border-b-2 py-3 font-outfit'>
                    <span>Carbs</span>
                    <span className='text-brown-800 font-bold '>0g</span>
                  </div>
                  <div className='flex justify-around border-b-2 py-3 font-outfit'>
                    <span >Protein</span>
                    <span className='text-brown-800 font-bold '>20g</span>
                  </div>
                  <div className='flex justify-around  py-3 font-outfit'>
                    <span>Fat</span>
                    <span className='text-brown-800 font-bold '>22g</span>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default App
