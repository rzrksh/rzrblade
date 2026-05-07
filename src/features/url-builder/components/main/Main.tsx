import { URLComposerConfig } from "../config";
import { PageRenderer } from "../page-renderer";

export const Main = () => {
  return (
    <main className="mt-6 px-16 min-h-[100svh]">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-1 text-gray-950 dark:text-gray-50">
          URL Builder
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400">
          Build and do whatever things you need for URL.
        </h2>
      </div>
      <div className="flex justify-between w-full mx-auto gap-4">
        <div className="min-w-[calc(65%-theme(space.2))]">
          <PageRenderer />
        </div>
        <div className="min-w-[calc(35%-theme(space.2))]">
          <URLComposerConfig />
        </div>
      </div>
    </main>
  );
};
