import portfolio1 from "../../images/project-1-thumb.jpg";
import portfolio2 from "../../images/project-2-thumb.jpg";
import portfolio3 from "../../images/project-3-thumb.jpg";
import portfolio4 from "../../images/project-4-thumb.jpg";
import portfolio5 from "../../images/project-5-thumb.jpg";
import portfolio6 from "../../images/project-6-thumb.jpg";
import footerlogo from "../../images/logo-footer.png";
import facebooklogo from "../../images/social-facebook.png";
import twitterlogo from "../../images/social-twitter.png";
import googlelogo from "../../images/social-google.png";
function Footer() {
  return (
    // THIS IS KDAB'S PART
    <div>
      {/* PORTFOLIO */}
      <div className="pt-[100px] pb-[30px] ">
        <p  className=" text-center text-[60px] font-medium text-[#444444] leading-[40px] pb-12">
          PORTFOLIO <br />
          <span className="font-semibold text-[17px] text-[#7bbd9d]">OUR FEATURED WORKS</span>
        </p>
      </div>
      <div className="flex justify-center space-x-8 mb-8">
        <img src={portfolio1} alt="portfolio1 img" width="300px"/>
        <img src={portfolio2} alt="portfolio2 img" width="300px"/>
        <img src={portfolio3} alt="portfolio3 img" width="300px"/>
      </div>
      <div className="flex justify-center space-x-8 mb-20">
        <img src={portfolio4} alt="portfolio4 img" width="300px"/>
        <img src={portfolio5} alt="portfolio5 img" width="300px"/>
        <img src={portfolio6} alt="portfolio6 img" width="300px"/>
      </div>

      {/* SUBSCRIBE */}
      <div className="pt-[100px] pb-[100px] bg-[#5dae87] ">
        <p  className=" text-center text-[60px] font-medium text-white leading-[40px] pb-10">
          SUBSCRIBE <br />
          <span className="font-semibold text-[17px] text-[#b7e8d0]">STAY UP TO DATE WITH US</span>
        </p>
        {/* Name and Email form */}
        <div className="flex justify-center space-x-3">
        <input type="text" placeholder="YOUR NAME" className=" uppercase focus-within:outline-none focus-within:placeholder:text-white focus-within:text-white placeholder-[#c7e2d5] bg-[#5dae87] border-2 border-[#c4e1d3] text-[#b7e8d0] font-medium rounded-[40px] pr-[55px] pl-2 py-[15px]"/>
        <input type="email" placeholder="EMAIL ADDRESS" className="  uppercase focus-within:outline-none focus-within:placeholder:text-white focus-within:text-white placeholder-[#c7e2d5] bg-[#5dae87] border-2 border-[#c4e1d3] text-[#b7e8d0] font-medium rounded-[40px] pr-[55px] pl-2 py-[8px]"/>
        <p>
          <button type="submit" title="Submit" className="text-[#5dae87] bg-white  text-[16px] font-semibold border-2 border-solid border-white rounded-[40px] px-[55px] py-[15px] ">
            SUBMIT
          </button>
        </p>
        </div>
      </div>

      {/* PRICING */}
      <div className="pt-[100px] pb-[30px] bg-[#f9f9f9]">
        <p  className=" text-center text-[55px] font-medium text-[#444444] leading-[40px] pb-12">
          PRICING <br />
          <span className="font-semibold text-[17px] text-[#7bbd9d]">CHOOSE A PLAN TO SUIT YOU</span>
        </p>
        <div className="flex justify-center space-x-10 pt-10 pb-32">
            <div className="bg-white text-center py-9 px-[60px] hover:shadow-2xl hover:shadow-zinc-300">
                <p className=" text-[#444444] text-[90px] font-medium">
                  <sup className="text-[27px] align-super">$</sup>
                  9
                  <span className="text-[20px] font-bold">/MO</span>
                </p>
                <p className="text-[#bfbfbf] font-semibold leading-[35px] text-[18px] ">
                <p className=" text-[#444444] text-[25px] font-semibold pb-6 -mt-5">
                BASIC <br />
                </p>
                  500GB STORAGE <br />
                  UNLIMITED BANDWIDTH <br />
                  10 CLIENTS <br />
                  50 PROJECTS
                </p>
                <button className=" hover:bg-[#64635f] hover:text-white mt-[50px] font-medium text-[17px] text-[#64635f] py-[15px] px-20 rounded-[32px] border-2 border-[#64635f] ">
                  BEGIN
                </button>            
            </div>
            <div className="bg-white text-center py-9 px-[60px] hover:shadow-2xl hover:shadow-zinc-300">
                <p className=" text-[#444444] text-[90px] font-medium">
                <sup className="text-[27px] align-super">$</sup>
                12
                  <span className="text-[20px] font-bold">/MO</span>
                </p>
                <p className="text-[#bfbfbf] font-semibold leading-[35px] text-[18px] ">
                  <p className=" text-[#444444] text-[25px] font-semibold pb-6 -mt-5">
                    PREMIUM <br />
                  </p>
                  1TB STORAGE <br />
                  UNLIMITED BANDWIDTH <br />
                  50 CLIENTS <br />
                  250 PROJECTS
                </p>
                <button className="hover:bg-[#2a815a] hover:border-[#2a815a] mt-[51px] font-medium text-[17px] bg-[#5dae87] py-[15px] px-20 rounded-[32px] border-2 border-[#5dae87] text-white ">
                  BEGIN
               </button>            
            </div>
            <div className="bg-white text-center py-9 px-[60px] hover:shadow-2xl hover:shadow-zinc-300">
                <p className=" text-[#444444] text-[90px] font-medium">
                <sup className="text-[27px] align-super">$</sup>
                18
                  <span className="text-[20px] font-bold">/MO</span>
                </p>
                <p className="text-[#bfbfbf] font-semibold leading-[35px] text-[18px] ">
                <p className=" text-[#444444] text-[25px] font-semibold pb-6 -mt-5">
                ELITE <br />
                </p>
                  5TB STORAGE <br />
                  UNLIMITED BANDWIDTH <br />
                  UNLIMITED CLIENTS <br />  
                  UNLIMITED PROJECTS
                </p>
                <button className="hover:bg-[#64635f] hover:text-white mt-[50px] font-medium text-[17px] text-[#64635f] py-[15px] px-20 rounded-[32px] border-2 border-[#64635f]  ">
                  BEGIN
                </button>                        
            </div>
        </div>
      </div>

      {/* HEARD ENOUGH */}
      <div className="pt-24 text-center pb-[110px] ">
          <p  className=" text-[60px] font-semibold text-[#444444] leading-[46px] pb-10">
              HEARD ENOUGH? <br />
              <span className="font-semibold text-[20px] text-[#7bbd9d]">LET'S GET STARTED</span>
          </p>
          <button className="hover:bg-[#2a815a] hover:border-[#2a815a] font-medium text-[17px] bg-[#5dae87] py-[15px] px-20 rounded-[32px] border-2 border-[#5dae87] text-white ">
                BEGIN
          </button>           
      </div>

      {/* COPYRIGHT */}
      <div className="  flex justify-center gap-96 bg-[#444444] py-16">
        <div className="flex items-center gap-12">
          <img src={footerlogo} alt="footer img" width="55px" className="cursor-pointer"/>
          <div>
              <p className="text-white font-semibold">COPYRIGHT 2016 © CHASE</p>
              <p className="text-[#949494] font-medium ">
                <ul className="flex gap-3">
                    <li className="hover:text-[#5dae87] cursor-pointer">Contact Us</li>|
                    <li className="hover:text-[#5dae87] cursor-pointer">Terms & Conditions</li>|
                    <li className="hover:text-[#5dae87] cursor-pointer">Privacy</li>
                </ul>
              </p>
          </div>
        </div>
        <div className="flex items-center  space-x-4">
          <p className="bg-[#363636] px-[18px] py-3 rounded-full hover:bg-[#5dae87] cursor-pointer">
            <img src={facebooklogo} alt="facebook logo" />
          </p>
          <p className="bg-[#363636] px-[12px] py-[14px] rounded-full hover:bg-[#5dae87] cursor-pointer">
            <img src={twitterlogo} alt="twitter logo" />
          </p>
          <p className="bg-[#363636] px-3 py-4 rounded-full hover:bg-[#5dae87] cursor-pointer">
            <img src={googlelogo} alt="google logo" width="25px"/>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer