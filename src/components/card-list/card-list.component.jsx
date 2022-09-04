import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.style.css"


class CardList extends Component{
   

   render(){

      const {filter} = this.props

      return(
       <div className="card-list">
         {filter.map(e=>{
         const {id,name, email} = e
         return (
            <Card id={id} name={name} email={email}/>
         );
       })}
       </div>
      )
   }
}

export default CardList