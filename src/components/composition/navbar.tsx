import { SunMoonIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="px-16 w-full fixed top-0 left-0 bg-white/90 border-b">
      <div className="flex justify-between items-center">
        <Image src="/rzrblade_light.svg" width={150} height={20} alt="rzrblade" />
        <div className="flex text-sm p-2">
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
