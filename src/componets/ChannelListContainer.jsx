import React from "react";
import { FaHospitalAlt, FaOutdent } from "react-icons/fa";
import { ChannelList, useChatContext } from "stream-chat-react";
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from "./";

const SideBar = () => (
  <div className="channel-list__sidebar" style={{ height: "100%" }}>
    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <FaHospitalAlt />
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner">
        <FaOutdent />
      </div>
    </div>
  </div>
);

const CompanyHeader = () => (
  <div className="channel-list__header">
    <p className="channel-list__header__test">Chat 2.0</p>
  </div>
);

export default function ChannelListContainer() {
  return (
    <>
      <SideBar />
      <div className="channel-list__list__wrapper">
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => <TeamChannelList {...listProps} type="team" />}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="team" />
          )}
        />
        <ChannelList
          filters={{}}
          channelRenderFilterFn={() => {}}
          List={(listProps) => (
            <TeamChannelList {...listProps} type="messaging" />
          )}
          Preview={(previewProps) => (
            <TeamChannelPreview {...previewProps} type="messaging" />
          )}
        />
      </div>
    </>
  );
}
