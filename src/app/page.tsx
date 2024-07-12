import Product from '../components/Products/Product'

export default function Home() {

  const products = [
    {
      name: "Camiseta Para Hombre Oversize Negra Renacimiento",
      price: "50000",
      image: "https://dynamobrand.co/cdn/shop/files/CamisetaParaHombreOversizeNegraVillaDeFrance.jpg?v=1720029628",
      id: "1",
      merch: "Marca A",
      date: "2024-07-08",
      count: "10"
    },
    {
      name: "Camiseta Sin mangas Para Hombre Negra ",
      price: "52000",
      image: "https://dynamobrand.co/cdn/shop/files/CamisetaSinMangasOversizeParaHombreNegraRelease7.jpg?v=1719410306",
      id: "2",
      merch: "Marca B",
      date: "2024-07-08",
      count: "15"
    },
    {
      name: "Camiseta Para Hombre Oversize Blanca New Creation",
      price: "48000",
      image: "https://dynamobrand.co/cdn/shop/files/CamisetaParaHombreOversizeBlancaNewCreation2.jpg?v=1719073623",
      id: "3",
      merch: "Marca C",
      date: "2024-07-08",
      count: "8"
    },
    {
      name: "Camiseta Para Hombre Oversize Natural Easy Cartoon",
      price: "55000",
      image: "https://dynamobrand.co/cdn/shop/files/CamisetaParaHombreOversizeNaturalEasyCartoon.jpg?v=1719007877",
      id: "4",
      merch: "Marca D",
      date: "2024-07-08",
      count: "12"
    },
    {
      name: "Camiseta Para Hombre Oversize Verde Pino Follow Me",
      price: "53000",
      image: "https://dynamobrand.co/cdn/shop/files/CamisetaParaHombreOversizeVerdePinoFollowMe3.jpg?v=1719001189",
      id: "5",
      merch: "Marca E",
      date: "2024-07-08",
      count: "7"
    }
  ];
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center container mx-auto justify-between p-24 ">
        Hellow World!!
        <div className='w-[100] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          {products.map((element)=> {
            return(
              <Product key={element.id} product={element}/>
            )
          })}
        </div>
      </main>
    </>
  );
}
