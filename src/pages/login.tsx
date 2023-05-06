import { AuthButtons } from '@/components/AuthButtons'
import { Heading, Text } from '@/components/Typograph'
import {
  LoginContainer,
  LogoSection,
  WelcomeSection,
} from '@/styles/pages/login'
import Image from 'next/image'

export default function Login() {
  return (
    <LoginContainer>
      <LogoSection>
        <Image
          src="/images/logo.svg"
          alt="BookWise Logo"
          width={70}
          height={70}
        />
      </LogoSection>

      <WelcomeSection>
        <Heading size="lg" color="gray-100">
          Boas vindas!
        </Heading>
        <Text color="gray-200">Faça seu login ou acesse como visitante</Text>

        <AuthButtons />
      </WelcomeSection>
    </LoginContainer>
  )
}
