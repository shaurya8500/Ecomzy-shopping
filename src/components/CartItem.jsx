import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ccc",
        marginBottom: "15px",
        borderRadius: "8px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
      }}
    >
      <div style={{ flex: 1, marginRight: "20px" }}>
        <img
          src={item.image}
          alt="Item"
          style={{ width: "100px", height: "100px", borderRadius: "8px" }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <h1 style={{ fontSize: "18px", marginBottom: "5px" }}>{item.title}</h1>
        <p style={{ fontSize: "14px", color: "#777", marginBottom: "10px" }}>
          {item.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>{item.price}</p>
          <div
            onClick={removeFromCart}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            <FcDeleteDatabase size={20} color="#ff5252" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
