import React from "react";
import {
  PropertyLines,
  PropertyLine,
  PropertyInput,
  PropertyCheckboxInput,
  PropertySelectInput,
  PropertyColorInput,
} from "@editor-ui/property";

type TValue = string | number | boolean;

type Property =
  | EnumProperty
  | {
      key: string;
      type: "number" | "text" | "boolean" | "color";
      value: TValue;
    };

type EnumProperty = {
  key: string;
  value: TValue;
  type: "enum";
  options: Array<string>;
};

interface DockProps {
  properties: Array<Property>;
  onPropertyChange: (key: string, value: TValue) => void;
}

export function Dock({ properties, onPropertyChange }: DockProps) {
  const Input = ({
    property: p,
    onChange,
  }: {
    property: Property;
    onChange: (value: any) => void;
  }) => {
    switch (p.type) {
      case "boolean":
        return <PropertyCheckboxInput key={p.key} onChange={onChange} />;
      case "color":
        return <PropertyColorInput key={p.key} onChange={onChange} />;
      case "enum":
        return (
          <PropertySelectInput
            key={p.key}
            onChange={onChange}
            options={p.options}
          />
        );
      default: {
        return (
          <PropertyInput
            type={p.type as any}
            value={p.value}
            onChange={onChange}
          />
        );
      }
    }
  };

  return (
    <>
      <PropertyLines>
        {properties.map((p, i) => {
          return (
            <PropertyLine key={p.key} label={p.key}>
              <Input
                property={p}
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
