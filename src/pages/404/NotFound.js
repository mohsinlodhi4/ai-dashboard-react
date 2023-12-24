import { Container,ImageList,ImageListItem } from "@mui/material";
import notfound from '@/assets/notfound.jpg'
import { Link } from "react-router-dom";
export const NotFound = ()=> {
    return (
    <Container>
    <ImageList cols={1}>
    <ImageListItem>
    <img style={{maxHeight: "80vh"}} src={notfound} alt="Not found"/>
    </ImageListItem>
    </ImageList>
    <div className="text-center text-blue-600 decoration-2 hover:underline font-medium">
        <u> <Link to={'/'}>Go to Home Page</Link> </u>
    </div>
  
    </Container>
    );
}