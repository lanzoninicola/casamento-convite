import { MetaFunction } from "remix";

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export default function Errors() {
  return <div>Errors</div>;
}
