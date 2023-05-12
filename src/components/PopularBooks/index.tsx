import { BookCard } from '../BookCard'
import { Text } from '../Typograph'
import { Link } from '../ui/Link'
import { Container } from './styles'

export const PopularBooks = () => {
  return (
    <Container>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={`popular-${index}`}
            book={{
              author: 'Júlio Cezar',
              avgRating: 4,
              cover_url: 'https://avatars.githubusercontent.com/u/92815712?v=4',
              created_at: new Date(),
              id: 'sdvhodhi',
              name: 'lorem1aaaaaaaaaaaaaaaaaaaa22d',
              summary: 'lorem2fbdfbvfdbvdfvbvdfbdf2',
              total_pages: 100,
            }}
          />
        ))}
      </section>
    </Container>
  )
}
