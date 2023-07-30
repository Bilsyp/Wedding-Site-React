const Box = ({ name, time }) => {
  return (
    <div className='box'>
      <h1>{time}</h1>
      <p>{name}</p>
    </div>
  );
};

export default Box;
