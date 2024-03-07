'use client';

import Image from 'next/image';
import { useForm, ValidationError } from '@formspree/react';
import { Text, Button, Container, Flex, Heading, Input, InputGroup, InputGroupRight, theme } from '@lawallet/ui';

import { HeaderPrimitive } from './style';

export default function Header() {
  const [state, handleSubmit] = useForm('mpzvdgez');

  return (
    <HeaderPrimitive>
      <Container size='small'>
        <Flex direction='column' align='center' gap={16}>
          <Flex direction='column' gap={8} align='center'>
            <Text size='small' color={theme.colors.gray50}>
              Open Source Wallet
            </Text>
            <Heading>Bitcoin-centric</Heading>
            <Text align='center'>Set up a self-hosted modular wallet or offer a federated solution for your users</Text>
          </Flex>
          {state.succeeded ? (
            <Flex justify='center'>
              <Text isBold>Thanks for joining!</Text>
            </Flex>
          ) : (
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <Input placeholder='satoshi@skiff.com' id='email' type='email' name='email' />
                <InputGroupRight>
                  <Button variant='borderless' size='small' disabled={state.submitting} type='submit'>
                    Suscribe
                  </Button>
                </InputGroupRight>
                <ValidationError prefix='Email' field='email' errors={state.errors} />
                <ValidationError prefix='Message' field='message' errors={state.errors} />
              </InputGroup>
            </form>
          )}
        </Flex>
      </Container>
    </HeaderPrimitive>
  );
}
