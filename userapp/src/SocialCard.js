import './SocialCard.css';
const SocialCard = ({ userData}) => {
    return (
         <div className="card">
          <div className="card_title"> {userData.first_name} {userData.last_name}
            <div className="card_body">
                  <div className="card__image"><img src={userData.avatar}/></div>
                  <div className='card_email'>{userData.email}</div>
            </div>
            </div> 
           
         </div>
    );
};

export default SocialCard;