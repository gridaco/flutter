import React from "react";
import {
  PropertyLines,
  PropertyLine,
  PropertyInput,
  PropertyCheckboxInput,
  PropertySelectInput,
  PropertyColorInput,
} from "@editor-ui/property";
import styled from "@emotion/styled";

export type Property =
  | EnumProperty
  | {
      key: string;
      type: "number" | "text";
      value: string | number;
    }
  | {
      key: string;
      type: "boolean";
      value: boolean;
    }
  | {
      key: string;
      type: "color";
      value: string;
    };

type EnumProperty = {
  key: string;
  value: string;
  type: "enum";
  options?: Array<{ label: string; value: string }> | Array<string>;
};

interface DockProps {
  properties: Array<Property>;
  onPropertyChange: (key: string, value: any) => void;
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
        return (
          <PropertyCheckboxInput
            key={p.key}
            onChange={onChange}
            value={p.value}
          />
        );
      case "color":
        return (
          <PropertyColorInput key={p.key} onChange={onChange} value={p.value} />
        );
      case "enum":
        return (
          <PropertySelectInput
            key={p.key}
            value={p.value}
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
    <DockLayout>
      <DockHeader>Props</DockHeader>
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
    </DockLayout>
  );
}

const DockLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const DockHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 14px;
`;
