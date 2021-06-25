import React from "react"

import { Card, CardImg, CardBody, CardTitle, CardImgOverlay } from "reactstrap"


const MenuItem = (props) => {

    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardBody >
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle
                            onClick={props.DishSelect}
                            tag="h4"
                            style={{ cursor: "pointer" }}>
                            {props.dish.name}
                        </CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;