import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.sidebar = (
            <ul>
                {this.props.posts.map
                    ((post) =>
                        <li key={post.id}>
                            {post.title}
                        </li>
                    )}
            </ul>
        );

        this.content = this.props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );


    }

    render() {
        return (
            <div>
                {this.sidebar}
                <hr></hr>
                {this.content}
            </div>
        );

    }
}

export default Blog;