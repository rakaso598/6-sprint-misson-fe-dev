import {
  FavoriteProductList,
  RecentProductList,
} from "./components/ProductList.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <h2>베스트 순 정렬</h2>
        <div className="favoriteProductList">
          <FavoriteProductList />
        </div>
        <h2>최근 순 정렬</h2>
        <div className="recentProductList">
          <RecentProductList />
        </div>
      </div>
    </>
  );
}

export default App;
