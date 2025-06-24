import { Shell } from "../components/shell";
import { Heading } from "../components/ui/heading";
import { Text } from "../components/ui/text";

export default function NotFoundPage() {
  return (
    <Shell>
      <>
        <Heading size="xl">Page Not Found</Heading>
        <Text className="mt-4 text-center text-muted-foreground">
          The page you’re looking for doesn’t exist.
        </Text>
      </>
    </Shell>
  );
}
