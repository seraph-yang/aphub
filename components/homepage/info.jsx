import React from 'react';

import { Image, Group, Center, Flex, Container, Title, Text, Button } from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { IconArrowDown } from '@tabler/icons-react';
import Link from 'next/link';

import styles from '../../styles/Home.module.css';

function Info() {
  return(
    <>
      <Center>
        <Flex maw={900} justify="center" align="center">
          <Image className={styles.container} src="images/undraw.png" />
            <Container className={styles.container}>
              <Title sx= {{ paddingBottom: '10px' }}>Achieve AP Mastery.</Title>
              <Text sx= {{ padding: '20px 20px 40px 0px' }}>Empowering AP students to succeed through innovative and personalized study solutions.</Text>
              <Flex gap="md" align="center">  
                <Link href="/"><Button sx={{ backgroundColor: '#23395d' }} variant="filled">View product</Button></Link>
                <Button sx={{ border: '1px solid #23395d', color: '#23395d' }} variant="outline">Learn more</Button>
              </Flex>
            </Container>
        </Flex>
      </Center>
    </>
  );
}
export default Info;