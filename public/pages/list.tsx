import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Menu, Text, Button, Title, UnstyledButton, Group, Flex } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconBrandInstagram, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import styles from '@/styles/Home.module.css';

function Navbar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className={styles.navbar}>
      <Flex align="center" justify="center">
          <Title sx={{ padding: 20 }}>SCORES</Title>
          <Title sx={{ padding: 20 }}>DATES</Title>
          <Title sx={{ padding: 20 }}>UPGRADE TO APHUB+</Title>
      </Flex>
    </div>
  );
}

export default Navbar;