import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import styles from "../../styles/ReviewsPage.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import Review from "./Review";
import NoResults from "../../assets/no_results_inverted.png"
import Asset from "../../components/Asset";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function ReviewsPage({ message, filter="" }) {
  const [ reviews, setReviews ] = useState({ results: [] });
  const [ hasLoaded, setHasLoaded ] = useState(false);
  const { pathname } = useLocation();
  const currentUser = useCurrentUser();
  const [ query, setQuery ] = useState("");
    
  useEffect(() => {
    const fetchReviews = async () => {
        try {
            const {data} = await axiosReq.get(`/reviews/?${filter}search=${query}`);
            setReviews(data);
            setHasLoaded(true);
        } catch(err){
            console.log(err);
        }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
        fetchReviews();
    }, 1000)
    return () => {
        clearTimeout(timer)
    }
  }, [filter, query, pathname, currentUser]);
  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form className={styles.SearchBar}
        onSubmit={(event) => event.preventDefault()}
        >
        <Form.Control
        type="text"
        className="mr-sm-2"
        placeholder="search reviews"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        />
        </Form>
        {hasLoaded ? (
            <>
            {reviews.results.length ? (
                <InfiniteScroll
                    children={
                        reviews.results.map((review) => (
                            <Review key={review.id} {...review} setReviews={setReviews} />
                        ))
                    }
                    dataLength={reviews.results.length}
                    loader={<Asset spinner />}
                    hasMore={!!reviews.next}
                    next={() => fetchMoreData(reviews, setReviews)}
                />
            ) : (
                <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
            </>
        ) : (
            <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ReviewsPage;