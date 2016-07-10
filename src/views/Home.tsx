import * as React from "react";

import { Main } from "../components/Main";

export interface HomeProps {}

export class Home extends React.Component<HomeProps, {}> {
  render() {
    return <Main compiler="TypeScript" framework="React" />
  }
}
