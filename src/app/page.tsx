import { ExternalLink, GitPullRequestArrow, Heart, Wrench } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <main className="mt-12 px-16 min-h-[100svh]">
      <div className="min-h-[100svh]">
        <Image
          src="https://placehold.co/300"
          width={300}
          height={300}
          alt=""
          className="mx-auto mb-6"
          unoptimized
        />
        <div className="mx-[20%] text-center mb-4">
          <h1 className="text-6xl font-bold mb-12">
            Your dev super-toolbox
            <br />
            Built to save your sanity
          </h1>
          <p className="text-gray-500">
            Your all-in-one toolkit to build, debug, and ship faster.
            <br />A single hub to make every dev day smoother.
          </p>
        </div>
        <div className="flex justify-center">
          <Button size="lg" className="mx-auto">
            <ExternalLink />
            <span>Try rzrblade</span>
          </Button>
        </div>
      </div>
      <div className="mb-16">
        <div className="text-center text-2xl font-bold">rzrblade Tools</div>
        <div className="flex gap-2 mt-4">
          <Card className="p-6 w-full">
            <CardTitle className="flex items-center gap-2">
              <span>URL Builder</span>
            </CardTitle>
            <CardDescription>
              Yep! You heard that right, it is free and and it always be. But as
              always, a couple of bucks for coffee is great!
            </CardDescription>
          </Card>
          <Card className="p-6 w-full">
            <CardTitle className="flex items-center gap-2">
              <span>JSON Builder</span>
            </CardTitle>
            <CardDescription>
              Made for devs, by devs. Fork it, improve it, and let's build
              something sharper, together.
            </CardDescription>
          </Card>
          <Card className="p-6 w-full">
            <CardTitle className="flex items-center gap-2">
              <span>Hashing and Encryption</span>
            </CardTitle>
            <CardDescription>
              Always up to date, polished, and ready to help. We also try to
              make the tools as robust as possible.
            </CardDescription>
          </Card>
        </div>
      </div>
      <div className="mb-16">
        <div className="text-center text-2xl font-bold">Why rzrblade?</div>
        <div className="flex gap-2 mt-4">
          <Card className="p-6 w-full">
            <CardTitle className="flex items-center gap-2">
              <span>Totatally Free</span>
              <Heart width={15} height={15} />
            </CardTitle>
            <CardDescription>
              Yep! You heard that right, it is free and and it always be. But as
              always, a couple of bucks for coffee is great!
            </CardDescription>
          </Card>
          <Card className="p-6 w-full">
            <CardTitle className="flex items-center gap-2">
              <span>Open Source</span>
              <GitPullRequestArrow width={15} height={15} />
            </CardTitle>
            <CardDescription>
              Made for devs, by devs. Fork it, improve it, and let's build
              something sharper, together.
            </CardDescription>
          </Card>
          <Card className="p-6 w-full">
            <CardTitle className="flex items-center gap-2">
              <span>Robust and Constantly Maintained</span>
              <Wrench width={15} height={15} />
            </CardTitle>
            <CardDescription>
              Always up to date, polished, and ready to help. We also try to
              make the tools as robust as possible.
            </CardDescription>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Home;
