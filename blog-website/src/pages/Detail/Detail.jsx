import React, { useEffect, useState } from "react";
import detailimg from "../../assets/images/detail/detail.png";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi"; // Kalem ve çöp kutusu ikonları
import { getBlogs } from "../../../blogService";
import { useLocation } from "react-router";

const Detail = () => {
  const [liked, setLiked] = useState(false); // Like durumunu izleyen state
  const [comments, setComments] = useState([]); // Yorumları saklayan state
  const [newComment, setNewComment] = useState(""); // Yeni yorum için state
  const [editIndex, setEditIndex] = useState(null); // Düzenleme durumu için state
  const [editedComment, setEditedComment] = useState(""); // Düzenlenen yorumun içeriği
  const [showComments, setShowComments] = useState(false); // Yorum bölümünün görünürlüğünü kontrol eden state
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((res) => setBlogs(res));
  }, []);
  const handleLikeClick = () => {
    setLiked((prevLiked) => !prevLiked); // Like durumunu toggle et
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Eğer düzenleme yapıyorsak
      const updatedComments = comments.map((comment, index) =>
        index === editIndex ? editedComment : comment
      );
      setComments(updatedComments);
      setEditIndex(null);
      setEditedComment("");
    } else {
      // Yeni yorum ekleme
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleCommentEdit = (index) => {
    setEditIndex(index);
    setEditedComment(comments[index]);
  };

  const handleCommentDelete = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };
  const location = useLocation();
  const detailedIndex = location.pathname.replace(/\//g, "");

  const detailedBlog = blogs.find((item) => item.id === detailedIndex);
  console.log(detailedBlog);

  return (
    <div id="detail">
      <div className="detail__container">
        <div className="detail__top">{detailedBlog?.title}</div>
        <div className="detail__img">
          <img className="detailimgs" src={detailimg} alt="Detail" />
        </div>
        <div className="detail__about">
          <p className="about__top">{detailedBlog?.description}</p>
          <p className="about__bottom">{detailedBlog?.publishedAt}</p>
        </div>
        <div className="detail__icons">
          <div
            className={`detail__Like ${liked ? "liked" : ""}`}
            onClick={handleLikeClick}
          >
            <AiOutlineLike className={liked ? "icon-liked" : "icon-unliked"} />
            <p>Bəyən</p>
          </div>
          <div
            className="detail__coments"
            onClick={() => setShowComments((prevShow) => !prevShow)}
          >
            <FaRegCommentDots />
            <p>Yorum</p>
          </div>
        </div>
        {showComments && (
          <div className="comments-section">
            <form onSubmit={handleCommentSubmit}>
              <input
                type="text"
                value={editIndex !== null ? editedComment : newComment}
                onChange={(e) =>
                  editIndex !== null
                    ? setEditedComment(e.target.value)
                    : setNewComment(e.target.value)
                }
                placeholder="Yorumunuzu yazın"
                required
              />
              <button type="submit">
                {editIndex !== null ? "Düzenle" : "Yorum Ekle"}
              </button>
            </form>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>
                  <p>{comment}</p>
                  <div className="comment-actions">
                    <button onClick={() => handleCommentEdit(index)}>
                      <FiEdit />
                    </button>
                    <button onClick={() => handleCommentDelete(index)}>
                      <FiTrash2 />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;
