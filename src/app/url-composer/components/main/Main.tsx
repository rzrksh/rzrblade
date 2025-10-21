import { URLComposerConfig } from "../config";
import { PageRenderer } from "../page-renderer";
import { SavedURL } from "../saved-url";

export const Main = () => {
  return (
    <div className="flex w-full max-w-7xl mx-auto gap-4 justify-center my-9">
      <div className="w-[70%]">
        <PageRenderer />
      </div>
      <div className="w-[30%]">
        <URLComposerConfig />
        <div className="mt-4">
          <SavedURL />
        </div>
      </div>
    </div>
  );
};
