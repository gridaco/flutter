import React from "react";
import {
  PropertyLines,
  PropertyLine,
  PropertyInput,
} from "@editor-ui/property";
import { NotifyPropertyChange } from "@flutter-preview/webview";

interface DockProps {
  properties: {
    [key: string]: string;
  };
  onPropertyChange: (key: string, value: string) => void;
}

export function Dock({ properties, onPropertyChange }: DockProps) {
  const _onPropertyChange = (key: string, value: string) => {
    console.log("onPropertyChange", key, value);
    const msg: NotifyPropertyChange = {
      event: "@inapp/property-change",
      key,
      value,
    };
    parent.postMessage(msg, "*");
  };

  // const properties = [
  //   {
  //     key: "name",
  //     value: "Value",
  //     type: "text",
  //   },
  //   {
  //     key: "radius",
  //     value: "12",
  //     type: "number",
  //   },
  //   {
  //     key: "description",
  //     value: "Value",
  //     type: "text",
  //   },
  // ] as const;

  return (
    <>
      <PropertyLines>
        {properties.map((p, i) => {
          return (
            <PropertyLine key={p.key} label={p.key}>
              <PropertyInput
                type={p.type}
                value={p.value}
                onChange={(v) => {
                  onPropertyChange(p.key, v);
                }}
              />
            </PropertyLine>
          );
        })}
      </PropertyLines>
    </>
  );
}
