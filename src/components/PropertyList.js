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

// export default function PropertyList({ properties }) {
//   return (
//     <div className="container mt-4">
//       <h4>Properties</h4>
//       <div className="row">
//         {properties.map(p => (
//           <div className="col-md-4" key={p.id}>
//             <div className="card mb-3">
//               <img src={p.imageURL} alt={p.title || 'Property image'} className="card-img-top" />
//               <div className="card-body">
//                 <h5>{p.title}</h5>
//                 <p>Price: {p.price}</p>
//                 <p>Size: {p.size}</p>
//                 <a href="tel:+919999999999" className="btn btn-primary">Contact Owner</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
