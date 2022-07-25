import yaml from "yaml";

type Dependencies = {
  [key: string]: string;
};

export interface Pubspec {
  name: string;
  version: string;
  description: string;
  homepage: string;
  repository: string;
  issue_tracker: string;
  documentation: string;
  dependencies: Dependencies;
  dev_dependencies: Dependencies;
  dependency_overrides: Dependencies;
  environment;
  executables;
  platforms;
  publish_to;
  false_secrets;
}

export function parse(pubspec: string): Pubspec {
  return yaml.parse(pubspec);
}

export function stringfy(pubspec: Pubspec): string {
  return yaml.stringify(pubspec);
}
