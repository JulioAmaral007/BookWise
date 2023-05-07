import { ComponentProps } from '@stitches/react'
import Image from 'next/image'
import { Container } from './styles'

type AvatarProps = ComponentProps<typeof Container> & {
  src: string
  size?: 'sm' | 'md' | 'lg'
  alt: string
}

export const Avatar = ({ src, alt, size = 'md', ...props }: AvatarProps) => {
  return (
    <Container size={size} {...props}>
      <Image src={src} width={80} height={80} alt={alt} />
    </Container>
  )
}
