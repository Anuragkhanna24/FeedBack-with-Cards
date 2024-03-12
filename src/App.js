import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from './Components/PostCard';
import CustomPagination from './Components/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { fetchPosts, removePost } from './Redux/actions';
import FeedbackForm from './Components/FeedbackForm'; 
import { Card } from '@material-ui/core';
import { CardBody, CardTitle } from 'react-bootstrap';
import { FiGrid, FiList } from 'react-icons/fi'; 

const App = () => {
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [isFeedbackFormOpen, setIsFeedbackFormOpen] = useState(false); 
  const [viewMode, setViewMode] = useState('grid');

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleRemovePost = (id) => {
    dispatch(removePost(id));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const openFeedbackForm = () => {
    setIsFeedbackFormOpen(true);
  };

  const closeFeedbackForm = () => {
    setIsFeedbackFormOpen(false);
  };

  const toggleViewMode = () => {
    setViewMode((prevMode) => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div className="app">
      <div className="toggle-button">
        <Button variant="contained" color="primary" onClick={toggleViewMode}>
          {viewMode === 'grid' ? <FiList /> : <FiGrid />} View Toggle
        </Button>

        <Card>
            <CardBody>
              <CardTitle>Have a Feedback?</CardTitle>
              <Button variant="contained" color="primary" onClick={openFeedbackForm}>
                We're Listening!
              </Button>
            </CardBody>
          </Card>
      </div>


      {loading ? (
        <div className="loading">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className={`post-container ${viewMode}`}>
            {currentPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onRemove={() => handleRemovePost(post.id)}
                isGrid={viewMode === 'grid'} 
              />
            ))}
          </div>
          <CustomPagination
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
       

          <FeedbackForm open={isFeedbackFormOpen} onClose={closeFeedbackForm} />
        </>
      )}
    </div>
  );
};

export default App;
