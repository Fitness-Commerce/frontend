import { styled } from "styled-components";
interface IHeaderProps {
  padding: string;
}
export const Header = styled.header<IHeaderProps>`
  display: flex;
  width: 100%;
  height: var(--header-height);
  padding: 50px ${props=>props.padding};
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-bg-white);

  .header__logo {
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }

    .header__logo-name {
      display: inline-block;
      flex-shrink: 0;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }

  .header__search {
    position: relative;
    min-width: 512px;
    .header__search__form {
      display: flex;
      align-items: center;
      .header__search__form__input {
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        padding: 2px 16px;
        padding-right: 74px;
        color: var(--color-text-black);
        background-color: var(--color-gray);
        font-size: 14px;
        font-weight: 400;
        border: none;
        outline: none;
        &:focus {
          box-shadow: 0 0 0 1px inset var(--color-bright-black);
          background-color: var(--color-bright-black);
          color: white;
          svg {
          }
        }
      }
    }
  }
  .header__login {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    align-items: center;
    width: max-content;
    height: 44px;
    padding: 0 20px;
    border: 1px solid;
    border-radius: var(--button-radius);
    color: var(--color-white-primary);
    background-color: var(--color-black-primary);

    &:hover {
      background-color: var(--color-button-bg-hover);
    }
  }
  @media (max-width: 1024px) {
    /* 테블릿 크기에서의 스타일 */
    
    .header__search {
        min-width: 300px;
    }
  }

  @media (max-width: 768px) {
    /* 모바일 크기에서의 스타일 */
    .header__search {
        display: none;
    }
    .header__login {
      font-size: 0.7rem;
      height: 33px;
      padding: 0 15px;
    }
  }
`;
