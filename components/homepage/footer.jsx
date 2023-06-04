import React from 'react';

import { createStyles, Image, Group, ActionIcon, rem, Title } from '@mantine/core';
import { IconBrandLinkedin, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react';

import Link from 'next/link'

import styles from '../../styles/Home.module.css';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: rem(120),
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md} ${theme.spacing.md}`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

export function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        &copy; AP Hub<Image src="images/logob.png" maw={150} />

        <Group spacing="xs" position="right" noWrap>
          <Link href="https://github.com/seraph-yang">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandGithub size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="https://linkedin.com/in/seraph-yang">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandLinkedin size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link href="https://instagram.com/seraph.yangg">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandInstagram size="1.05rem" stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </div>
    </div>
  );
}

export default Footer;