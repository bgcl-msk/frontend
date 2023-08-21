import { FAQs } from "../../constant"


export const FrequentlyAskedQuestions = () => {
  return (
    <>
    <div className="text-center p-10">
        <h1 className="text-3xl">
          <b>Frequently asked questions</b>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus sit debitis commodi, fugiat eos dolore et corporis,
          <br></br> ducimus ad nulla in blanditiis quasi officiis mollitia
          incidunt iusto, minima reiciendis neque.
        </p>
      </div>
      <div className="grid gap-[2rem] grid-cols-2 w-1/2 m-auto FAQ_card">
          {FAQs.map((FAQ) => (
            <div className="group border w-full p-5 cursor-pointer">
            <div className="flex justify-between">
              <p>{FAQ.question}</p>
              <span className="cursor-pointer">
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            <hr className="hidden group-hover:block"></hr>
            <div className="hidden group-hover:block my-2">{FAQ.answer}</div>
          </div>
          ))}
      </div>

      <div className="flex flex-col justify-center items-center pb-7">
        <div>
        <h1 className="text-2xl my-4">
          <b>Still have a question?</b>
        </h1>
        </div>
        <div className='h-fit w-fit px-8 p-2 cursor-pointer bg-blue_color text-white'>
            <p>Contact Us</p>         
        </div>
      </div>
    </>
  )
}
