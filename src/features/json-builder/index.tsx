import { Card } from "@/components/ui/card";
import TextEditor from "./components/text-editor";

const JSONBuilder = () => {
  return (
    <main className="mt-6 px-16">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-1 text-gray-950 dark:text-gray-50">
          JSON Builder
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400">
          Build and parse stringified JSON.
        </h2>
      </div>
      <Card>
        <TextEditor />
      </Card>
    </main>
  );
};

export default JSONBuilder;
