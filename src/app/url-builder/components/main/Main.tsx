import { URLComposerConfig } from "../config";
import { PageRenderer } from "../page-renderer";
import { SavedURL } from "../saved-url";

export const Main = () => {
  return (
    <main className="my-14 px-16 min-h-[100svh]">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-1 text-gray-950">URL Factory</h1>
        <h2 className="text-gray-600">
          Build and do whatever things you for URL Like a Pro.
        </h2>
      </div>
      <div className="flex justify-between w-full mx-auto gap-4">
        <div className="min-w-[calc(65%-theme(space.2))]">
          <PageRenderer />
        </div>
        <div className="min-w-[calc(35%-theme(space.2))]">
          <URLComposerConfig />
          <div className="mt-4">
            <SavedURL />
          </div>
        </div>
      </div>
    </main>
  );
};
