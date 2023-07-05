import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import { selectRoomId } from "../features/appSlice";
import ChatInput from "./ChatInput";

const Chat = () => {
  const roomId = useSelector((state) => state.app.roomId);
  //   console.log(`check roomId ${roomId}`);
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#Room-name</strong>
          </h4>
          <StarBorderOutlined />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlined /> Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages>{/* List out messages */}</ChatMessages>
      <ChatInput
        // channel name
        channelId={roomId}
      />
    </ChatContainer>
  );
};

export default Chat;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > .MuiSvgIcon-root {
    font-size: 18px;
  }
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 16px;
  }
`;

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatMessages = styled.div``;
