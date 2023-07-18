import styled, { css } from "styled-components";

export const Container = styled.aside`
  background-color: #1e2a3a;

  ${({ isMenuOpen }) =>
    isMenuOpen
      ? css`
          width: 16.3rem;
        `
      : css`
          width: 7.75rem;
        `}

  padding: 2rem 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 8px solid #293544;

  transition: width 0.3s;

  button {
    background: none;
    width: 60px;

    border: none;
    color: white;
  }


  nav {
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1.5rem;
    }

    li {
      a {
        width: fit-content;
        position: relative;
        padding-left: 1.875rem;
        padding-right: 1.875rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        color: white;
        font-size: 20px;

        svg {
          fill: white;
          width: 4rem;
          height: 3rem;
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
          font-size: 20px;
        }

        &.active {
          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: yellow;
            width: 5px;
            height: calc(100% + 10px);

            border-radius: 0 5px 5px 0;
          }
          svg {
            fill: yellow;
          }
          span {
            color: yellow;
          }
        }
      }

      list-style: none;
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    overflow-y: auto;
    padding: 0 0;
    border-top: 8px solid #293544;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0rem;

          svg {
            width: 2rem;
            height: 2rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`;
