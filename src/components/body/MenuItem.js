import React from "react"
import './style.css'
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay } from "reactstrap"


const MenuItem = (props) => {

    return (
        <div>

            <Card style={{ margin: '10px' }}>
                <CardBody >
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image}
                        style={{ opacity: "0.7" }} />
                    <CardImgOverlay>
                        <CardTitle
                            className='aaa'
                            onClick={props.DishSelect}
                            tag="h4"
                        >
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;