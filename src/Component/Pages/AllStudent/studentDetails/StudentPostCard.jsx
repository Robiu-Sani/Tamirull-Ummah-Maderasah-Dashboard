const StudentPostCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        {/* Post Title */}
        <h2 className="text-xl font-semibold text-gray-800">
          {post.postTitle}
        </h2>

        {/* Post Description */}
        <p className="text-gray-600 text-base mt-2">{post.postDescription}</p>
      </div>
      {/* Post Image */}
      {post.postImage && (
        <img
          className="w-full h-48 object-cover"
          src={post.postImage}
          alt={post.postTitle}
        />
      )}

      {/* Card Footer */}
      {post.isSelected && (
        <div className="px-6 py-4">
          <span className="bg-blue-500 text-white text-sm py-1 px-3 rounded-full">
            Selected
          </span>
        </div>
      )}
    </div>
  );
};

export default StudentPostCard;
