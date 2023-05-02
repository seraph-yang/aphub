import { createStyles, Card, Avatar, Text, Group, Button, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));

interface UserCardImageProps {
  image: string;
  avatar: string;
  name: string;
  job: string;
  stats: { label: string; value: string }[];
}

export function UserCardImage() {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder miw={300} mih={250} padding="xl" radius="md" className={classes.card}>
      <Avatar size={80} radius={80} mx="auto" mt={0} className={classes.avatar} />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Sirooi Cao
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        Student
      </Text>
      <Group mt="md" position="center" spacing={30}>
        <Text ta="center" fz="lg" fw={500}>
          5
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          AP Classes
        </Text>
      </Group>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        color={theme.colorScheme === 'dark' ? undefined : 'dark'}
      >
        View Statistics
      </Button>
    </Card>
  );
}

export default UserCardImage;