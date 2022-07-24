import {
  DatePicker,
  DatePickerProps,
  Modal,
  Radio,
  RadioChangeEvent,
} from "antd";
import React, { useState } from "react";
import { FilterOutlined } from "@ant-design/icons";

const options = [
  { label: "Movie", value: "movie" },
  { label: "Series", value: "series" },
  { label: "Episode", value: "episode" },
  { label: "All", value: "" },
];

const FilterModal = (props: {
  setMovieType: any;
  setYearMovie: any;
  movieType: any;
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => {
    setVisible(true);
  };

  const okButton = () => {
    setVisible(false);
  };

  const cancelButton = () => {
    setVisible(false);
    props.setMovieType("");
    props.setYearMovie("");
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
        onOk={okButton}
        onCancel={cancelButton}
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
            <DatePicker onChange={onChange} picker="year" allowClear={true} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FilterModal;
