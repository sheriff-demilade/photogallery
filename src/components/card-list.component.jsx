import Card from "./card.component";

const CardList = ({ photoGallery }) => {
  return (
    <div className="grid grid-cols-3 justify-items-center gap-y-12">
      {photoGallery.map((photoData) => (
        <Card photoData={photoData} key={photoData.id} />
      ))}
    </div>
  );
};

export default CardList;
