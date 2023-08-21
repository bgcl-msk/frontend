import 'animate.css';

export const OurNumbers = () => {
  return (
      <div className="flex items-center justify-evenly h-[400px] border" id="container">
          <div className="text-center pb-2">
            <p className="my-2 text-3xl font-bold">Customer Served</p>
            <p className="text-3xl font-bold animate__animated animate__flipInX animate__delay-1s">21K</p>
          </div>
          <div className="text-center pb-2">
            <p className="my-2 text-3xl font-bold">Transactions Processed</p>
            <p className="text-3xl font-bold animate__animated animate__flipInX animate__delay-1s">100K</p>
          </div>
          <div className="text-center ">
            <p className="my-2 text-3xl font-bold">Positive Review</p>
            <p className="text-3xl font-bold animate__animated animate__flipInX animate__delay-1s">100</p>
          </div>
        </div>
  );
};
