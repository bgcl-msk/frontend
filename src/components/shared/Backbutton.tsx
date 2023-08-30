

export const Backbutton = () => {
    const goBack = () => {
        window.history.back();
      };
  return (
    <button className="rounded-[50%] w-[45px] h-[45px] bg-blue_color text-white cursor-pointer" onClick={goBack}>
        <i className="fa-sharp fa-solid fa-arrow-left"></i>  
    </button>
  )
}
