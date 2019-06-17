# [CoderSchool FTW](http://www.coderschool.vn/)

## [Video tutorial](https://youtu.be/x2E9sG-bKlc)

[![React, Redux, & ReduxABox ](https://i.imgur.com/WOR8s85.png)](https://youtu.be/x2E9sG-bKlc "React, Redux, & ReduxABox ")
Created with love by: Loi Tran

## [Try it out here](http://reduxabox.netlify.com)

A fun box app using fundamental elements of [ES6](https://www.w3schools.com/js/js_es6.asp), [React](https://reactjs.org/), & [Redux](https://redux.js.org/). 

In the course of building this we took several different approaches in terms of architecture and styling. This process gave us a greater appreciation of the problems which arise when many React components care about the same piece of state within an application.

- Nesting components deeply leads to problems such as [prop drilling](https://codeburst.io/react-anti-pattern-prop-drilling-54474d5236bd)
- Prop drilling makes our components brittle to refactoring
- Leaving state in multiple component is difficult to reason about

After we encountered these problems, we explored different solutions using Redux. We also experimented with a new API from React called [hooks](https://reactjs.org/docs/hooks-intro.html). These things allowed us to accomplish the following

- Get data where it's needed without the bloat of prop drilling
- Dispatch actions that effected global state from any component regardless of placement hierarchy
- Identify expectations on our state through initial state in our store definition
- Have a central source of truth regarding the state of our application, our store
- Refactored our components to all be stateless, making them easier to reason about and understand

## Questions or Comments?
Feel free to make a pull request on solutions you think might be better and why. Specifically, would this be a good idea?

```javascript
const mapStateToProps = state => ({ ...state })
```

## License

    Copyright [2019] [Loi Tran]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.