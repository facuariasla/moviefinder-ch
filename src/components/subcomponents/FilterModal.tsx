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
  { label: "All", value: "" },

];

const FilterModal = (props: { setMovieType: any; setYearMovie: any, movieType:any }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const selectType = ({ target: { value } }: RadioChangeEvent) => {
    // console.log("radio3 checked", value);
    props.setMovieType(value);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    // console.log(date, dateString);
    props.setYearMovie(dateString);
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
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <h3>Type</h3>
            <Radio.Group
              options={options}
              onChange={selectType}
              value={props.movieType}
              optionType="button"
            />
          </div>
          <div>
            <h3>Year</h3>
            <DatePicker onChange={onChange} picker="year" />
          </div>
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
