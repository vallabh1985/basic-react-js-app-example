import React from 'react';

class List extends React.Component{
    state={
        namelist:[]
    }

    componentDidMount() {
        fetch('/list')
        .then(res => res.json())
        .then(list => this.setState({namelist:list}))
    }

    render(){

        const listname=this.state.namelist;
    
        return(
            <div>
               {listname.map(name=><p>{name}</p>)}
            </div>
        );
    }
}

export default List;