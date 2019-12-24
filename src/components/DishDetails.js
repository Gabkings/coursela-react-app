import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }

    renderDish(dish) {
        if (dish != null){
            const reviews = dish.comments.map((comment) =>{
                return(
                <div key={comment.id}>
            <p>{comment.comment}</p>
            <p>--{comment.author} {comment.date}</p>
            <hr></hr>
                </div>
                )
            })
            return(
                <div className="row">
                    <div className="col-md-5">
                    <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                    </div>
                    <div className="col-md-5 ml-1">
                        <h2>Comments </h2>
                        {reviews}
                    </div>
                </div>
            );
            }else{
            return(
                <div></div>
            )};
    }
    render(){
        return(
            <div>
                {this.renderDish(this.props.dish)}
            </div>
        )
    }
}

export default DishDetail