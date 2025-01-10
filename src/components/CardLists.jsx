import Card from "./Card";
const Cardlists = ()=>{
    return(
        <div className="w-screen h-screen bg-[#333] ">
            <div className="flex gap-8 justify-center pt-12">
            <Card titleList={"kamBakiHai"} title={"Kam Baki Hai"}/>
            <Card titleList={"kamChlRaha"} title={"Kam Chalu Hai"}/>
            <Card titleList={"kamKhtm"} title={"Kam Khtm Ho Gaya"}/>
        </div>
        </div>
    )
}
export default Cardlists;