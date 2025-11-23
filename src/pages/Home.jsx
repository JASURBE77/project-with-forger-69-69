import React from "react";
import Banner from "../components/Banner.jsx";
import Playstation from "../assets/PlayStation.png";
import AirpodsMax from "../assets/airpodsmax.png";
import VisionPro from "../assets/visionPor.png";
import Macpro from "../assets/MacBook Pro 14.png";
import Category from "../components/Category";
import { useDispatch, useSelector } from "react-redux";
import { fetchdataBase } from "../redux/slice/productsSlice";
import { useEffect } from "react";
import Iphone14 from "../assets/Iphone 14 pro 1.png"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.server);
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchdataBase())
  },[])

  return (
    <div>

      <Banner />

     <div className="mt-10">
         <div className="container mx-auto px-4 ">
        <div className="flex flex-wrap justify-center gap-2 max-w-full">

          <div className="flex flex-col gap-5 max-w-[600px] max-[1460px]:max-w-[500px] max-[1345px]:w-[450px] w-full">

            <div className="flex items-center justify-between max-[1000px]:flex-col max-[1000px]:text-center">
              <img
                src={Playstation}
                className="w-[220px] max-[1460px]:w-[180px] max-[1345px]:w-[150px]"
              />
              <div>
                <span className="text-black max-[1460px]:text-2xl max-[1345px]:text-xl font-medium text-3xl max-[1000px]:text-2xl">
                  Playstation 5
                </span>
                <p className="w-[338px] max-[1000px]:w-full text-[15px] max-[1000px]:text-base">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
                  redefine your PlayStation experience.
                </p>
              </div>
            </div>

            <div className="flex gap-2 max-[1000px]:flex-col">
              <div className="flex items-center bg-[#EDEDED]  rounded-xl justify-between w-full">
                <img
                  src={AirpodsMax}
                  className="w-[140px] max-[1460px]:w-[100px] max-[1345px]:w-[80px]"
                />
                <div>
                  <div className="text-black max-[1460px]:text-2xl max-[1345px]:text-xl font-medium text-3xl max-[1000px]:text-2xl">
                    Apple AirPods Max
                  </div>
                  <p className="w-[160px] max-[1000px]:w-full text-[15px] text-[#909090]">
                    Computational audio. Listen, it's powerful
                  </p>
                </div>
              </div>
              <div className="flex bg-[#353535]  rounded-xl items-center justify-around w-full">
                <img
                  src={VisionPro}
                  className="w-[140px] max-[1460px]:w-[100px] max-[1345px]:w-[80px]"
                />
                <div>
                  <div className="text-white max-[1460px]:w-[150px] max-[1460px]:text-2xl max-[1345px]:text-xl font-medium text-3xl max-[1000px]:text-2xl">
                    Apple Vision Pro
                  </div>
                  <p className="w-[160px] text-[15px] max-[1000px]:w-full text-[#909090]">
                    An immersive way to experience entertainment
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className="flex items-center justify-between gap-5 bg-white max-[1000px]:flex-col max-[1000px]:text-center max-w-[600px] max-[1460px]:max-w-[500px] max-[1345px]:w-[400px] w-full py-10 px-5 rounded-xl shadow-sm">
            <div className="max-w-[220px] space-y-3">
              <div className="text-6xl max-[1460px]:text-4xl max-[1345px]:text-3xl font-semibold">
                Macbook Air
              </div>
              <p className="text-[#909090] text-[15px] max-[1000px]:text-base">
                The new 15-inch MacBook Air makes room for more of what you love.
              </p>
              <button className="btn border-black hover:bg-black hover:text-white">
                shop now
              </button>
            </div>

            <img
              src={Macpro}
              className="w-[350px] max-[1460px]:w-[250px] max-[1345px]:w-[200px]"
            />
          </div>
        </div>
      </div>
     </div>

      <Category />

      <div className="container">
        <div>
            <div className="flex flex-wrap justify-center gap-5 max-[768px]:gap-2">
  {data?.length > 0 ? (
    data.slice(0, 10).map((product) => (
        <div key={product.id} onClick={() => navigate(`/produc/detail/${product.id}`)} className="max-w-[268px] max-[1060px]:max-w-[220px] py-2 max-[545px]:max-w-[180px] max-[400px]:max-w-[170px] w-full bg-[#F6F6F6] rounded-2xl gap-3 flex flex-col items-center">
            <img className="object-cover mb-5" src={Iphone14} alt="" />
            <div className="">{product.title}</div>
            <span>{product.price}</span>
            <button className="btn btn-neutral mb-5">buy now</button>
        </div>
    ))
  ) : (
    <p>{loading ? "Loading..." : "No products found"}</p>
  )}
</div>
        </div>
      </div>

    </div>
  );
};

export default Home;
