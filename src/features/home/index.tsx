import {
  ExternalLink,
  GitPullRequestArrow,
  Heart,
  Rocket,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/composition/footer";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import HeroImage from "./components/hero-image";

export const Home = () => {
  return (
    <>
      <main className="px-16 max-w-[var(--max-home-width)] mx-auto mb-12">
        <div className="mt-20 mb-20 flex justify-center gap-14">
          <div>
            <h1 className="text-8xl font-bold mb-6">
              Your development
              <br />
              super toolbox
            </h1>
            <p className="text-gray-500 text-xl mb-12">
              All-in-one toolkit for development to make your day easier.
              <br />
              Test, inspect, and simplify everyday tasks.
            </p>
            <div className="flex gap-2">
              <Link href="/tools" className="inline-block">
                <Button
                  size="lg"
                  className="bg-gray-200 text-black hover:text-white dark:bg-lime-400 dark:hover:text-black"
                >
                  <Rocket />
                  <span>Try Blade</span>
                </Button>
              </Link>
              <Link
                href="https://github.com/rzrksh/rzrblade"
                className="inline-block"
                target="_blank"
              >
                <Button size="lg" variant="outline">
                  <ExternalLink />
                  <span>View on Github</span>
                </Button>
              </Link>
            </div>
          </div>
          <HeroImage />
        </div>
        <div className="mb-14">
          <div className="text-center text-sm font-bold mb-1 dark:text-lime-400 tracking-widest">
            ALL - IN - ONE
          </div>
          <div className="text-center text-4xl font-bold mb-2">
            Everything you need. In one place.
          </div>
          <div className="text-center text-sm font-light text-gray-500">
            Powerfull tools for modern developers. No signup and No Ads
          </div>
          <div></div>
        </div>
        <div>
          <div className="text-center text-2xl font-bold">Built to be free</div>
          <div className="flex gap-2 mt-4">
            <Card className="p-6 w-full">
              <CardTitle className="flex items-center gap-2">
                <Heart width={15} height={15} className="dark:text-lime-400" />
                <span>Totatally Free</span>
              </CardTitle>
              <CardDescription>
                Yep! You heard that right, it is free and and it always be. This
                is our commitment from the start, to make Blade free to use.
              </CardDescription>
            </Card>
            <Card className="p-6 w-full">
              <CardTitle className="flex items-center gap-2">
                <GitPullRequestArrow
                  width={15}
                  height={15}
                  className="dark:text-lime-400"
                />
                <span>Open Source</span>
              </CardTitle>
              <CardDescription>
                Made for devs, by devs. Fork it, improve it, and let's build
                something great, together.
              </CardDescription>
            </Card>
            <Card className="p-6 w-full">
              <CardTitle className="flex items-center gap-2">
                <Wrench width={15} height={15} className="dark:text-lime-400" />
                <span>Robust and Constantly Maintained</span>
              </CardTitle>
              <CardDescription>
                Always up to date, polished, and ready to help. We also try to
                make the tools as robust as possible.
              </CardDescription>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
