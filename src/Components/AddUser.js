import React , {useState ,useContext}from 'react'
import {GlobalContext} from '../Context/GlobalState';
import {Link , useHistory} from 'react-router-dom'
import {v4 as uuid} from 'uuid' ;
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap' ;

export const AddUser = () => {
    const [name , setName] = useState('');
    const {addUser} = useContext(GlobalContext) ;
    const history = useHistory();

    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser);
        history.push('/hometest') ;
    }

    const onChange = (e) => {
        setName(e.target.value);
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" 
                
                value={name} 
                onChange = {onChange}
                placeholder="Enter Name" ></Input>
            </FormGroup>
            <Button className="btn btn-primary" type="submit">Submit</Button>
            <Link to="/hometest" className="btn btn-danger ml-2">Cancel</Link>
        </Form>
    )
}
