import {
  Button,
  DatePicker,
  DatePickerProps,
  Modal,
  Radio,
  RadioChangeEvent,
  Rate,
  Space,
} from "antd";
import React, { useState } from "react";
import { FilterOutlined } from "@ant-design/icons";

const options = [
  { label: "Movie", value: "movie" },
  { label: "Series", value: "series" },
  { label: "Episode", value: "episode" },
];

const FilterModal = () => {
  const [visible, setVisible] = useState(false);
  const [movieType, setMovieType] = useState("Movie");

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const selectType = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio3 checked", value);
    setMovieType(value);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <FilterOutlined
        onClick={showModal}
        style={{ fontSize: "20px", cursor: "pointer", color: "#fff" }}
      />
      <Modal
        title="Filter"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="Ok"
        cancelText="Cancel"
      >
        <div>
          <h4>Type</h4>
          <Radio.Group
            options={options}
            onChange={selectType}
            value={movieType}
            optionType="button"
          />
        </div>
        <div>
          <h4>Year</h4>
          <DatePicker onChange={onChange} picker="year" />
        </div>
        {/* <Rate allowHalf disabled defaultValue={Math.round(Math.random()*5)} />
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p> */}
      </Modal>
    </>
  );
};

export default FilterModal;
