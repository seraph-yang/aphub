import React from 'react';

import { Image, Flex, Container, Title, Text, Grid } from '@mantine/core';

import styles from '../../styles/Home.module.css';

function Benefits() {
  return(
    <Grid sx={{ margin: "0 auto", padding: '10px', paddingTop: '120px' }} maw={750}>
      <Grid.Col span={6}>
        <Title sx={{ padding: '10px' }}>Study effectively.</Title>
        <Text sx={{ padding: '10px' }}>
          AP Hub uses an AI algorithm to create a personal learning plan that
          focuses on weak topics for efficient studying.
        </Text>
      </Grid.Col>
      <Grid.Col span={6}>
        <Container sx={{ padding: '10px', justifyContent: 'center' }}>
          <Flex  justify="center" className={styles.bg}>
            <Container sx={{ padding: '10px' }} className={styles.bg}>
              <Image src="images/quotation.png" maw={100} />
              <Text fw={700} size="lg" color="white">John</Text>
              <Text size="sm" color="white">Student</Text>
            </Container>
            <Text size="xl" color="white" sx={{ padding: '10px' }}>
              I can learn topics I didn’t understand before more easily while using AP Hub. It's the perfect AP resource out there!
            </Text>
          </Flex>
        </Container>
      </Grid.Col>
    </Grid>
  );
}
export default Benefits;