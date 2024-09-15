import { collection, getDocs } from "firebase/firestore";
import { db } from "./filebaseConfig";

// Fetch jerseys from Firestore
export const getBlogs = async () => {
  const blogsRef = collection(db, "blogs");
  const querySnapshot = await getDocs(blogsRef);
  const blogs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(blogs);

  return blogs;
};
