import { useLocation,useParams, useNavigate } from "react-router"

const withRouter =(Component) =>{

    const ComponentProps= (props)=>{
        let location =useLocation();
        let params = useParams();
        let navigate = useNavigate();
        console.log(navigate)
        console.log(props)
        return (
            <>
            <Component {...props} router={{location,navigate,params}} />
            </> 
        )


    }


    return ComponentProps;
}


export default withRouter;