import { useState, useEffect } from 'react';

const PostForm = ({ addPost, current }) => {
  const [postData, setPostData] = useState({
    title: '',
    body: '',
  });

  const { title, body } = postData;

  const onChange = e =>
    setPostData({ ...postData, [e.target.name]: e.target.value });

  const onAddPost = e => {
    const newPost = { title, body };
    addPost(newPost);
  };

  useEffect(() => {
    if (current !== null) {
      setPostData(current);
    }
  }, [current]);

  return (
    <div className="my-5">
      {/* Button trigger modal  */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addPost"
      >
        New Post
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addPost"
        tabIndex="-1"
        aria-labelledby="addPostLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Post
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={onChange}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="body" className="form-label">
                    Content
                  </label>
                  <textarea
                    name="body"
                    id="body"
                    rows="10"
                    value={body}
                    onChange={onChange}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={onAddPost}
                  >
                    Add Post
                  </button>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostForm;
