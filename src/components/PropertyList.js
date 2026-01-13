import PropertyCard from "./PropertyCard";

function PropertyList({ properties }) {
  return (
    <div className="row">
      {properties.length === 0 ? (
          <div className="col-md-12">
            <div className="card text-center shadow-sm">
              <div className="card-body py-5">
                <h4 className="text-muted">
                  No properties available currently
                </h4>
                <p className="text-secondary mt-2">
                  Please check back later.
                </p>
              </div>
            </div>
          </div>
        ) :
      (properties.map(p => (
        <PropertyCard key={p.id} item={p} />
      ))
      )}
    </div>
  );
}

export default PropertyList;
