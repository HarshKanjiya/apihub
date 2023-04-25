import { FC } from "react";

import type { Metadata } from "next";
import LargeHeading from "@/components/elements/LargeHeading";
import Paragraph from "@/components/elements/Paragraph";
import DocumentationTabs from "@/components/layouts/DocumentationTabs";

import "simplebar-react/dist/simplebar.min.css";

export const metadata = {
  title: "API Hub - Documentation",
  description: "API Hub Documantation",
};

const page: FC = () => {
  return (
    <div className=" container max-w-7xl mx-auto mt-12  ">
      <div className="flex flex-col items-center gap-6 ">
        <LargeHeading className="  ">Making a Request</LargeHeading>
        <Paragraph>api / v1 / apihub</Paragraph>
        <DocumentationTabs />
      </div>
    </div>
  );
};

export default page;
