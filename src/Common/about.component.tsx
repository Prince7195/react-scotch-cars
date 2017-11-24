import * as React from 'react';

class About extends React.Component {
    public state: any;
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="container-fluid">
                <H3>About Page</H3>
            </div>
        );
    }
}

const H3 = (props: any) => <h3>{props.children}</h3>;

export default About;