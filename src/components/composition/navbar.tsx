import { SunMoonIcon } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="p-4 px-16 w-full fixed top-0 left-0 bg-white shadow-xs">
      <div className="flex justify-between items-center">
        <div>rzrblade</div>
        <div className="flex text-sm">
          <Button variant="ghost">Tools</Button>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Docs</Button>
          <Button variant="ghost">Contribute</Button>
          <Button variant="ghost">
            <SunMoonIcon />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
