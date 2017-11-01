References:

Create Typescript React App: 

Step1: install nodejs - you can find in https://nodejs.org/

step2: npm install -g create-react-app

step3: go to the location where to create an react app and use the cmd  " create-react-app my-react-app --script-version=react-script-ts "

step4: for routing use " npm install --save react-router-dom "  and " npm install --save-dev @types/react-router-dom"

React-routing Bug references:

https://stackoverflow.com/questions/44710617/typescript-react-react-router-v4-not-routing

https://stackoverflow.com/questions/42748727/using-react-indexroute-in-react-router-v4

Nested Route Reference: 

https://stackoverflow.com/questions/42095600/nested-routes-in-react-router-v4

https://stackoverflow.com/questions/42848620/react-nested-routes-throwing-error-meteor

Passing props through Router:

https://stackoverflow.com/questions/44255415/passing-props-to-component-in-react-router-v4

Bugs:

1) error TS2339: Property 'Cars' does not exist on type 'Readonly<{}>'.

    fix: define it in public with type.    Ex: public state:any;

2) activeClassName="active" will not set to the Link so use NavLink instead ( import from react-router-dom )