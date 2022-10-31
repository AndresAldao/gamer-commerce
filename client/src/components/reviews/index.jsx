
import React, {useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from "react-redux";
import { postReview } from "../../redux/actions";

const Reviews = ({userid, gameid}) => {
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    const dispatch = useDispatch();
    const [input, setInput] = useState({
        rating: 0,
        userid: userid,
        gameid: gameid
    })

    const handleClick = (value) => {
        setCurrentValue(value);
        setInput({
            ...input,
            rating: value
        })
    };


  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

    function handleSubmit(e) {
        e.preventDefault();
        setCurrentValue(0);
        dispatch(postReview(input));
    }

    return (
        <Container fluid className="text-light text-center">
            <form onSubmit={(e) => handleSubmit(e)}>
                <Col md={{span:6, offset:3}}>
                    <Row>
                        <Col>
                        {
                            [1,2,3,4,5].map((star, i) => {
                                return (
                                    <StarIcon 
                                    key={i}
                                    size={36}
                                    style={{cursor: "pointer"}}
                                    color={hoverValue >= i + 1 ? "light" : currentValue >= i + 1 ? "light" : "action"}
                                    onClick={() => handleClick(i + 1)}
                                    onMouseOver={() => handleMouseOver(i + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    />
                                )
                            })
                        }
                        <h5 >{currentValue === 0 ? hoverValue : currentValue } / 5</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="success" type="submit" disabled={currentValue===0 || userid===undefined || gameid===undefined}>
                                Send
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </form>
        </Container>
    )
}
export default Reviews;
