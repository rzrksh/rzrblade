import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TextEditor from "./components/text-editor";

const JSONBuilder = () => {
  return (
    <main className="mt-6 px-16">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/tools">
            <ArrowLeft />
          </Link>
        </Button>
        <div>
          <h1 className="text-4xl font-bold mb-1 text-gray-950 dark:text-gray-50">
            JSON Builder
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400">
            Build and parse stringified JSON.
          </h2>
        </div>
      </div>
      <Card>
        <TextEditor />
      </Card>
    </main>
  );
};

export default JSONBuilder;
