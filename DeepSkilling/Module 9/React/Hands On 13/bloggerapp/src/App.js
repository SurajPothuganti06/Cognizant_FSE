import "./App.css";

import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

import { books, blogs, courses } from "./components/Data";

function App() {

    // Conditional Rendering using if-else
    const showBooks = true;

    let bookComponent;

    if (showBooks) {

        bookComponent = <BookDetails books={books} />;

    } else {

        bookComponent = <h2>No Books Available</h2>;

    }

    // Conditional Rendering using Ternary Operator
    const blogComponent =
        blogs.length > 0 ?
        <BlogDetails blogs={blogs} /> :
        <h2>No Blogs</h2>;

    // Conditional Rendering using &&
    const courseComponent =
        courses.length > 0 &&
        <CourseDetails courses={courses} />;

    return (

        <div className="container">

            <div className="box">

                {courseComponent}

            </div>

            <div className="box">

                {bookComponent}

            </div>

            <div className="box">

                {blogComponent}

            </div>

        </div>

    );

}

export default App;