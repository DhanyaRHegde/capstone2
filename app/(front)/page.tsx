import MenuSection from '@/components/MenuSection'
import { fetchBaristaData } from '@/lib/data'
import { BaristaItem } from '@/lib/models/contentful'

const Home = async () => {
  const items: BaristaItem[] = await fetchBaristaData()

  const coffeeAndBeverages = items.filter(
    (item) => item.type === 'Coffee and Beverages'
  )
  const combos = items.filter((item) => item.type === 'Combos')
  const friesAndSides = items.filter((item) => item.type === 'Fries and Sides')
  const burgersAndWraps = items.filter(
    (item) => item.type === 'Burgers and Wraps'
  )

  return (
    <div>
      <div className="w-full carousel rounded-box mt-4">
        {combos.map((item, index) => (
          <div
            key={item.id}
            id={`slide-${index}`}
            className="carousel-item relative w-full"
          >
            <div className="flex justify-center items-center w-full">
              <img src={item.image.url} alt={item.name} />
            </div>

            <div
              className="absolute flex justify-between transform 
               -translate-y-1/2 left-5 right-5 top-1/2"
            >
              <a
                href={`#slide-${index === 0 ? combos.length - 1 : index - 1}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide-${index === combos.length - 1 ? 0 : index + 1}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <MenuSection title="Combos" items={combos} />
        <MenuSection title="Coffee and Beverages" items={coffeeAndBeverages} />
        <MenuSection title="Burgers and Wraps" items={burgersAndWraps} />
        <MenuSection title="Fries and Sides" items={friesAndSides} />
      </div>
    </div>
  )
}

export default Home
