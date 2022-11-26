import "./RestaurantCard.css";
import Card from 'react-bootstrap/Card';
import Data from "../Data/Data.json";

function RestaurantCard() {

    return (
        <div className="container">
            {
                Data.map(data => {
                    return (
                        <Card className='card'>
                            <Card.Img variant="top" className='img-food' src={data.img} />
                            <Card.Body className='body'>
                                <Card.Title className='title'>{data.name}</Card.Title>
                                <Card.Text className='text' id='category'>
                                    {data.category}
                                </Card.Text>
                                <Card.Text id='bottom-card-description'>
                                    <div className="info">{data.rating}</div>
                                    <span className="spacing">.</span>
                                    <div className="info">{data.price}</div>
                                    <span className="spacing">.</span>
                                    <div className="info">{data.distance}</div>


                                </Card.Text>

                            </Card.Body>
                        </Card>)
                })
            }


        </div>





    );
}

export default RestaurantCard;