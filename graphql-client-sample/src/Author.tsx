import type { FC } from "react";

export type AuthorProps = {
  name: string;
};

export const Author: FC<AuthorProps> = ({ name }) => {
    console.log(name)
  return <p>Author: {name}</p>;
};