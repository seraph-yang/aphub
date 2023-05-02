import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Minigames</Text>
        <Badge color="green" variant="light">
          on track
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Fun memory games to help you remember all of your course material!
      </Text>
      <Group sx={{ padding: 20 }} position="center">
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Matching</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Kahoot</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Gimkit</Button>
      </Group>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Browse More Minigames
      </Button>
    </Card>
  );
}

export default Demo;