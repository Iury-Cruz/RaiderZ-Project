

/* Crawler */

import crawlerpic from "./img/Crawler.webp"


function DataTest (){

    return(

        <>
        <main className="w-[100%] h-[100vh] flex justify-center items-center">
            <div className="w-[800px] h-[80vh] flex  bg-[url(./img/MainDataBoard-BG.png)]  bg-contain bg-no-repeat">
                <div className="border-[5px]  w-[35vh] left-  h-[60vh]   ">
                    <img className="w-[250px] h-[]" src={crawlerpic} alt="" />
                </div>
                

            </div>
        </main>
        </>

    )

}

export default DataTest