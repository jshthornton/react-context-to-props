import React, { Component } from 'react';
import _ from 'lodash';

const ContextToProps = (contextTypes, map) => {
  return DecoratedComponent => {
    return class ContextToProp extends Component {
      static get contextTypes() {
        return contextTypes;
      }

      _getContextAsProps() {
        if(map == null) {
          return this.context;
        }

        const mapped = {};
        _.forOwn(map, (value, key) => {
          mapped[key] = this.context[value];
        });

        return mapped;
      }

      render() {
        return <DecoratedComponent {...this.props} {...this._getContextAsProps()}/>
      }
    };
  }
}

export default ContextToProps;