import Logo from "../Assets/Icons/whiteLogo200-removebg-preview.png";

export function Navbar() {
    return(
    <div class="h-20 p-1 flex justify-between items-center border-b-2 border-[#292891]">
        <img src={Logo} alt="AM logo" class="h-20"></img>
        <ul class="w-2/5 flex justify-between">
            <li class="text-[#292891] border-none hover:border-solid border-b-2 border-[#2dd3db]"><a href="src\Containers\OurMission.jsx">Our Mission</a></li>
            <li class="text-[#292891] border-none hover:border-solid border-b-2 border-[#2dd3db]"><a href="src\Containers\Advantages.jsx">Advantages</a></li>
            <li class="text-[#292891] border-none hover:border-solid border-b-2 border-[#2dd3db]"><a href="src\Containers\Partners.jsx">Partners</a></li>
            <li class="text-[#292891] border-none hover:border-solid border-b-2 border-[#2dd3db]"><a href="src\Containers\Reviews.jsx">Reviews</a></li>
            <li class="text-[#292891] border-none hover:border-solid border-b-2 border-[#2dd3db]"><a href="src\Containers\Prices.jsx">Prices</a></li>
        </ul>
        <div className="cta" class="w-2/12 flex justify-around">
            <button class="p-0.5 px-1 bg-[#2dd3db] rounded-lg hover:border border-[#2dd3db] hover:bg-transparent">Login</button>
            <button class="p-0.5 px-1 bg-[#2dd3db] rounded-lg hover:border border-[#2dd3db] hover:bg-transparent">Sign up</button>
        </div>
    </div>
    )
}