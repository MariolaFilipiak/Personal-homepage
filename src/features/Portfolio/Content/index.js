import { Error } from "../Error";
import { Loading } from "../Loading";
import { Repos } from "../Repos";

export const Content = ({ status, repos }) => {
  switch (status) {
    case "initial":
      return null;
    case "loading":
      return <Loading />;
    case "error":
      return <Error />;
    case "success":
      return <Repos repos={repos} />;

    default:
      throw new Error(`incorrect status: ${status}`);
  }
};
