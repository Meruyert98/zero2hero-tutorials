function Cards() {
  return (
    <>
      <Card name="NFT1" description="AI generated images zero2hero students" />
      <Card name="NFT2" description="AI generated images zero2hero students" />
      <Card name="NFT3" description="AI generated images zero2hero students" />
    </>
  );
}

function Card({ name, description }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Cards;
