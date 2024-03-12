import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const PostCard = ({ post = {}, onViewModeToggle, onRemove, isGrid }) => {
  if (!post) {
    return <div>No post data available</div>;
  }

  if (isGrid) {
    return (
        <div className='row text-center'>
      <div className="col-md-4">
        <Card className='my-3 d-flex' border="info" style={{ width: '100%' }}>
          <Button variant="white text-end pe-2" className='fs-3 text-danger p-0 border-0' onClick={onRemove} style={{ fontWeight: "500" }}>x</Button>
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1824217014/photo/small-business-woman-and-tablet-for-e-commerce-startup-and-inventory-management-of-online.webp?b=1&s=170667a&w=0&k=20&c=xk4VF9WiI0oo8EzJ1xTwyKiUwgriDszEOp8cjCA0UZ4=" />
          <Card.Body>
            <Card.Title>{post.id}-{post.title}</Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      </div>
    );
  } else {
    return (
      <Card className="my-3 bg-white" style={{ boxShadow: "3px 3px 10px #0000001A" }}>
        <tr>
          <div className="row my-2 mx-auto">
            <div className="col-lg-12 col-12 card_text">
              <div className="row ">
                <div className="col-md-1 col-lg-1 col-sm-1 align-self-center">                
                </div>
                <div className="col-md-10 col-lg-10 col-sm-10 d-flex" >
                  <Card  border="info" className="px-2 mx-1" >{post.id} - {post.title}{post.body}</Card>
                  <Card  border="info" className=" px-2 mx-1 rounded-pill border-0" ><Button variant="white " className='fs-3 text-danger p-0 border-0' onClick={onRemove} style={{ fontWeight: "500" }}>x</Button></Card>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </Card>
    );
  }
};

export default PostCard;
