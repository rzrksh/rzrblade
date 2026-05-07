import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  children: React.ReactNode;
  tooltipText: string;
}

const TooltipWrapper = ({ children, tooltipText }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>{tooltipText}</TooltipContent>
    </Tooltip>
  );
};

export default TooltipWrapper;
