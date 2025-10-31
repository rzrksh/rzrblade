import { URLComposerConfig } from "../config";
import { PageRenderer } from "../page-renderer";
import { SavedURL } from "../saved-url";

export const Main = () => {
  return (
    <main className="flex justify-between w-full px-16 mx-auto gap-4 my-9">
      <div className="min-w-[70%]">
        <PageRenderer />
      </div>
      <div className="min-w-[30%]">
        <URLComposerConfig />
        <div className="mt-4">
          <SavedURL />
        </div>
      </div>
    </main>
  );
};
