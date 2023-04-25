"use client";
import { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../elements/Tabs";
import SimpleBar from "simplebar-react";
import Code from "./Code";
import { nodejs, python } from "@/constants/documentation-code";

const DocumentationTabs: FC = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className=" max-w-2xl w-full ">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code language="javascript" code={nodejs} show animation />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code language="python" code={python} show animation />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

DocumentationTabs.displayName = "DocumentationTabs";
export default DocumentationTabs;
