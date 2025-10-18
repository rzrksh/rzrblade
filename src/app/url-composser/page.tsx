import { SavedURL } from "./components/SavedURL";
import { URLComposser } from "./components/URLComposser";
import { URLComposserConfig } from "./components/URLComposserConfig";

const URLComposserPage = () => {
  return (
    <div className="flex w-[100%] gap-4 justify-center">
      <URLComposser />
      <URLComposserConfig />
      {/* <SavedURL /> */}
    </div>
  );
};

export default URLComposserPage;
