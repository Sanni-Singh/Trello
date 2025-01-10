import Card from "./Card";
const Cardlists = ()=>{
    return(
        <div className="w-screen h-screen bg-[#333] ">
            <p className="text-3xl text-white font-bold  text-center">You Can Put Your Manage Your Work Here...</p>
            <div className="flex gap-8 justify-center pt-12">
            <Card titleList={"kamBakiHai"} title={"Pending Work"}/>
            <Card titleList={"kamChlRaha"} title={"In-Progress Work"}/>
            <Card titleList={"kamKhtm"} title={"Completed Work"}/>
        </div>
        </div>
    )
}
export default Cardlists;