import React from "react";
import './Header.css';
import { ReactComponent as Headerlogo } from '../../assets/logo.svg';

class Header extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="Header">
                <Headerlogo className="Headerlogo" />
            </div>
        )
    }


}

export default Header;