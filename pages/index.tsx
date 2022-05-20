import type { GetStaticPropsResult } from "next";

type Props = {
  hideLayout: boolean;
};

export default function Home(props: Props): JSX.Element {
  return <div>This is a page</div>;
}

export function getStaticProps(): GetStaticPropsResult<Props> {
  return {
    props: {
      hideLayout: false,
    },
  };
}
