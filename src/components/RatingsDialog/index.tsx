import { BookBookmark, BookOpen, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { BookRatings } from '../BookRatings'
import { RatingStars } from '../RatingStars'
import { Heading, Text } from '../Typograph'
import { BookInfo } from './BookInfo'
import {
   BookContent,
   BookDetailsContainer,
   BookDetailsWrapper,
   BookInfos,
   DialogClose,
   DialogContent,
   DialogOverlay,
} from './styles'

type RatingsDialogProps = {
  children: ReactNode
}

export const RatingsDialog = ({ children }: RatingsDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <DialogOverlay />

        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>

          <BookDetailsWrapper>
            <BookDetailsContainer>
              {/*               <BookImage
                src="httpd://github.com/julioamaral007.png"
                width={171}
                height={242}
                alt="Book name"
              /> */}
              <BookContent>
                <div>
                  <Heading size="sm">Book Name</Heading>
                  <Text color="gray-300" css={{ marginTop: '$2' }}>
                    John doe
                  </Text>
                </div>

                <div>
                  <RatingStars rating={4} size="md" />
                  <Text color="gray-400" size="sm" css={{ marginTop: '$1' }}>
                    2 avaliações
                  </Text>
                </div>
              </BookContent>
            </BookDetailsContainer>

            <BookInfos>
              <BookInfo
                icon={<BookBookmark />}
                title="Categorias"
                info="Ficção, Ação"
              />
              <BookInfo icon={<BookOpen />} title="Páginas" info="217" />
            </BookInfos>
          </BookDetailsWrapper>

          <BookRatings />
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
