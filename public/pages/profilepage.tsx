import { ActionIcon, Center, useMantineColorScheme, Autocomplete, Container } from '@mantine/core';
import { Avatar, Flex } from '@mantine/core';
import { Menu, Text, Button, Title, UnstyledButton, Group, Grid } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconBrandInstagram, IconBrandGithub, IconAlertCircle } from '@tabler/icons-react';

import Sidebar from './units'
import Pmcq from './pmcq'
import Pfrq from './pfrq'
import Minigames from './minigames'
import Flashcards from './flashcards'

import styles from '@/styles/Home.module.css';

function Subheader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <>
      <Sidebar />
      <Container>
        <div className={styles.center}>
          <Title><IconAlertCircle/> AP TEST IS IN TWO DAYS <IconAlertCircle/></Title>
        </div>
        <Container>
          <Grid>
            <Grid.Col><Pmcq /></Grid.Col>
            <Grid.Col><Pfrq /></Grid.Col>
            <Grid.Col><Minigames /></Grid.Col>
            <Grid.Col><Flashcards /></Grid.Col>
          </Grid>
        </Container>
      </Container>
    </>
  );
}

export default Subheader;