import Head from "next/head";
import Image from "next/image";
import { Example } from "../grida/Example";
import { Client } from "@flutter-builder/daemon/client";

const clinet = new Client("ws://localhost:43070");

export default function Home() {
  return <Example />;
}
