'use client'

// import React, { useEffect, useState } from 'react'
// import { Items } from '@/lib/models/itemModel'
// import MenuItem from './MenuItem'

// interface MenuSectionProps {
//   title: string
//   items: Items[]
// }

// const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false)
//     }, 2000) // Simulate network delay for demonstration

//     return () => clearTimeout(timer)
//   }, [])

//   return (
//     <section className="mb-8">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       {loading ? (
//         <div className="flex justify-center items-center h-40">
//           <div className="loader">Loading...</div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
//           {items.map((item) => (
//             <MenuItem key={item.slug} item={item} />
//           ))}
//         </div>
//       )}
//     </section>
//   )
// }

// export default MenuSection

import React, { useEffect, useState } from 'react'
import { Items } from '@/lib/models/itemModel'
import MenuItem from './MenuItem'

interface MenuSectionProps {
  title: string
  items: Items[]
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Simulate network delay for demonstration

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <MenuItem key={item.slug} item={item} />
          ))}
        </div>
      )}
    </section>
  )
}

export default MenuSection
