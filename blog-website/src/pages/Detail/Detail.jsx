import React, { useState } from 'react';
import detailimg from "../../assets/images/detail/detail.png";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi"; // Kalem ve çöp kutusu ikonları

const Detail = () => {
    const [liked, setLiked] = useState(false); // Like durumunu izleyen state
    const [comments, setComments] = useState([]); // Yorumları saklayan state
    const [newComment, setNewComment] = useState(""); // Yeni yorum için state
    const [editIndex, setEditIndex] = useState(null); // Düzenleme durumu için state
    const [editedComment, setEditedComment] = useState(""); // Düzenlenen yorumun içeriği
    const [showComments, setShowComments] = useState(false); // Yorum bölümünün görünürlüğünü kontrol eden state

    const handleLikeClick = () => {
        setLiked(prevLiked => !prevLiked); // Like durumunu toggle et
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

    return (
        <div id="detail">
            <div className="detail__container">
                <div className="detail__top">
                    How to make a Game look more attractive with New VR & AI Technology
                </div>
                <div className="detail__img">
                    <img className='detailimgs' src={detailimg} alt="Detail" />
                </div>
                <div className="detail__about">
                    <p className='about__top'>
                        Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                    </p>
                    <p className='about__bottom'>
                        We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.
                    </p>
                </div>
                <div className="detail__icons">
                    <div
                        className={`detail__Like ${liked ? 'liked' : ''}`}
                        onClick={handleLikeClick}
                    >
                        <AiOutlineLike className={liked ? 'icon-liked' : 'icon-unliked'} />
                        <p>Bəyən</p>
                    </div>
                    <div
                        className="detail__coments"
                        onClick={() => setShowComments(prevShow => !prevShow)}
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
                                onChange={(e) => editIndex !== null ? setEditedComment(e.target.value) : setNewComment(e.target.value)} 
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
                                        <button onClick={() => handleCommentEdit(index)}><FiEdit /></button>
                                        <button onClick={() => handleCommentDelete(index)}><FiTrash2 /></button>
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
