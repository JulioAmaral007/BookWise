import { ChartLineUp } from '@phosphor-icons/react'
import { RatingCard } from '../RatingCard'
import { Text } from '../Typograph'
import { PageTitle } from '../ui/PageTitle'
import { Container } from './styles'

export const LatestRatings = () => {
  return (
    <Container>
      <PageTitle
        title="Início"
        icon={<ChartLineUp size={32} />}
        css={{ marginBottom: 40 }}
      />

      <Text size="sm">Avaliações mais recentes</Text>

      <section>
        {Array.from({ length: 20 }).map((_, i) => (
          <RatingCard
            key={i}
            rating={{
              id: 'aa',
              rate: 4,
              user: {
                name: 'Júlio',
                avatar_url: '',
                email: 'jczrpereira100',
                id: 'kdjd',
                created_at: new Date(),
              },
              book: {
                author: 'dsgsd',
                cover_url: '',
                id: 'fvgdf',
                name: 'fbd',
                summary: 'fdsv',
                total_pages: 189,
              },
              created_at: new Date(),
            }}
          />
        ))}
      </section>
    </Container>
  )
}
