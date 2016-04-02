# react-context-to-props

`npm i --save react-context-to-props`

I love react, you love react, but the bit I am still not 100% happy with is the redux-react bindings.
My biggest gripe is the lack of being able to use contexts in mapped dispatches.

To compensate for this we have `react-context-to-props`. This is a higher order components that will automatically place
contexts that you desire into a components props. That way, you can use it with redux-react's connect HOC.

## Usage

### Basic
```
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContextToProps from 'react-context-to-props';

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFoo: function(data) {
      ownProps.router.push(`/foo`);
    }
  };
}

export default ContextToProps({
  router: React.PropTypes.object
})(connect(mapStateToProps, mapDispatchToProps)(Component));
```

### Advanced

Sometimes you do not want the original key name to be used when passed as a prop.
react-context-to-props allows you to provide a mapping function.

```
import { connect } from 'react-redux';
import React, { Component } from 'react';
import ContextToProps from 'react-context-to-props';

const mapStateToProps = (state, ownProps) => {
  return {
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFoo: function(data) {
      ownProps.myRouter.push(`/foo`);
    }
  };
}

export default ContextToProps({
  router: React.PropTypes.object
}, {
  myRouter: router
})(connect(mapStateToProps, mapDispatchToProps)(Component));
```
