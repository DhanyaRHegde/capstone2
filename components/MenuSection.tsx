// components/MenuSection.tsx
import React from 'react'
import { Items } from '@/lib/models/itemModel'
import MenuItem from './MenuItem'

interface MenuSectionProps {
  title: string
  items: Items[]
}

const MenuSection: React.FC<MenuSectionProps> = ({ title, items }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <MenuItem key={item.slug} item={item} />
        ))}
      </div>
    </section>
  )
}

export default MenuSection
