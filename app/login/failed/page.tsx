import { Shell } from "@/components/shell";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function LoginFailedPage() {
  return (
    <Shell>
      <>
        <Heading size="xl">Login Failed</Heading>
        <Text className="mt-4 text-center text-muted-foreground">
          Authentication was not successful. Please try again.
        </Text>
      </>
    </Shell>
  );
}
