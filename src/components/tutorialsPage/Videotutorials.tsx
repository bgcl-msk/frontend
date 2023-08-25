import { VideoTutorial } from "../../constant"

export const Videotutorials = () => {
  return (
    <div id="vid_tutorial" className="grid gap-[2rem] grid-cols-3 mb-8 mt-4">
        {
            VideoTutorial.map((VideoTutorial) => (
        <div className=" flex flex-col justify-center items-center">
            <video width="400px" height="400px" className="border" src={VideoTutorial.video_link}></video>
            <p>{VideoTutorial.title}</p>
        </div>
            ))
        }
    </div>
  )
}
