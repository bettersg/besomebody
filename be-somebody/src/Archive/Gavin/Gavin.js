const Gavin = (props) => {
  return <p className="gavin">{props.text}</p>;
};

export default Gavin;
// this is not sustainable - we need to refactor this so that the class is assigned by the storyboard, rather than creating components for every character
