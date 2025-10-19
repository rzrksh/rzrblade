import { SavedURL } from "./components/SavedURL";
import { URLComposer } from "./components/URLComposer";
import { URLComposerConfig } from "./components/URLComposerConfig";

const URLComposserPage = () => {
  return (
    <div className="flex w-[100%] gap-4 justify-center mt-9">
      <URLComposer />
      <URLComposerConfig />
      {/* <SavedURL /> */}
    </div>
  );
};

export default URLComposserPage;
