import ShoppingBag from '../../../../assets/shopping-bag.svg';
import Besnik from '../../../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className="flex space-between items-center p-2">
      <div className="flex-1 text-[0.86rem] font-[400] text-[#404041] ">
        <ul className="flex gap-6">
          <li>ABOUT</li>
          <li>HOW IT WORKS</li>
          <li>CONTACT</li>
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
