import { Component } from 'react';

export default class PureComponent extends Component {

    shouldComponentUpdate(nextProps) {
        const currentPropsNames = Object.getOwnPropertyNames(this.props);
        const nextPropsNames = Object.getOwnPropertyNames(nextProps);

        if(currentPropsNames.length !== nextPropsNames.length) {
            return true
        }
        
        for(const key in nextProps) {

            if(nextProps.hasOwnProperty(key)) {

                if(!(nextProps[key] instanceof Function)) {

                    if (Object.prototype.toString.call(nextProps[key]) === '[object Object]' || Array.isArray(nextProps[key]) ) {

                        if(nextProps[key] !== this.props[key] && JSON.stringify(nextProps[key]) !== JSON.stringify(this.props[key])) {
                            return true;
                        }

                    } else if(nextProps[key] !== this.props[key]) {
                        return  true;
                    }

                }
                else {

                    if (!this.props[key] || !nextProps[key].name ||  (nextProps[key].name !== this.props[key].name)) {
                        return true;
                    }

                }

            }
        }

        return false;
    }
}