import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <>
      <Image src="/logo.svg" alt="Image" height={60} width={226} />
    </>
  );
}
