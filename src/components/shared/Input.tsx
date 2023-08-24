

export const Input = (props:any) => {
  return (
    <div>
        <input type={props.type} style={props.style} required={props.required} name={props.name} placeholder={props.placeholder} className="w-[350px] h-[35px] border-2 p-6 border-blue_color placeholder:text-blue_color placeholder:font-bold mb-6"></input>
    </div>
  )
}
