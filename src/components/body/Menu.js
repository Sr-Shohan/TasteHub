import React, { Component } from 'react'
import DISHES from '../../data/dishes'
import MenuItem from './MenuItem'
import DishDetail from "./DishDetails"
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap'
import './style.css'
class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalOpen: false
    }



    onDishSelect = (dish) => {
        // console.log(dish)
        this.setState({
            selectedDish: dish,
            modalOpen: !this.state.modalOpen
        })

    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }

    render() {

        const menu = this.state.dishes.map((item) => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelect(item)} />
            )
        })

        let dishDetail = null
        if (this.state.selectedDish != null) {
            dishDetail = <DishDetail dish={this.state.selectedDish} />
        }
        return (
            <div className='container'>
                <div className='row'>
                    {/* Menu section using card */}
                    <CardColumns className='cardColumns'>
                        {menu}
                    </CardColumns>

                    {/* After clicking on item */}
                    <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter className='btns'>
                            <Button color='success' onClick={this.toggleModal} center>
                                close
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {/* <div className='col-6'>
                        {dishDetail}
                    </div> */}
                </div>
            </div>
        )
    }
}


export default Menu;