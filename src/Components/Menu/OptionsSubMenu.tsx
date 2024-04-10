interface Props {
    items: string[];
    
}
const OptionsSubMenu = ({ items }:Props) => {
  return (
    <ul className="h-full flex flex-col justify-center gap-4 text-base ">
        {
            items.map((item:string,index:number) => (
                <li key={index}>{item}</li>
            )
        )}
    </ul>
  );
};

export default OptionsSubMenu;
