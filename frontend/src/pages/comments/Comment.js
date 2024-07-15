import React, { useState } from 'react'
import CommentEditForm from "./CommentEditForm";
import styles from '../../styles/Comment.module.css'
import Media from 'react-bootstrap/Media'
import Avatar from '../../components/Avatar'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import { useCurrentUser } from '../../contexts/CurrentUserContext'
import { MoreDropdown } from '../../components/MoreDropdown'
import { axiosRes } from '../../api/axiosDefaults'

const Comment = (props) => {
    const {
        id,
        owner,
        profile_id,
        profile_image,
        updated_at,
        content,
        setReview,
        setComments,
    } = props

    const currentUser = useCurrentUser()
    const is_owner = currentUser?.username === owner;
    const [showEditForm, setShowEditForm] = useState(false);

    const handleDelete = async () => {
        try {
            await axiosRes.delete(`/comments/${id}/`)
            setReview(prevReview => ({
                results: [{
                    ...prevReview.results[0],
                    comments_count: prevReview.results[0].comments_count - 1
                }]
            }))

            setComments(prevComments => ({
                ...prevComments,
                results: prevComments.results.filter(comment => comment.id !== id),
            }));
        } catch(err){}
    }

  return (
    <div>
        <hr></hr>
        <Media>
            <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height="35" text={owner}/>
            </Link>
            <Media.Body className="align-self-center ml-2">
                <span className={styles.Date}>{updated_at}</span>
                {showEditForm ? (
            <CommentEditForm 
            id={id}
            profile_id={profile_id}
            content={content}
            profileImage={profile_image}
            setComments={setComments}
            setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
            </Media.Body>
            {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
        </Media>
    </div>
  )
}

export default Comment