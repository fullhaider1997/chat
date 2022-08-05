import "./App.css";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import React from "react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./componets";

const APIKEY = "5h98wvtakpby";
const client = StreamChat.getInstance(APIKEY);

const authToken = false;

export default function App() {
  //If authenticate token is not avaliable show Authentication screen
  if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={client} theme={"team light"}>
        <ChannelListContainer />
      </Chat>
    </div>
  );
}
