import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
const Item = ({ data, addToCart }) => {

  const { image, title, price } = data;
 

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl px-4 mx-auto ">
        <div className="flex-col shadow-2xl p-8 rounded-3xl text-center">  
        <div>
          <img
            src={image}
            className="shadow-xl h-72 w-full object-cover rounded-lg"
            alt=''
          />
          </div>
          <div>
          <Link to='/' className=" font-semibold text-xl my-10">
          {title}
          </Link>
          </div>
          <div className="flex justify-between mt-5"> 
          <div>
            <span className="text-[#513252] font-bold text-2xl">
              {price}
            </span>
          </div>
          <div className="cursor-pointer" onClick={addToCart} >
          <FaShoppingCart color="#513252" size={25} />
            </div>
            </div>
          </div>
        </div>
        
    </>
  );
};

export { Item } ;

