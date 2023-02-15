import React from "react";
import {
  PropertyLines,
  PropertyLine,
  PropertyInput,
} from "@editor-ui/property";

interface DockProps {
  properties: Array<{
    [key: string]: string;
  }>;
  onPropertyChange: (key: string, value: string) => void;
}

export function Dock({ properties, onPropertyChange }: DockProps) {
  return (
    <>
      <PropertyLines>
        {properties.map((p, i) => {
          return (
            <PropertyLine key={p.key} label={p.key}>
              <PropertyInput
                type={p.type as any}
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
