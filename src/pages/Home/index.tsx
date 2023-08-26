import * as S from "./styled";

import Banner from "./banner";

import Products from "../../components/products";

const Home = () => {
    return (
        <S.Home>
            <main>
                <Banner />
                <Products />
            </main>
        </S.Home>
    );
}

export default Home;