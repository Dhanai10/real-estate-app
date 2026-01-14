import "../assets/css/PropertyCard.css";

function PropertyCard({ item }) {
  return (
    <div className="col-md-4 mb-4 d-flex">
      <div className="card shadow-sm h-100 w-100">
        <img src={item.imageURL} className="card-img-top property-card-img" alt="property" />

        <div className="card-body">
          {/* <h5>{item.title}</h5> */}
          <p>
            ₹ {item.price}<br />
            {item.title} • {item.size} Sq.ft
          </p>
          <div className="d-flex flex-column flex-sm-row gap-2">
            <a href="tel:+918072535369" className="btn btn-primary flex-fill">
              Contact
            </a>
            <a href="/contact" className="btn btn-outline-primary flex-fill">
              View Details
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
