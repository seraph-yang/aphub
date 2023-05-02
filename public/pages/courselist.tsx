import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card maw={500} mih={300} shadow="sm" padding="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Your Courses</Text>
        <Badge color="green" variant="light">
          on track
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        View a list of AP courses you're taking this year
      </Text>
      <Group sx={{ padding: 20 }} position="center">
        <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>AP Chem</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>AP Human Geo</Button>
        <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>AP Calc BC</Button>
        <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>AP Music Theory</Button>
        <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>AP Spanish</Button>
      </Group>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        View All Courses
      </Button>
    </Card>
  );
}

export default Demo;