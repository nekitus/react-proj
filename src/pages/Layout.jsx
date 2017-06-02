import {Component} from 'react';
export default class Layout extends Component {
    constructor(){
        super();
        console.log("constructor")
    }

    render(){
        console.log("render")
        return (
            <div className="ui-layout__page">
                <div className="ui-layout__content">
                    <div className="ui-layout__wrapper">
                        <main>
                            main
                        </main>
                    </div>
                    <div className="ui-layout__footer">
                    </div>
                </div>
            </div>
        );
    }
}