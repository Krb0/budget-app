import ShoppingBag from '../../../../assets/shopping-bag.svg';
import Besnik from '../../../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex space-between items-center p-2 sticky top-0 bg-white z-[500] min-w-full  shadow-lg container">
      <div className="flex-1 text-[0.86rem] font-[400] text-[#404041] ">
        <ul className="flex gap-6">
          <li className="cursor-pointer hover:opacity-70 ">ABOUT</li>
          <li className="cursor-pointer hover:opacity-70 ">HOW IT WORKS</li>
          <li className="cursor-pointer hover:opacity-70 ">CONTACT</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <img src={Besnik} className="w-[6rem]" />
      </div>
      <div className="flex-1 flex justify-end">
        <div className="p-3 rounded-full border-[#DFDFDF] border-[2px]  ">
          <img src={ShoppingBag} className="w-[1.2rem] h-[1.2rem]" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
