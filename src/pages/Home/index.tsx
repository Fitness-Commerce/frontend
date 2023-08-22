import * as S from "./styled";
import Banner from "./banner";
import Nav from "./nav";
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