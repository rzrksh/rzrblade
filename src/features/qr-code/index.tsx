import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const QRReaderBuilder = () => {
  return (
    <main className="mt-6 px-16">
      <div className="mb-6 flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/tools">
            <ArrowLeft />
          </Link>
        </Button>
        <div>
          <h1 className="text-4xl font-bold mb-1 text-gray-950 dark:text-gray-50">
            QR Creator / Reader
          </h1>
          <h2 className="text-gray-600 dark:text-gray-400">
            Generate custom QR codes from any text or URL, and scan existing QR codes directly from your device's camera.
          </h2>
        </div>
      </div>
    </main>
  );
};

export default QRReaderBuilder;
