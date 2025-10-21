import { URLComposerConfig } from "./components/config";
import { Main } from "./components/main";
import { SavedURL } from "./components/saved-url";

const URLComposserPage = () => {
  return (
    <div className="flex w-full max-w-7xl mx-auto gap-4 justify-center my-9">
      <div className="w-[70%]">
        <Main />
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

export default URLComposserPage;
