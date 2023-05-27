import ActualBookingItem from "../ActualBookingItem/ActualBookingItem";

const ActualBookingList = ({ books, image }) => {
  return ( 
    books.map((item) => {
      return (
          item.book.status === "pending" && <ActualBookingItem key={item.id} image={image} {...item} />
      )
  })
   );
}
 
export default ActualBookingList;