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
      <MenuSection title="Combos" items={combos} />
      <MenuSection title="Coffee and Beverages" items={coffeeAndBeverages} />
      <MenuSection title="Burgers and Wraps" items={burgersAndWraps} />
      <MenuSection title="Fries and Sides" items={friesAndSides} />
    </div>
  )
}

export default Home
