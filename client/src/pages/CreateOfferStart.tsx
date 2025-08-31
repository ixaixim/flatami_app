// This file is kept as a simple redirect to the nested wizard route.
import { Navigate } from 'react-router-dom';

export default function CreateOfferStart() {
  return <Navigate to="/create/offer" replace />;
}
