import Image from "next/image"
import img03 from "../../public/tomato-group.jpg"

export default function Tomato(){
    return(
        <div>
            <div className="image">
                <Image src={img03} alt="image" width={1000} height={1000}/>

            </div>

            <div>
                <p> Tomatoes are an excellent source of vitamins A, C, and K, as well as antioxidants like lycopene,
                     which may reduce the risk of heart disease and certain cancers. They come in various shapes,
                     sizes, and colors, ranging from small cherry tomatoes to large beefsteak varieties. Tomatoes
                     can be consumed raw in salads, cooked in sauces, or processed into products like ketchup and
                     juice, making them a staple in cuisines worldwide.You said:</p>

                     
            </div>


        </div>
    )
}