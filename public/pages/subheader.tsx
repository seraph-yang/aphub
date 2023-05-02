import { ActionIcon, Center, useMantineColorScheme, Autocomplete } from '@mantine/core';
import { Avatar, Flex } from '@mantine/core';
import { Menu, Text, Button, Title, UnstyledButton, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconBrandInstagram, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import Courselist from './courselist'
import User from './user'
import StatsCard from './continue'

import styles from '@/styles/Home.module.css';

function Subheader() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className={styles.navbar}>
      <Flex justify="center">
        <Button.Group sx={{ padding: 30 }}>
          <Button variant="default">Dashboard</Button>
          <Button variant="default">Scores</Button>
          <Button variant="default">Dates</Button>
          <Button color="#243e4d">Upgrade to APHub+</Button>
        </Button.Group>
      </Flex>
      
      <Center>
        <Autocomplete
              sx={{ padding: 20 }}
              label="AP Class List"
              placeholder="Search for a class..."
              data={['AP Calculus AB', 'AP Calculus BC', 'AP Physics 1', 'AP Physics C']}
            />
        
      </Center>
      <Group position="center">
        <Courselist />
        <User />
      </Group>
      <div className={styles.padding}><StatsCard /></div>
    </div>
  );
}

export default Subheader;