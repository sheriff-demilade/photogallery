import TagList from "./tag-list.component";

const Card = ({
  photoData: { id, tags, webformatURL, user, views, downloads, likes },
}) => {
  return (
    <div className="max-w-sm shadow-md rounded overflow-hidden hover:shadow-lg transition duration-300">
      <img src={webformatURL} alt={tags[0]} />
      <div className="px-6 py-4">
        <h2 className="text-lg font-semibold text-purple-400 mb-2">
          Photo by {user}
        </h2>

        <ul className="text-sm font-semibold mb-5">
          <li>
            Views : <span className="font-normal">{views}</span>
          </li>
          <li>
            Downloads : <span className="font-normal">{downloads}</span>
          </li>
          <li>
            Likes : <span className="font-normal">{likes}</span>
          </li>
        </ul>

        <TagList tags={tags} />
      </div>
    </div>
  );
};

export default Card;
