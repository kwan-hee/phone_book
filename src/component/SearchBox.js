import React,{useState} from 'react'
import { Row, Col} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux/es/exports';

const SearchBox = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  let { contact} = useSelector((state)=>state);
  const searchByName = (event)=>{
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: {keyword}})
  }

    return (
    <div>
        <Form onSubmit={searchByName} className="search-form">
        <Row>
            <Col lg={10}>
            <Form.Control type="text" placeholder="이름을 입력해 주세요!" 
            onChange={(event)=> setKeyword(event.target.value)}
            />
            </Col>
            <Col lg={2}>
            <Button type="submit">Search </Button>
            </Col>
        </Row>
        </Form>
    </div>
  )
}

export default SearchBox