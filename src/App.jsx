import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const dialog = document.getElementById('nav-dialog');
function toggle() {
  dialog.classList.toggle('hidden');
}

const App = () => (
  <>
  <div id="container" className="w-full min-h-dvh bg-gradient-to-r from-[#70e1f5] to-[#ffd194]">
    <div className=" items-center max-w-full flex justify-between">
        <a href="#" className="w-60 flex items-center"> 
          <a href="#" id="brand"><img src="src/Components/icons/butterfly-logo-colorful-gradient-illustrations.png" alt="logo" className="w-32 cursor-none bg-transparent"/></a>
          <span className=" text-3xl font-[900] cursor-none text-violet-900" >Gildy</span>
        </a>
      
        <div id="nav-menu" className="w-full m-5 items-center flex ">
          <nav className="hidden md:flex w-full justify-center bg-gradient-to-br from-[#E55D87] to-[#5FC3E4] rounded-2xl">
          <a href="#Home" className="p-2 px-10 font-semibold text-[1.25rem] transition delay-150 ease-in-out  hover: hover:bg-slate-400  ">Home</a>
          <a href="#About" className="p-2 px-10 font-semibold text-[1.25rem] transition delay-150 ease-in-out  hover: hover:bg-slate-400 ">About</a>
          <a href="#Categories" className="p-2 px-10 font-semibold text-[1.25rem] transition delay-150 ease-in-out  hover: hover:bg-slate-400 ">Categories</a>
          <a href="#Blog" className="p-2 px-12 font-semibold text-[1.25rem] transition delay-150 ease-in-out  hover: hover:bg-slate-400 ">Blog</a>
          </nav>
        </div>
        <button className="hidden md:flex items-center border-2 border-rose-600 h-10 w-100 pl-4 pr-4 m-4 rounded-md bg-rose-500 text-black gap-2 trasition duration-300 hover:scale-110 active:bg-rose-700">
          CART<FontAwesomeIcon icon={faCartShopping} className="flex text-black"/>
        </button>
        <button className="p-5 md:hidden" onClick={toggle}>
              <i class="fa fa-solid fa-bars text-gray-500 hover:text-violet-900 text-2xl" ></i>
        </button>
        <div id="nav-dialog" className="fixed right-0 inset-0 w-full bg-white md:hidden">
          <div id="nav-bar" className="flex justify-between">
            <a href="#" className="w-52 flex items-center"> 
              <a href="#" id="brand"><img src="src/Components/icons/butterfly-logo-colorful-gradient-illustrations.png" alt="logo" className="w-16 bg-transparent"/></a>
              <span className=" text-3xl font-[900] cursor-none text-violet-900" >Gildy</span>
            </a>
            <button className="p-6 md:hidden" onClick={toggle}>
              <FontAwesomeIcon icon={faXmark} className="text-gray-500 hover:text-violet-900 text-[2.2rem]"/>
            </button>
            
          </div>
          <div className="mt-6">
          <a href="#Home" className="block text-2xl font-bold m-4 p-3 hover:bg-slate-50 rounded-lg"><FontAwesomeIcon icon={faArrowRight} className="text-[1.2rem]" /> Home </a>
          <a href="#Home" className="block text-2xl font-bold m-4 p-3 hover:bg-slate-50 rounded-lg"><FontAwesomeIcon icon={faArrowRight} className="text-[1.2rem]" /> About </a>
          <a href="#Home" className="block text-2xl font-bold m-4 p-3 hover:bg-slate-50 rounded-lg"><FontAwesomeIcon icon={faArrowRight} className="text-[1.2rem]" /> Categories </a>
          <a href="#Home" className="block text-2xl font-bold m-4 p-3 hover:bg-slate-50 rounded-lg"><FontAwesomeIcon icon={faArrowRight} className="text-[1.2rem]" /> Blog </a>
            </div>
            <div className="h-0.5 font-thin bg-slate-200"></div>
            <button className="w-60 md:flex items-center border-2 border-rose-600 h-10 w-100 pl-4 pr-4 m-4 rounded-md bg-rose-500 text-black gap-3 trasition duration-300 hover:scale-110 active:bg-rose-700">
              CART &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCartShopping} className=" text-black"/>
            </button>
        </div>
        
    </div>
    </div>
  </>
  
)

export default App;