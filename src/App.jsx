import { FavoriteProductList, RecentProductList } from "./components/ProductApi.jsx"
import "./App.css";

function App() {

  return (
    <>
      <div className="favoriteProductList">
        <h2>베스트 순 정렬</h2>
        <FavoriteProductList />
      </div>
      <div className="recentProductList">
        <h2>최근 순 정렬</h2>
        <RecentProductList />
      </div>

    </>
  )
}

export default App
