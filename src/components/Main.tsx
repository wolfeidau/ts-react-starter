import * as React from "react";
import { Jumbotron, Button } from 'react-bootstrap';

export interface MainProps { compiler: string; framework: string; }

export class Main extends React.Component<MainProps, {}> {
    render() {
        return (
          <div className="container">
            <Jumbotron>
              <h1>Welcome {this.props.compiler} and {this.props.framework}!</h1>
              <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <p><Button bsStyle="primary">Learn more</Button></p>
            </Jumbotron>
          </div>
        );
    }
}
