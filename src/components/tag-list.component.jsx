import Tag from "./tag.component";

const TagList = ({ tags }) => {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.split(", ").map((tag, idx) => (
        <Tag key={idx} tag={tag} />
      ))}
    </ul>
  );
};

export default TagList;
