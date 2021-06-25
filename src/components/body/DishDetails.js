import React from 'react'
import './style.css'
import LoadComments from './loadComments'
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
const DishDetail = (props) => {
    return (
        <div>
            <Card className='nice'>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: 'left' }}>
                    <CardTitle>{props.dish.name} </CardTitle>
                    <CardText>{props.dish.description}
                        <p style={{ fontWeight: 'bold', textAlign: 'right', paddingRight: '50px' }}>
                            {`label: ${props.dish.label}`} </p>
                    </CardText>
                    <CardText style={{ textAlign: 'right', fontWeight: 'bold' }} >
                        {`$ ${props.dish.price}`}
                    </CardText>
                    <hr />

                    <LoadComments comments={props.dish.comments} />

                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;