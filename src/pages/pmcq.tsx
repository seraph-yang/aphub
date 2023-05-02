import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Practice MCQ</Text>
        <Badge color="red" variant="light">
          recommended practice
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        AP style MCQs to prepare you for the multiple choice section of your AP test
      </Text>
      <Group sx={{ padding: 20 }} position="center">
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Easy MCQ</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Hard MCQ</Button>
      </Group>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View All MCQs
      </Button>
    </Card>
  );
}

export default Demo;