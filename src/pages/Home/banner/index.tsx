import * as S from "./styled";
import man from "../../../assets/man.png";

const Banner = () => {
    return (
        <S.Banner>
            <div className="banner-left">
                <h2 className="line1"><span>헬스용품</span> 중고 거래의 새로운 시작</h2>
                <h2 className="line2">다양한 운동 <span>꿀팁 공유</span>까지</h2>
                <h2 className="line3"><span className="banner-left__title">헬스마켓+</span> 에서 함께해요!</h2>
            </div>
            <div className="banner-right">
                <img src={man} alt="운동하는 남성" className="banner-right__man" />
            </div>
        </S.Banner>
    );
}

export default Banner;