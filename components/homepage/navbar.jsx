import React from 'react';

import Link from 'next/link';
import { Avatar } from '@mantine/core';
import { Menu, Text, Image, Flex, UnstyledButton, Group } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

import styles from '../../styles/Home.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Flex justify="center" align="center">
        <Menu shadow="md" width={300}>
          <Menu.Target>
            <Text sx={{ padding: '10px' }} fz="xl" color="white">Courses</Text>
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Label>Math & Computer Science</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>AP Precalculus</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Calculus AB</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Calculus BC</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Statistics</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Computer Science A</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Computer Science Principles</Menu.Item>

            <Menu.Divider />

            <Menu.Label>Science</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>AP Biology</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Chemistry</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Environmental Science</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Physics 1</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Physics 2</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Physics C</Menu.Item>

            <Menu.Divider />

            <Menu.Label>English</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>AP English Language & Composition</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP English Literature & Composition</Menu.Item>

            <Menu.Divider />

            <Menu.Label>History & Social Sciences</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>AP Comparative Government & Policies</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP European History</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Human Geography</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Macroeconomics</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Microeconomics</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP United States Government & Politics</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP United States History</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP World History</Menu.Item>

            <Menu.Divider />

            <Menu.Label>Arts & Miscellaneous</Menu.Label>
            <Menu.Item icon={<IconSettings size={14} />}>AP Art History</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Music Theory</Menu.Item>
            <Menu.Item icon={<IconSettings size={14} />}>AP Psychology</Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Text fz="xl" sx={{ padding: '10px' }}color="white">Our Team</Text>
        <Image sx={{ padding: '10px'}} src="/images/aphub_logo.png" maw={250}></Image>
        <a href="./api/auth/login"><Text fz="xl" sx={{ padding: '10px' }}color="white">Log in</Text></a>
        <a href="./api/auth/login"><Text fz="xl" sx={{ padding: '10px' }}color="white">Sign up</Text></a>
      </Flex>
    </div>
  );
}

export default Navbar;