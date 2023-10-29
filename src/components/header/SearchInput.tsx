import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchInput = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchRef = useRef<HTMLInputElement>(null);
    const handleOnSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const searchValue = searchRef.current?.value || null;

        if (searchValue == null) return;

        if (searchRef.current) {
            searchRef.current.value = "";
        }
        navigate(`${location.pathname}?search=${searchValue}`);
    };

    return (
        <div className="header__search">
            <form className="header__search__form" onSubmit={handleOnSearch}>
                <input
                    type="text"
                    ref={searchRef}
                    placeholder="찾고 싶은 헬스용품을 검색해 보세요"
                    className="header__search__form__input"
                />
            </form>
        </div>
    );
};

export default SearchInput;
