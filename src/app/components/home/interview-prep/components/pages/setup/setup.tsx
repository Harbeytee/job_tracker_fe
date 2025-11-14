"use client";

import Instructions from "./instructions";
import SetupProvider from "../store/setup-context";
import Progress from "./progress";

export default function Setup() {
  return (
    <SetupProvider>
      <div className="flex mt-[20px] justify-center p-4">
        <Progress />
        <Instructions />
      </div>
    </SetupProvider>
  );
}
