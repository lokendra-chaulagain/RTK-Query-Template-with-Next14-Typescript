"use client";
import GetAll from "./components/GetAll";
import GetOne from "./components/GetOne";
import Create from "./components/Create";
import Patch from "./components/Patch";
import Delete from "./components/Delete";

export default function Home() {
  return (
    <main>
      <GetAll />
      <GetOne />
      <Create />
      <Patch />
      <Delete />
    </main>
  );
}
