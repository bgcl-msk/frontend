import { iphone } from "../../assets";
import { KeepingTracks } from "../../constant";

export const KeepingTrack = () => {
  return (
    <>
      <div className=" h-fit p-[2rem] flex m-auto text-left text-box_color msk_simpe">
        <div className=" m-auto msk_simp_words flex-1 msk_simpe">
          <div className="md:w-[70%] md:ml-[300px]" id="keepingtrack">
            <p className="text-3xl my-6">
              <b>Keeping track of your expenses is made easy with this app</b>
            </p>
            <p>
              Effortlessly stay on top of your finances with our intuitive
              application. From tracking daily expenditures to managing budgets,
              our app empowers you to take charge of your financial journey.
              Experience the convenience of comprehensive expense management at
              your fingertips.
            </p>
            <div className="grid gap-x-[300px] gap-y-2 grid-cols-2 w-1/2 mt-4 FAQ_card">
              {KeepingTracks.map((words) => (
                <div className="w-[300px] h-fit p-2">
                  <div className="flex">
                    <img src={words.icon} className="h-fit"></img>
                    <div>
                      <h2 className="text-box_color font-bold">
                        {words.title}
                      </h2>
                      <p>{words.words}</p>
                    </div>
                  </div>
                </div>
              ))}
              <button className="h-fit w-[200px] p-[5px] py-[7px] rounded-md cursor-pointer border-[1px] border-lightblue_color bg-white text-lightblue_color hover:bg-box_color hover:text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="w-[40%] msk_simp_logo ">
          <img src={iphone} className="w-[500px]"></img>
        </div>
      </div>
    </>
  );
};
