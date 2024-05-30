
const MyPostGridLayout = ({ post }) => {
    console.log(post);
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-48 w-full" src={post.thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
};

export default MyPostGridLayout;