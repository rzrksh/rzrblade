import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { randomPalette } from "@/utils/random-color-generator";

interface Props {
  urlTree: any;
}

export const URLDecomposserTree = ({ urlTree }: Props) => {
  if (!urlTree) return null;

  return (
    <div className="p-6 mt-6 border-b-teal-600" style={{ border: `1px solid ${randomPalette(1)[0]}` }}>
      <div className="mb-6">
        <Label className="mb-2">URL</Label>
        <Input type="text" value={urlTree.url} onChange={() => {}} />
      </div>

      <div>
        {urlTree.params.map((item: any) => (
          <div key={item.key} className="flex gap-2 mb-2 w-full">
            <Input type="text" value={item.key} className="w-[250px]" onChange={() => {}} />
            <Input type="text" value={item.value} className="w-full" onChange={() => {}} />
            <Button>Copy</Button>
            <Button variant="outline">Remove</Button>
          </div>
        ))}
      </div>
      {urlTree.children.map((item: any) => (
        <URLDecomposserTree key={item.url} urlTree={item} />
      ))}
    </div>
  );
};
