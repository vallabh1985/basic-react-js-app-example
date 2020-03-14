import React from 'react';

class Categories extends React.Component{

    handleCategory = e =>{
        const cat=e.target.getAttribute('catid');
        this.props.handleCategory(cat);
    }

    render(){
        const cat=this.props.categories;

        return <ul className="list-group">
            <li key='0' catid="0" className="list-group-item btn" onClick={this.handleCategory}>All</li>
            {cat.map(c=><li catid={c.id} key={c.id} className="list-group-item btn" onClick={this.handleCategory}>{c.name}</li>)}
      </ul>;
    }
}

export default Categories;