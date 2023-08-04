/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useState } from "react";
import { styled } from "styled-components";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { doc, addDoc, collection } from "firebase/firestore";

const ChatInput = ({ channelName, channelId, chatRef }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!channelId) {
      return false;
    }

    const parentDocRef = doc(db, "rooms", channelId);

    const subcollectionRef = collection(parentDocRef, "messages");

    await addDoc(subcollectionRef, {
      message: input,
      timestamp: serverTimestamp(),
      user: "Zeek",
      userImage:
        "https://media.licdn.com/dms/image/C4D03AQHmUQiBqJppXA/profile-displayphoto-shrink_800_800/0/1661721817933?e=1693440000&v=beta&t=fPUawkZ4Giq1Agj0DYEfp_P7NCQVGlNM0qtTvA9025s",
    });

    chatRef?.current?.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${channelName}`}
          type="text"
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
