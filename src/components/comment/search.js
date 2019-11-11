import React, {Component} from 'react';

export default class Search extends Component{
    constructor(props){
        super(props);
    }
    searchInfo(e) {
        this.props.handleSearch(e.target.value);
    }
    render(){
        return(
            <form className="form-search">
                <input type="text"
                    placeholder="Search..."
                    name="search"
                    onChange={this.searchInfo.bind(this)}
                />
            </form>
        );
    }
}