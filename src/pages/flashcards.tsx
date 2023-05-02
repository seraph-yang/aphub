import { Card, Image, Text, Badge, Button, Group, Progress } from '@mantine/core';
import styles from '@/styles/Home.module.css';
function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Flashcards</Text>
        <Badge color="green" variant="light">
          on track
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        Practice with flashcards
      </Text>
      <div className={styles.center}>
        <Progress value={92} />
        <Group position="apart" mt="md">
          <Text fz="sm">92 / 100 Flashcards</Text>
          <Badge color="red" size="sm">2 days left</Badge>
        </Group>
      </div>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Practice Flashcards
      </Button>
    </Card>
  );
}

export default Demo;