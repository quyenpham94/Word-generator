import React from "react";

const FavoriteButton = (props) => {
    const SetStateAndToggle = () => {
        const currentFavorite = <FontAwesomeIcon icon={faHeart} />
        const notCurrentFavorite = <FontAwesomeIcon icon={faHeartBroken} />
        const [favorite, setFavorite] = useState();

        const toggleFavorite = (objectId) => {
            setFavorite((favorite) => {
                if(favorite === true) {
                    console.log("I click unfavorite");
                    
                    fetch(`/favorite/remove`, {method: 'POST'})
                    .then(console.log("This was a favorite object, but now it isn't"));
                }
                if (favorite === false) {
                    console.log("I clicked favorite");
                    fetch(`/favorite/add`, {method: 'POST'})
                    .then(console.log("This was not a favorite object, but now it is"));
                }
                return !favorite;

            })
        }
    }
    return (
        <button 
            className={styles['favorite-button']}
            onClick={() => toggleFavorite(props.objectId)}
            key={props.objectId}>
                {favorite === true ? currentFavorite: notCurrentFavorite}
            </button>
    )

}

export default FavoriteButton;