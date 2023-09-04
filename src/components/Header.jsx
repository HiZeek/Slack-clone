import {
  AccessTimeOutlined,
  CloseOutlined,
  HelpOutlineRounded,
  SearchOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarState, toggleSidebar } from "../features/sidebarSlice";

const Header = () => {
  const [user] = useAuthState(auth);
  const sidebarToggle = useSelector(selectSidebarState);
  const dispatch = useDispatch();

  const sidebarToggler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <HeaderContainer>
      {/* Header left */}
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        {/* <MenuIcon onClick={sidebarToggler} /> */}
        <AccessTimeOutlined />
      </HeaderLeft>

      {/* Header Search */}
      <HeaderSearch>
        <SearchOutlined />
        <input type="text" placeholder="Search Tech Hub" />
      </HeaderSearch>

      {/* Header Right */}
      <HeaderRight>
        <HelpOutlineRounded />
      </HeaderRight>
      {!sidebarToggle ? (
        <MenuIcon onClick={sidebarToggler} />
      ) : (
        <CloseOutlined onClick={sidebarToggler} />
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;

  > .MuiSvgIcon-root {
    margin-right: 30px;
    display: none;
  }

  @media (max-width: 700px) {
    > .MuiSvgIcon-root {
      display: block;
    }
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
  justify-content: space-between;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    > .MuiSvgIcon-root {
      display: none;
    }
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: white;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
