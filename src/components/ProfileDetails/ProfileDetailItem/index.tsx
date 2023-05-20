import { ReactNode } from 'react'
import { Container } from './styles'
import { Heading, Text } from '@/components/Typograph'

type ProfileDetailsItemProps = {
  icon: ReactNode
  info: string | number
  label: string
}

export const ProfileDetailsItem = ({
  icon,
  info,
  label,
}: ProfileDetailsItemProps) => {
  return (
    <Container>
      {icon}
      <div>
        <Heading color="gray-200" size="xs">
          {info}
        </Heading>
        <Text size="sm" color="gray-300">
          {label}
        </Text>
      </div>
    </Container>
  )
}
