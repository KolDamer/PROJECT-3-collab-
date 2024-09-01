
import React from "react";
import logo from "../../images/logo.png";
import headerimage from "../../images/header-image.jpg";
import video from "../../images/video-poster.jpg";
import pencil from "../../images/icon-pencil.png";
import camera from "../../images/icon-camera.png";
import film from "../../images/icon-film.png";
import bulb from "../../images/light-bulb.png";


function Header (){
    return(

        <div>
            {/* sec1 parent */}
            <div  className="px-[150px]">
                <div className="flex justify-around bg-white py-7">
                    <div>
                        
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="space-x-8 py-5">
                        <h className="text-[#373e3b] font-bold ">HOME</h>
                        <h className="text-[#898887] font-semibold">ABOUT US</h>
                        <h className="text-[#898887] font-semibold">SERVICES</h>
                        <h className="text-[#898887] font-semibold">PORTFOLIO</h>
                        <button className="border-2 border-[#66a684] px-6 py-1 text-[#66a684] rounded-[20px]">TRY NOW</button>
                    </div>
                </div>
                {/* image section */}
                <div >
                        
                        <div className=" bg-[url('../../images/header-image.jpg')] h-[850px]  w-full bg-center pt-[280px] bg-cover bg-no-repeat items-center">
                            

                             <div className="text-[#373e3b] text-center font-semibold font-sans text-8xl">  
                            <h >CHASE</h>
                            </div>

                            <div className="text-[#898887] text-center font-semibold">
                            <h>CLEAN, MINIMAL LANDING PAGE TEMPLATE</h>
                            </div>

                            <div className="flex space-x-[20px] pt-14  justify-center">
                                <button className="border border-solid border-none bg-[#66a684] text-white rounded-[20px]  px-[45px] py-2 hover:bg-[#55c989] transition ease-in-out">
                                        TRY NOW
                                </button>
                                <button className="border border-solid border-[#373e3b] text-[#373e3b] px-[35px] py-2 rounded-[20px] ">
                                        LEARN MORE
                                </button>
                            </div>
                        </div>
                        

                </div>


            </div>


                {/* section 2 */}
                
            <div className=" grid  place-content-center py-[130px]">
                <div>
                    <div className="text-center font-semibold font-sans py-5 text-5xl text-[#373e3b] ">
                        <h >WHAT IS CHASE?</h>
                    </div>
                    <div className="text-center text-[#42b676] font-semibold">
                        <h>WATCH OUR PROMOTIONAL VIDEO</h>
                    </div>
                    <div className="hover:drop-shadow-2xl transition ease-in-out">
                        <img src={video} alt="videoposter " className="py-10 hover:scale-110 transition ease-in-out hover:drop-shadow-8xl" />
                    </div>
                    <div className="text-center pt-[50px]">
                        <button className="text-white border-none px-[60px] rounded-[20px] py-2 bg-[#42b676] hover:bg-[#55c989] transition ease-in-out">BEGIN</button>
                    </div>
                </div>
            </div>

            {/* section 3 */}

            <div className=" bg-[#f9f9f9] py-[90px]">
                <div className="text-center flex flex-col space-y-4">
                    <h className="font-sans text-5xl font-semibold text-[#373e3b]">SERVICES</h>
                    <h className="text-[#42b676]">WE DO LOTS OF COOL THINGS</h>
                </div>
                        {/* for flexed boxes */}

                        
                <div className="flex justify-center space-x-10 py-[80px]">

                                    {/* block1 */}
                    <div className="bg-white drop-shadow-none hover:drop-shadow-2xl  transition ease-in-out w-[320px] h-[380px] px-5 text-center ">
                        <div className="py-5 px-5">
                        <div className="bg-[#f9f9f9] relative rounded-[100px] w-[70px] h-[70px] mx-[83px] my-4  ">
                            <img src={pencil} alt="pencil" className="absolute top-[19px] left-[21px] w-[30px]" />
                        </div>

                        <div className="flex flex-col space-y-2 ">
                            <h className="text-xl font-semibold text-[#373e3b]">GRAPHIC DESIGN</h>
                            <div className="w-[240px]">
                            <h>Lorem ipsum dolor sit amet
                            
                                consectetur adipisicing elit. Reiciendis beatae
                            
                                  molestias ea cumque quidem id mollitia sit tenetur ipsam.
                                 
                                

                            </h>
                            </div>
                            <div className="pt-7 hover:text-[#42b676] text-[#898887]  transition ease-in-out">
                            <button className="text-[16px] ">
                                LEARN MORE
                            </button>
                            </div>
                        </div>
                        </div>
                    </div>
                                            {/* block2 */}
                    <div className="bg-white w-[320px] h-[380px] px-5 text-center drop-shadow-none hover:drop-shadow-2xl  transition ease-in-out">
                        <div className="py-5 px-4">
                                <div  className="bg-[#f9f9f9] relative rounded-[100px] w-[70px] h-[70px] mx-[83px] my-4  ">
                                    <img src={camera} alt="camera"  className="absolute top-[19px] left-[21px] w-[30px]"/>
                                </div>
                                
                                <div className="flex flex-col space-y-2 ">
                                    <h className="text-xl font-semibold text-[#373e3b]">PHOTOGRAPHY</h>
                                    <div className="w-[240px]">
                                    <h>Lorem ipsum dolor sit amet
                                    
                                        consectetur adipisicing elit. Reiciendis beatae
                                    
                                        molestias ea cumque quidem id mollitia sit tenetur ipsam.
                                        
                                        

                                    </h>
                                    </div>
                                    <div className="pt-7 text-[#42b676 text-[#898887]  hover:text-[#42b676] transition ease-in-out]">
                                    <button className="text-[16px] ">
                                        LEARN MORE
                                    </button>
                                    </div>
                                </div>
                        </div>

                    </div>

                                        {/* block3 */}
                    <div className="bg-white w-[320px] h-[380px] px-5 text-center drop-shadow-none hover:drop-shadow-2xl  transition ease-in-out">
                        <div className="py-5 px-4">
                                <div  className="bg-[#f9f9f9] relative rounded-[100px] w-[70px] h-[70px] mx-[83px] my-4  ">
                                    <img src={film} alt="film"  className="absolute top-[19px] left-[21px] w-[30px]"/>
                                </div>
                                
                                <div className="flex flex-col space-y-2 ">
                                    <h className="text-xl font-semibold text-[#373e3b]">ANIMATION</h>
                                    <div className="w-[240px]">
                                    <h>Lorem ipsum dolor sit amet
                                    
                                        consectetur adipisicing elit. Reiciendis beatae
                                    
                                        molestias ea cumque quidem id mollitia sit tenetur ipsam.
                                        
                                        

                                    </h>
                                    </div>
                                    <div className="pt-7  text-[#898887]  hover:text-[#42b676] transition ease-in-out">
                                    <button className="text-[16px] ">
                                        LEARN MORE
                                    </button>
                                    </div>
                                </div>
                        </div>

                    </div>
                 
                </div>
            </div>


                       

        </div>
    )
}

export default Header