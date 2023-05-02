import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Practice FRQ</Text>
        <Badge color="red" variant="light">
          recommended practice
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        AP style FRQs to prepare you for the free response section of your AP test
      </Text>
      <Group sx={{ padding: 20 }} position="center">
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Long FRQ</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Short FRQ</Button>
      </Group>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View All FRQs
      </Button>
    </Card>
  );
}

export default Demo;