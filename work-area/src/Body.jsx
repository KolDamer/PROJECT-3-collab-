import React from "react";
import lightbulb from "./gublisimages/images/light-bulb.png";
import ATD from "./gublisimages/images/icon-eye.png";
import ST from "./gublisimages/images/icon-clock.png";
import CC from "./gublisimages/images/icon-dashboard.png";
import Support from "./gublisimages/images/icon-headset.png";
import Checkmark from "./gublisimages/images/checkmark.png";
import Chatbubbles from "./gublisimages/images/chat-bubbles.png";
import John from "./gublisimages/images/team-1.jpg";
import Alice from "./gublisimages/images/team-2.jpg";
import Scott from "./gublisimages/images/team-3.jpg";
import Facebook from "./gublisimages/images/social-facebook.png";
import Twitter from "./gublisimages/images/social-twitter.png";
import Google from "./gublisimages/images/social-google.png";
function Body() {
  return (
    <div className="font-sans">
      {/* 1st section */}
      <div>
        <center className="flex py-[100px] justify-center">
          <div className=" w-[600px] ">
            <img src={lightbulb} alt="" />
          </div>
          <div className=" space-y-[20px] text-left   w-[600px] ">
            <h1 className=" font-bold text-[57px] text-[#444]">
              WE LOVE <br />
              BRIGHT IDEAS
            </h1>
            <p className="text-[#66a684] text-[17px]  font-bold">
              SEE YOUR IDEAS BROUGHT TO LIFE
            </p>
            <br />
            <p  className="text-[#898887] w-[463px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              gravida blandit lacus a laoreet. Nullam sollicitudin urna metus,
              at malesuada orci fringilla in. Curabitur eleifend risus vitae
              ligula semper scelerisque. Nulla sed nisl nulla. <br />
            </p>
            <p  className="text-[#898887] w-[463px]">
              Fusce interdum suscipit ipsum, quis mattis metus posuere sit amet.
              Mauris rutrum imperdiet tortor.
            </p>
          </div>
        </center>
      </div>

      {/* 2nd section */}
      <div className=" bg-[#66a684] text-white py-[100px] ">
        <div className=" flex justify-center ">
          {/* attention to detail */}
          <div className="flex space-x-[24px] pr-[50px] pb-[50px] border-slate-400 border-r border-b  ">
            <div className=" place-content-center"><img src={ATD} alt="" /></div>
            <p className="space-y-[20px]">
              <h5 className=" text-[21px] font-bold">ATTENTION TO DETAIL</h5>
              <p className="text-[#bfeed7] w-[354px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                dignissim sapien. Mauris congue faucibus enim, vel molestie
                lectus
              </p>
            </p>
          </div>
          {/* save time */}
          <div className="border-b border-slate-400 pl-[50px] flex space-x-[24px]">
            <div className=" place-content-center"><img src={ST} alt="" /></div>
            <p className="space-y-[20px]">
              <h5 className=" text-[21px] font-bold">SAVE TIME</h5>
              <p className="text-[#bfeed7] w-[354px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                dignissim sapien. Mauris congue faucibus enim, vel molestie
                lectus
              </p>
            </p>
          </div>
        </div>

        <div className=" ml-[10px] flex justify-center ">
          {/* complete control */}
          <div className="flex border-r border-slate-400 pt-[50px] space-x-[24px] pr-[50px]">
          <div className=" place-content-center"> <img src={CC} alt="" /></div>
            <p className="space-y-[20px]">
              <h5 className=" text-[21px] font-bold">COMPLETE CONTROL</h5>
              <p className="text-[#bfeed7] w-[354px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                dignissim sapien. Mauris congue faucibus enim, vel molestie
                lectus
              </p>
            </p>
          </div>
          {/* 24/7 support */}
          <div className="flex pt-[50px] pl-[50px] space-x-[24px]">
            <div className=" place-content-center"><img src={Support} alt="" /></div>
            <p className="space-y-[20px]">
              <h5 className=" text-[21px] font-bold">SUPPORT</h5>
              <p className="text-[#bfeed7] w-[354px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
                dignissim sapien. Mauris congue faucibus enim, vel molestie
                lectus
              </p>
            </p>
          </div>
        </div>
      </div>

      {/* 3rd section */}
      <div className="flex justify-center space-x-[100px] py-[100px]">
        <div className="space-y-[20px]">
          <h1 className="text-[54px] font-bold text-[#444]">LET'S TALK</h1>
          <p className="text-[#66a684] text-[17px]  font-bold">
            WE'RE HERE TO LISTEN TO YOUR NEEDS
          </p>
          <p className="text-[#898887] py-[20px] w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            gravida blandit lacus a laoreet. Nullam sollicitudin urna metus, at
            malesuada orci fringilla in.
          </p>
          <div className="space-y-[20px]">
            <p className="flex justify-center space-x-4 w-[430px]">
              <div className=" place-content-center"><img className=" h-[22px]" src={Checkmark} alt="" /></div>
              <p className="text-[#898887] ">
                Curabitur eleifend risus vitae ligula semper scelerisque.
              </p>
            </p>
            <p className="flex space-x-4">
            <div className=" place-content-center"><img className=" h-[22px]" src={Checkmark} alt="" /></div>
              <p className="text-[#898887] ">Fusce interdum suscipit ipsum.</p>
            </p>
            <p className="flex space-x-4">
            <div className=" place-content-center"><img className=" h-[22px]" src={Checkmark} alt="" /></div>
              <p className="text-[#898887] ">
                Quis mattis metus posuere sit amet.
              </p>
            </p>
            <p className="flex space-x-4">
            <div className=" place-content-center"><img className=" h-[22px]" src={Checkmark} alt="" /></div>
              <p className="text-[#898887]">Mauris rutrum imperdiet tortor.</p>
            </p>
          </div>
        </div>
        <div className=" place-content-center">
          <img src={Chatbubbles} alt="" />
        </div>
      </div>

      {/* 4th section */}
      <div className="py-[100px] bg-[#f9f9f9]">
        <center className="pb-[100px]">
          <h1 className="text-[54px] font-bold text-[#444]">THE TEAM</h1>
          <p className="text-[#66a684] text-[17px]  font-bold">
            GET TO KNOW US
          </p>
        </center>
        <div className="flex space-x-[120px] justify-center">
          {/* JOHN */}
          <div className=" w-[330px]  grayscale hover:filter-none">
            <center>
              <img className="rounded-full" src={John} alt="" />
              <div className=" bg-white pb-[40px] space-y-[10px]  hover:shadow-2xl mt-[-100px]   pt-[120px] text-center">
                <h1 className="text-[21px] text-[#444] font-bold">JOHN GARRET</h1>
                <p className="text-[#444] font-semibold">Lead Designer</p>
                <div className="pt-[15px] flex justify-center space-x-[20px]">
                  <div className=" place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Facebook} alt="" /></center></div>
                  <div className=" place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Twitter} alt="" /></center></div>
                  <div className=" place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Google} alt="" /></center></div>
                </div>
              </div>
            </center>
          </div>
{/* ALICE */}
          <div className=" w-[330px]  grayscale hover:filter-none">
            <center>
              <img className="rounded-full" src={Alice} alt="" />
              <div  className=" bg-white pb-[40px] space-y-[10px]  hover:shadow-2xl mt-[-100px]   pt-[120px] text-center">
                <h1 className="text-[21px] text-[#444] font-bold">ALICE M</h1>
                <p className="text-[#444] font-semibold">Lead Designer</p>
                <div className="pt-[15px] flex justify-center space-x-[20px]">
                  <div className="place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Facebook} alt="" /></center></div>
                  <div className="place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Twitter} alt="" /></center></div>
                  <div className="place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Google} alt="" /></center></div>
                </div>
              </div>
            </center>
          </div>
{/* SCOTT */}
          <div className="  w-[330px]  grayscale hover:filter-none">
            <center>
              <img className="rounded-full  " src={Scott} alt="" />
              <div className=" bg-white pb-[40px] space-y-[10px]  hover:shadow-2xl mt-[-100px]   pt-[120px] text-center">
                <h1 className="text-[21px] text-[#444] font-bold">SCOTT HARRIS</h1>
                <p className="text-[#444] font-semibold">Lead Designer</p>
                <div className="pt-[15px] flex justify-center space-x-[20px]">
                  <div className="place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Facebook} alt="" /></center></div>
                  <div className="place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Twitter} alt="" /></center></div>
                  <div className="place-content-center bg-slate-300 hover:bg-[#66a684] w-[40px] h-[40px] rounded-full"><center><img className=""  src={Google} alt="" /></center></div>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );


export default Body;
