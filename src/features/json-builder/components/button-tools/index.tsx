import { Copy, Eraser } from "lucide-react";
import TooltipWrapper from "@/components/composition/tooltip";
import { Button } from "@/components/ui/button";

interface Props {
  onClickCopy: () => void;
  onClickClear: () => void;
}

const ButtonTools = ({ onClickCopy, onClickClear }: Props) => {
  return (
    <div className="p-2 flex gap-1">
      <TooltipWrapper tooltipText="Copy">
        <Button size="sm" variant="outline" onClick={() => onClickCopy()}>
          <Copy />
        </Button>
      </TooltipWrapper>
      <TooltipWrapper tooltipText="Clear">
        <Button size="sm" variant="outline" onClick={() => onClickClear()}>
          <Eraser />
        </Button>
      </TooltipWrapper>
    </div>
  );
};

export default ButtonTools;
