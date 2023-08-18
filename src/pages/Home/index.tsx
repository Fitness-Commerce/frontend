import * as S from "./styled";
import Banner from "../../components/Home/banner";
import Nav from "../../components/Home/nav";
import Products from "../../components/products";

const Home = () => {
    return (
        <S.Home>
            <Nav />
            <main>
                <Banner />
                <Products />
            </main>
        </S.Home>
    );
}

export default Home;