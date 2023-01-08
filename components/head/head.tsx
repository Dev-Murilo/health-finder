import NextHead from "next/head";
import React from "react";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export function Head({ title, children }: Props) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta data-testid="meta" name="viewport" content="width=device-width, initial-scale=1" />
      <link data-testid="favicon" rel="icon" href="/favicon.ico" />
      {children}
    </NextHead>
  );
}
