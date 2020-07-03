import React from "react";
import "../styles.css";

function CharacterCard({character, onClick}) {
    return (
      <div
        className="CharacterCard"
        style={{ backgroundImage: `url(${character.image})` }}
        onClick={()=>onClick(character.name)} 
      >
        <div className="CharacterCard__name-container text-truncate text-center">
          {character.name}
        </div>
      </div>
    );
}
  
class Contacts extends React.Component{
    render(){
      return(
        <ul className="row People">
          {this.props.data.results.map(character => (
            <li className="col-6 col-md-3" key={character.id}>
              <CharacterCard character={character} onClick={this.props.onClick}/>
            </li>
          ))}
        </ul>
      )
    }
}

export default Contacts