import { useState, useEffect } from 'react';

export const OurNumbers = () => {
  const [customerServed, setCustomerServed] = useState(0);
  const [transactionsProcessed, setTransactionsProcessed] = useState(0);
  const [positiveReviews, setPositiveReviews] = useState(0);

  const animateNumbers = () => {
    const duration = 200000; // Animation duration in milliseconds
    const increment = 1;   // Number increment step

    const totalSteps = Math.ceil(duration / increment);
    const customerStep = Math.ceil(100 / totalSteps);
    const transactionsStep = Math.ceil(100 / totalSteps);
    const reviewsStep = Math.ceil(100 / totalSteps);

    let currentCustomer = 0;
    let currentTransactions = 0;
    let currentReviews = 0;

    const interval = setInterval(() => {
      currentCustomer += customerStep;
      currentTransactions += transactionsStep;
      currentReviews += reviewsStep;

      setCustomerServed(currentCustomer);

      // Animate transactionsProcessed up to your desired final value
      if (currentTransactions <= 50) {
        setTransactionsProcessed(currentTransactions);
      }

      // Animate positiveReviews up to your desired final value
      if (currentReviews <= 100) {
        setPositiveReviews(currentReviews);
      }

      if (currentCustomer >= 200) {
        clearInterval(interval);
      }
    }, increment);
  };

  useEffect(() => {
    animateNumbers();
  }, []);

  return (
    <div className="flex items-center justify-evenly flex-col py-4 md:flex-row md:py-0 h-fit md:h-[400px] border" id="container">
      <div className="text-center pb-2">
        <p className="my-2 text-xl md:text-3xl font-bold">Customer Served</p>
        <p className="text-xl md:text-3xl font-bold ">{customerServed}</p>
      </div>
      <div className="text-center pb-2">
        <p className="my-2 text-xl md:text-3xl font-bold">Transactions Processed</p>
        <p className="text-xl md:text-3xl font-bold ">{transactionsProcessed}</p>
      </div>
      <div className="text-center ">
        <p className="my-2 text-xl md:text-3xl font-bold">Positive Review</p>
        <p className="text-xl md:text-3xl font-bold">{positiveReviews}</p>
      </div>
    </div>
  );
};
