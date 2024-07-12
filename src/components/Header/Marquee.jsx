
function Marquee() {
    const marquee_Info = {
        id: "",
        name: "",
        data: ["Sakura Merch", "ENVIO GRATIS por tiempo Limitado", "Barranquilla, Atlántico", "El Efecto", "Tanjiro Kamado", "Ash Ketchum", "Camisetas Chimbas"],
        date: "",
        color: ""
    }
  return (
    <div className="relative flex overflow-x-hidden bg-[#fcd1d7]">
        <div className="py-2 animate-marquee whitespace-nowrap">
            {marquee_Info.data.map((element) => {
                return(
                    <span key={element}>
                        <span className="text-lg font-semibold mx-4">{element}</span>
                        <>{"-"}</>
                    </span>
                )
            })}
        </div>

        <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
        {marquee_Info.data.map((element) => {
                return(
                    <span key={element}>
                        <span className="text-lg font-semibold mx-4">{element}</span>
                        <>{"-"}</>
                    </span>
                )
            })}
        </div>
  </div>
  )
}

export default Marquee