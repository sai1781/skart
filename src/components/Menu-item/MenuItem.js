import withRouter from "../../Hooks/withRouter";
import "./MenuItem.scss";
import { useNavigate } from "react-router";


const MenuItem = ({size,history,match,imageUrl,linkUrl,title, ...props}) => {

  const navigate = useNavigate();
  return (
    <div className={`menu ${size}`} onClick={() => navigate(`${linkUrl}`)}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="backgroundImage"
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">Shop now</span>
      </div>
    </div>
    
  );
};

export default withRouter(MenuItem);