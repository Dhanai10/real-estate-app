export default function PropertyList({ properties }) {
  return (
    <div className="container mt-4">
      <h4>Available Properties</h4>
      <div className="row">
        {properties.map(p => (
          <div className="col-md-4" key={p.id}>
            <div className="card mb-3">
              <img src={p.imageURL} className="card-img-top" />
              <div className="card-body">
                <h5>{p.title}</h5>
                <p>Price: {p.price}</p>
                <p>Size: {p.size}</p>
                <a href="tel:+919999999999" className="btn btn-primary">Contact Owner</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
