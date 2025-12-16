function PropertyCard({ item }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img src={item.imageURL} className="card-img-top" alt="property" />

        <div className="card-body">
          <h5>{item.title}</h5>
          <p>
            Price: {item.price}<br />
            Size: {item.size}
          </p>
          <a href="/contact" className="btn btn-primary w-100">
            Contact Consultant
          </a>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
