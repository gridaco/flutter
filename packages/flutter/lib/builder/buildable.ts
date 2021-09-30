import { BuildingTree } from "./building-tree";

export interface Buildable {
    build(): BuildingTree
}