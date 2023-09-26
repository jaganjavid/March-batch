import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where, orderBy, limit, startAfter } from "firebase/firestore";
import { db } from "../firebase-config";
import { toast } from "react-toastify";


const Category = () => {

  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);  

  const params = useParams();

  useEffect(() => {
     const fetchListings = async () => {
        // Get Reference
        const listingRef = collection(db, "listings");

        // Create query
        const q = query(listingRef, where("type", "==", params.categoryName),
        orderBy("timestamp", "desc"), limit(10));

        // Execute query
        const querySnap = await getDocs(q);

        let listings = [];

        querySnap.forEach((doc) => {
           return listings.push({
             id: doc.id,
             data: doc.data()
           })
        })

        console.log(listings);
     }

     fetchListings();
  }, [])

  return (
    <div>
       <h1>{params.categoryName}</h1>
    </div>
  )
}

export default Category