import { magnify } from "../../assets"


export const TutorialHead = () => {
  return (
    <>
    <div id="tut" className="">
    <div id="tut1" className="w-full h-fit pt-[8rem] text-left">
        <div className="h-fit md:ml-[400px] md:mt-[100px] items-center">
        <h1 className="text-6xl text-white">Tutorials</h1>
        <p className="text-white mt-4">Learn more</p>
        </div>
    </div>
    </div>
    <form className="mt-4 mb-6">
    <div className="p-4 flex justify-center h-fit ">
      <div className="md:w-[40%] h-fit  border rounded-lg bg-input_bg flex justify-between p-2">
      <input placeholder="Search for video" className="pl-5 bg-transparent outline-none w-full"></input>
      <img src={magnify} className="w-[40px] h-[40px]"></img>
    </div>
      </div>
    </form>
    </>
  )
}
