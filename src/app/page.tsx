'use client';

import { Container, Button, Divider } from '@lawallet/ui';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import ItemFeature from './components/ItemFeature';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <Divider y={120} />
        <ItemFeature title='Create your lightning domain.' src={'one.png'} number={1}>
          <Link href='https://github.com/lawalletio/lightning-domain' target='_blank'>
            <Button size='small' variant='borderless' tabIndex={-1}>
              See our repository
            </Button>
          </Link>
        </ItemFeature>
        <Divider y={120} />
        <ItemFeature title='Create your own wallet.' description='5 minutes deploy' src={'two.png'} number={2}>
          <Link href='https://frontend.lawallet.io/' target='_blank'>
            <Button size='small' variant='borderless' tabIndex={-1}>
              See our monorepo
            </Button>
          </Link>
        </ItemFeature>
        <Divider y={120} />
        <ItemFeature title='Create custom plugin.' description='30 minutes tutorial' src={'tree.png'} number={3}>
          <Button size='small' variant='borderless' disabled={true}>
            Under construction
          </Button>
        </ItemFeature>
        <Divider y={120} />
      </Container>
      <Aside />
      <Footer />
    </>
  );
}
