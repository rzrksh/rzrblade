"use client";

import { useUrlBuilderContext } from "../../context/url-builder.context";
import { Composer } from "../composer";
import { EncodeDecode } from "../encode-decode";
import { URLTemplating } from "../url-templating";

export const PageRenderer = () => {
  const { config } = useUrlBuilderContext();

  const component = {
    compose: <Composer />,
    encdec: <EncodeDecode />,
    template: <URLTemplating />,
  };

  return component[config];
};
