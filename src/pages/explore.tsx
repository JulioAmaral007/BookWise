import { Input } from '@/components/ui/Form/Input'
import { PageTitle } from '@/components/ui/PageTitle'
import { Tag } from '@/components/ui/Tag'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { api } from '@/lib/axios'
import {
  BooksGrid,
  ExploreContainer,
  TagsContainer,
} from '@/styles/pages/explore'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Category } from '@prisma/client'
import { useQuery } from '@tanstack/react-query'
import { ReactElement, useState } from 'react'
import { NextPageWithLayout } from './_app'

const ExplorePage: NextPageWithLayout = () => {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>(
    ['categories'],
    async () => {
      const { data } = await api.get('/books/categories')
      return data?.categories ?? []
    },
  )

  return (
    <ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />
        <Input
          placeholder="Buscar livro ou autor"
          icon={<MagnifyingGlass size={20} />}
          css={{ maxWidth: 433 }}
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>

      <TagsContainer>
        <Tag
          active={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          Todos
        </Tag>
        {categories?.map((category) => (
          <Tag
            key={category?.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category?.name}
          </Tag>
        ))}
      </TagsContainer>

      <BooksGrid>{/*         <BookCard size="lg" book={} /> */}</BooksGrid>
    </ExploreContainer>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
