import { SavedURL } from "./components/SavedURL";
import { URLComposer } from "./components/URLComposer";
import { URLComposerConfig } from "./components/URLComposerConfig";

const URLComposserPage = () => {
  return (
    <div className="flex w-full max-w-7xl mx-auto gap-4 justify-center my-9">
      <div className="w-3/4">
        <URLComposer />
      </div>
      <div className="w-1/4">
        <URLComposerConfig />
        <div className="mt-4">
          <SavedURL />
        </div>
      </div>
    </div>
  );
};

export default URLComposserPage;
