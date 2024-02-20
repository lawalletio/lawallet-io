'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Text,
  Button,
  LinkButton,
  Container,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputGroupRight,
  theme,
  Divider,
} from '@lawallet/ui';

import Twitter from '../Icons/Twitter';
import Github from '../Icons/Github';
import Discord from '../Icons/Discord';

import { FooterPrimitive } from './style';

export default function Footer() {
  return (
    <FooterPrimitive>
      <Container>
        <div className='box'>
          <Flex flex={1} justify='space-between' gap={16}>
            <div className='copy'>
              <Text color={theme.colors.gray50}>made with eggs by</Text>
              <Divider y={8} />
              <Link href='https://lacrypta.ar/' target='_blank'>
                <Image src='/la-crypta-logo.svg' alt='LaCrypta logo' width={135} height={30} />
              </Link>
            </div>
            <div className='social'>
              <Link href='#'>
                <Button variant='bezeled'>
                  <Twitter />
                </Button>
              </Link>
              <Link href=''>
                <Button variant='bezeled'>
                  <Github />
                </Button>
              </Link>
              <Link href=''>
                <Button variant='bezeled'>
                  <Discord />
                </Button>
              </Link>
            </div>
          </Flex>
        </div>
      </Container>
    </FooterPrimitive>
  );
}
