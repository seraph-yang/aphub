import { createStyles, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Avatar } from '@mantine/core';
import { Menu, Text, Button, Title, UnstyledButton, Group } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
import { IconBrandInstagram, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

import styles from '@/styles/Home.module.css';

const useStyles = createStyles((theme) => ({
  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: '#fff'
  }
}));
function Navbar() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <div className={styles.navbar}>
      <Menu shadow="md">
        <Menu.Target>
          <Title color="white" className={classes.title}>
            APHub
          </Title>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Social</Menu.Label>
          <Menu.Item component="a" href="https://instagram.com/ap.hub" icon={<IconBrandInstagram size={14} />}>Instagram</Menu.Item>
          <Menu.Item component="a" href="https://github.com/aphub-main"icon={<IconBrandGithub size={14} />}>Github</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <div className={styles.right}>
        <ActionIcon
          variant="outline"
          color={dark ? 'gray.1' : 'gray.1'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
          size="xl"
        >
          {dark ? <IconSun size="1.5rem" /> : <IconMoonStars size="1.5rem" />}
        </ActionIcon>
      </div>
    </div>
  );
}

export default Navbar;