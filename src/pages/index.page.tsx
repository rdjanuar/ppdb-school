import { Box, Button, Center } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  const handleRouter = async () => await router.push('/example');

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Box h='100vh' display='flex' justifyContent='center'>
        <Center>
          <Button colorScheme='green' onClick={handleRouter}>
            Go To example
          </Button>
        </Center>
      </Box>
    </>
  );
}
