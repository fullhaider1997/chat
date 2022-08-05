import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { FaSearchengin } from "react-icons/fa";

export default function ChannelSearch() {
  const { query, setQuery } = useState("");
  const { loading, setLoading } = useState(false); //Its status variable to track if job is finished such as if async is done

  const getChannels = async (text) => {
    try {
      //TODO: fetch channel
      setLoading(false); // finish fetching data
    } catch (error) {
      setQuery("");
    }
  };

  const onSearch = (event) => {
    event.preventDefault();

    setLoading(true);
    setQuery(event.target.value);
    getChannels(event.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <FaSearchengin />
        </div>
        <input
          className="channel-search__input__text"
          placeholder="Search"
          type="text"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
}
