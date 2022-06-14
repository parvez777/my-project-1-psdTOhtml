import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './Blog.css';


const Blog = () => {
    return (

        <Container className='container'>
            <div className="blod-title">
                <h1>Recent News</h1>
            </div>
            <div className="CardMain">
            <Card sx={{ minWidth: 275, margin: "0 15px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, padding: "5px", color: "#fff", background: "#555", width: "120px", textAlign: "center"}} color="text.secondary" gutterBottom>
          June 13, 2022
        </Typography>
        <Typography variant="h5" component="div" sx={{padding: "15px 0"}}>
          Geniuine Ittalian Pizza: <br />
          Aouthenticity and Choice
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Earum, sed quisquam! Voluptatibus sapiente rerum iste.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reade More {">>"}</Button>
      </CardActions>
    </Card>
            <Card sx={{ minWidth: 275, margin: "0 15px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, padding: "5px", color: "#fff", background: "#555", width: "120px", textAlign: "center"}} color="text.secondary" gutterBottom>
          June 13, 2022
        </Typography>
        <Typography variant="h5" component="div" sx={{padding: "15px 0"}}>
          Geniuine Ittalian Pizza: <br />
          Aouthenticity and Choice
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Earum, sed quisquam! Voluptatibus sapiente rerum iste.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reade More {">>"} </Button>
      </CardActions>
    </Card>
            <Card sx={{ minWidth: 275, margin: "0 15px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14, padding: "5px", color: "#fff", background: "#555", width: "120px", textAlign: "center"}} color="text.secondary" gutterBottom>
          June 13, 2022
        </Typography>
        <Typography variant="h5" component="div" sx={{padding: "15px 0"}}>
          Geniuine Ittalian Pizza: <br />
          Aouthenticity and Choice
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Earum, sed quisquam! Voluptatibus sapiente rerum iste.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Reade More {">>"}</Button>
      </CardActions>
    </Card>
    </div>
        </Container>
    );
};

export default Blog;