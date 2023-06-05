import React from 'react';

import { Grid, Center, Image, Text, Title } from '@mantine/core';

import styles from '../../styles/Home.module.css';

function Solutions() {
  return(
    <div className={styles.solutions}>
      <Title sx={{padding: '10px'}}>Solutions</Title>
      <Grid sx={{ margin: "0 auto" }} gutter="xl" maw={1000}>
        <Grid.Col className={styles.column} span={4} >
          <Center>
            <Image src="images/calendar.png" maw={100} />
          </Center>
          <Text sx={{padding: '10px'}} fw={700} size="xl">Save time</Text>
          <Text sx={{paddingBottom: '10px'}}>Save time on planning and navigating study materials.</Text>
        </Grid.Col>
        <Grid.Col className={styles.column} span={4}>
          <Center>
            <Image src="images/money.png" maw={100} />
          </Center>
          <Text sx={{padding: '10px'}} fw={700} size="xl">Save money</Text>
          <Text sx={{paddingBottom: '10px'}}>Save money on educational resources. No hassle of spending lots of money on books or paid services.</Text>
        </Grid.Col>
        <Grid.Col className={styles.column} span={4}>
          <Center>
            <Image src="images/productivity.png" maw={100} />
          </Center>
          <Text sx={{padding: '10px'}} fw={700} size="xl">Enhance productivity</Text>
          <Text sx={{paddingBottom: '10px'}}>Study effectively with pre-planned study materials designed to enhance productivity.</Text>
        </Grid.Col>
      </Grid>
    </div>
  )
}

export default Solutions;